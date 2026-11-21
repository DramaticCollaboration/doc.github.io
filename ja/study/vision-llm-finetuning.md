---
title: Llama-3.2-Vision ビジョンファインチューニングガイド
description: Llama-3.2-Vision ビジョン言語モデルの LoRA ファインチューニングおよび UI 要素認識の最適化手順
head:
  - - meta
    - name: keywords
      content: Llama-3.2-Vision, ビジョンファインチューニング, Vision-LLM, LoRA, UI テスト自動化, エムパシー, Empasy
  - - meta
    - property: og:title
      content: Llama-3.2-Vision ビジョンファインチューニングガイド | エムパシー技術研究アーカイブ
  - - meta
    - property: og:description
      content: Llama-3.2-Vision ビジョン言語モデルの LoRA ファインチューニングおよび Web コンポーネント認識精度向上ガイド
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/study/vision-llm-finetuning
sort: 400
---

# Llama-3.2-Vision ファインチューニングガイド

## 1. ファインチューニング前の準備事項

### 1. **環境設定**

```bash
# 必須パッケージのインストール
pip install transformers>=4.37.0
pip install accelerate
pip install datasets
pip install peft
pip install torch>=2.0.0
pip install torchvision
pip install pillow
pip install einops
pip install timm

# Llama-3.2-Vision 専用パッケージ
pip install git+https://github.com/Llama-VisionLM/Llama-3.2-Vision.git
```

### 2. **ハードウェア要件**

- **GPU メモリ**:
  - Full Fine-tuning: 80GB+ (A100 80GB)
  - LoRA Fine-tuning: 24GB+ (RTX 4090)
  - QLoRA: 16GB+ (V100 16GB)

## データセット形式

### 1. **標準データ形式**

```json
{
  "conversations": [
    {
      "from": "human",
      "value": "<image>\nこの画像には何が見えますか？"
    },
    {
      "from": "gpt",
      "value": "この画像には赤いスポーツカーが道路の上に駐車されています。"
    }
  ],
  "image": "base64_encoded_image_or_image_path"
}
```

### 2. **マルチターン対話形式**

```json
{
  "conversations": [
    {
      "from": "human",
      "value": "<image>\nこの写真の背景はどこですか？"
    },
    {
      "from": "gpt",
      "value": "都市の通り（街路）です。"
    },
    {
      "from": "human",
      "value": "車両の色は何色ですか？"
    },
    {
      "from": "gpt",
      "value": "赤色です。"
    }
  ],
  "image": "base64_encoded_image"
}
```

## ファインチューニング方法

### 1. **Full Fine-tuning**

```python
# full_finetune.py
import torch
from transformers import (
    Llama32VisionForConditionalGeneration,
    Llama32VisionProcessor,
    TrainingArguments,
    Trainer
)
from datasets import Dataset
import json

# モデルの読み込み
model = Llama32VisionForConditionalGeneration.from_pretrained(
    "Llama-Vision/Llama-3.2-Vision-7B-Instruct",
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

processor = Llama32VisionProcessor.from_pretrained("Llama-Vision/Llama-3.2-Vision-7B-Instruct")

# データセットの準備
def load_dataset(json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    def process_example(example):
        # 画像処理
        image = Image.open(example['image_path']).convert('RGB')

        # 対話処理
        conversations = example['conversations']
        text = processor.apply_chat_template(conversations, add_generation_prompt=False)

        return {
            'pixel_values': processor.image_processor(image, return_tensors="pt").pixel_values[0],
            'input_ids': processor.tokenizer(text, return_tensors="pt").input_ids[0],
            'labels': processor.tokenizer(text, return_tensors="pt").input_ids[0]
        }

    return Dataset.from_list(data).map(process_example, batched=False)

train_dataset = load_dataset("train_data.json")

# Training Arguments
training_args = TrainingArguments(
    output_dir="./qwen2-vl-finetuned",
    per_device_train_batch_size=2,
    gradient_accumulation_steps=4,
    learning_rate=2e-5,
    num_train_epochs=3,
    fp16=True,
    logging_steps=10,
    save_steps=500,
    eval_steps=500,
    warmup_steps=100,
    weight_decay=0.01,
    gradient_checkpointing=True,
    remove_unused_columns=False,
)

# Trainer 設定
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    data_collator=lambda data: {
        'pixel_values': torch.stack([d['pixel_values'] for d in data]),
        'input_ids': torch.nn.utils.rnn.pad_sequence(
            [d['input_ids'] for d in data],
            batch_first=True,
            padding_value=processor.tokenizer.pad_token_id
        ),
        'labels': torch.nn.utils.rnn.pad_sequence(
            [d['labels'] for d in data],
            batch_first=True,
            padding_value=-100
        ),
    }
)

# 学習開始
trainer.train()
trainer.save_model()
```

### 2. **LoRA ファインチューニング**

```python
# lora_finetune.py
from peft import LoraConfig, get_peft_model
from transformers import Llama32VisionForConditionalGeneration

# LoRA 設定
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
    lora_dropout=0.1,
    bias="none",
    task_type="CAUSAL_LM"
)

# モデルに LoRA を適用
model = Llama32VisionForConditionalGeneration.from_pretrained(
    "Llama-Vision/Llama-3.2-Vision-7B-Instruct",
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()

# 学習率をより高く設定
training_args = TrainingArguments(
    output_dir="./qwen2-vl-lora",
    per_device_train_batch_size=4,  # LoRA はメモリ使用量が少ない
    gradient_accumulation_steps=2,
    learning_rate=1e-4,  # より高い学習率
    num_train_epochs=5,
    fp16=True,
    # ... その他の設定は同じ
)
```

### 3. **QLoRA ファインチューニング (4bit 量子化)**

```python
# qlora_finetune.py
from transformers import BitsAndBytesConfig
from peft import prepare_model_for_kbit_training

# 4bit 量子化設定
quantization_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16
)

# 量子化されたモデルを読み込み
model = Llama32VisionForConditionalGeneration.from_pretrained(
    "Llama-Vision/Llama-3.2-Vision-7B-Instruct",
    quantization_config=quantization_config,
    device_map="auto"
)

# QLoRA 準備
model = prepare_model_for_kbit_training(model)

# LoRA 設定 (QLoRA)
lora_config = LoraConfig(
    r=8,  # より小さい rank
    lora_alpha=16,
    target_modules=["q_proj", "v_proj"],  # 主要モジュールのみ対象
    lora_dropout=0.1,
    bias="none",
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, lora_config)
```

## データ前処理ユーティリティ

```python
# data_utils.py
from PIL import Image
import base64
import io

def image_to_base64(image_path):
    """画像を base64 に変換"""
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

def base64_to_image(base64_str):
    """base64 を画像に変換"""
    image_data = base64.b64decode(base64_str)
    return Image.open(io.BytesIO(image_data))

def create_conversation_dataset(image_paths, questions, answers):
    """データセット生成ヘルパー"""
    dataset = []
    for img_path, question, answer in zip(image_paths, questions, answers):
        dataset.append({
            "conversations": [
                {
                    "from": "human",
                    "value": f"<image>\n{question}"
                },
                {
                    "from": "gpt",
                    "value": answer
                }
            ],
            "image": image_to_base64(img_path)
        })
    return dataset

def save_dataset(dataset, output_path):
    """データセット保存"""
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(dataset, f, ensure_ascii=False, indent=2)
```

## 学習スクリプト例

```bash
#!/bin/bash
# train_qwen2_vl.sh

# 環境変数設定
export MODEL_NAME="Llama-Vision/Llama-3.2-Vision-7B-Instruct"
export DATA_PATH="train_data.json"
export OUTPUT_DIR="./qwen2-vl-finetuned"
export BATCH_SIZE=2
export LEARNING_RATE=2e-5
export EPOCHS=3

# 学習実行
python -m torch.distributed.launch \
    --nproc_per_node=4 \
    --master_port=29500 \
    train_qwen2_vl.py \
    --model_name $MODEL_NAME \
    --data_path $DATA_PATH \
    --output_dir $OUTPUT_DIR \
    --per_device_train_batch_size $BATCH_SIZE \
    --learning_rate $LEARNING_RATE \
    --num_train_epochs $EPOCHS \
    --fp16 \
    --gradient_checkpointing \
    --logging_steps 10 \
    --save_steps 500
```

## 評価および推論

```python
# evaluate.py
from transformers import pipeline
from PIL import Image

# ファインチューニング済みモデルの読み込み
model_path = "./qwen2-vl-finetuned"
vl_pipeline = pipeline(
    "visual-question-answering",
    model=model_path,
    device="cuda:0"
)

# テスト画像
image = Image.open("test_image.jpg")

# 推論
question = "この画像には何が見えますか？"
result = vl_pipeline(image=image, question=question)

print(f"Question: {question}")
print(f"Answer: {result['answer']}")
print(f"Confidence: {result['score']:.4f}")
```

## 最適化のヒント

### 1. **メモリ最適化**

```python
# グラディエントチェックポインティング
model.gradient_checkpointing_enable()

# バッチサイズの調整
training_args = TrainingArguments(
    per_device_train_batch_size=1,
    gradient_accumulation_steps=8,  # 実効バッチサイズ: 8
)

# mixed precision training
training_args = TrainingArguments(
    fp16=True,  # または bf16=True
)
```

### 2. **学習率スケジューリング**

```python
from transformers import get_cosine_schedule_with_warmup

# ウォームアップスケジューラ
num_training_steps = len(train_dataloader) * num_epochs
num_warmup_steps = int(0.1 * num_training_steps)

scheduler = get_cosine_schedule_with_warmup(
    optimizer,
    num_warmup_steps=num_warmup_steps,
    num_training_steps=num_training_steps
)
```

## 特定タスクのファインチューニング例

### 1. **画像キャプショニング**

```python
def prepare_captioning_data(image_dir, captions_file):
    """画像キャプショニングデータの準備"""
    dataset = []
    with open(captions_file, 'r', encoding='utf-8') as f:
        for line in f:
            img_name, caption = line.strip().split('\t')
            dataset.append({
                "conversations": [
                    {
                        "from": "human",
                        "value": "<image>\nこの画像を説明してください。"
                    },
                    {
                        "from": "gpt",
                        "value": caption
                    }
                ],
                "image": image_to_base64(f"{image_dir}/{img_name}")
            })
    return dataset
```

### 2. **VQA (Visual Question Answering)**

```python
def prepare_vqa_data(questions_file, annotations_file, image_dir):
    """VQA データの準備"""
    # questions および annotations ファイルの処理
    # ...
    return vqa_dataset
```

## モニタリングおよびロギング

```python
# wandb 連携
import wandb

wandb.init(project="qwen2-vl-finetuning")

training_args = TrainingArguments(
    output_dir="./output",
    report_to="wandb",  # wandb にレポート
    logging_dir="./logs",
    logging_steps=10,
)
```

## トラブルシューティング

### **Common Issues:**

1. **CUDA Out of Memory**: バッチサイズを小さくする、グラディエントアキュムレーションを使用する
2. **NaN Loss**: 学習率を下げる、gradient clipping を適用する
3. **Slow Training**: mixed precision を使用する、データローディングを最適化する

```python
# グラディエントクリッピング
training_args = TrainingArguments(
    max_grad_norm=1.0,  # グラディエントクリッピング
)
```

