---
title: Qwen2 VL Fine-Tuning
description: Qwen2 VL 모델 FIne-Tuning
head:
  - - meta
    - name: keywords
      content: 공부기록, 학습일기, 지식저장소, 공부로그, 학습관리, 공부노트, 지식정리, 공부방법, 학습저장, 기억보조
  - - meta
    - property: og:title
      content: 📚 두뇌 저장소 - 재미있는 공부 기록 놀이터
  - - meta
    - property: og:description
      content: "까먹지 말고 재밌게 저장하자!" 🎯 공부한 내용을 자유롭게 기록하는 즐거운 지식 저장소
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/study/
sort: 400
---

# Qwen2-VL 파인튜닝 가이드 by LLM

## 🎯 파인튜닝 전 준비사항

### 1. **환경 설정**

```bash
# 필수 패키지 설치
pip install transformers>=4.37.0
pip install accelerate
pip install datasets
pip install peft
pip install torch>=2.0.0
pip install torchvision
pip install pillow
pip install einops
pip install timm

# Qwen2-VL 전용 패키지
pip install git+https://github.com/QwenLM/Qwen2-VL.git
```

### 2. **하드웨어 요구사항**

- **GPU 메모리**:
  - Full Fine-tuning: 80GB+ (A100 80GB)
  - LoRA Fine-tuning: 24GB+ (RTX 4090)
  - QLoRA: 16GB+ (V100 16GB)

## 📊 데이터셋 형식

### 1. **표준 데이터 형식**

```json
{
  "conversations": [
    {
      "from": "human",
      "value": "<image>\n이 이미지에서 무엇이 보이나요?"
    },
    {
      "from": "gpt",
      "value": "이 이미지에는 빨간색 스포츠카가 도로 위에 주차되어 있습니다."
    }
  ],
  "image": "base64_encoded_image_or_image_path"
}
```

### 2. **다중 턴 대화 형식**

```json
{
  "conversations": [
    {
      "from": "human",
      "value": "<image>\n이 사진의 배경은 어디인가요?"
    },
    {
      "from": "gpt",
      "value": "도시의 거리입니다."
    },
    {
      "from": "human",
      "value": "차량의 색상은 무엇인가요?"
    },
    {
      "from": "gpt",
      "value": "빨간색입니다."
    }
  ],
  "image": "base64_encoded_image"
}
```

## 🔧 파인튜닝 방법

### 1. **Full Fine-tuning**

```python
# full_finetune.py
import torch
from transformers import (
    Qwen2VLForConditionalGeneration,
    Qwen2VLProcessor,
    TrainingArguments,
    Trainer
)
from datasets import Dataset
import json

# 모델 로드
model = Qwen2VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen2-VL-7B-Instruct",
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

processor = Qwen2VLProcessor.from_pretrained("Qwen/Qwen2-VL-7B-Instruct")

# 데이터셋 준비
def load_dataset(json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    def process_example(example):
        # 이미지 처리
        image = Image.open(example['image_path']).convert('RGB')

        # 대화 처리
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

# Trainer 설정
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

# 학습 시작
trainer.train()
trainer.save_model()
```

### 2. **LoRA 파인튜닝**

```python
# lora_finetune.py
from peft import LoraConfig, get_peft_model
from transformers import Qwen2VLForConditionalGeneration

# LoRA 설정
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
    lora_dropout=0.1,
    bias="none",
    task_type="CAUSAL_LM"
)

# 모델에 LoRA 적용
model = Qwen2VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen2-VL-7B-Instruct",
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()

# 학습률을 더 높게 설정
training_args = TrainingArguments(
    output_dir="./qwen2-vl-lora",
    per_device_train_batch_size=4,  # LoRA는 메모리 사용량이 적음
    gradient_accumulation_steps=2,
    learning_rate=1e-4,  # 더 높은 학습률
    num_train_epochs=5,
    fp16=True,
    # ... 나머지 설정은 동일
)
```

### 3. **QLoRA 파인튜닝 (4bit 양자화)**

```python
# qlora_finetune.py
from transformers import BitsAndBytesConfig
from peft import prepare_model_for_kbit_training

# 4bit 양자화 설정
quantization_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16
)

# 양자화된 모델 로드
model = Qwen2VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen2-VL-7B-Instruct",
    quantization_config=quantization_config,
    device_map="auto"
)

# QLoRA 준비
model = prepare_model_for_kbit_training(model)

# LoRA 설정 (QLoRA)
lora_config = LoraConfig(
    r=8,  # 더 작은 rank
    lora_alpha=16,
    target_modules=["q_proj", "v_proj"],  # 주요 모듈만 대상
    lora_dropout=0.1,
    bias="none",
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, lora_config)
```

## 📝 데이터 전처리 유틸리티

```python
# data_utils.py
from PIL import Image
import base64
import io

def image_to_base64(image_path):
    """이미지를 base64로 변환"""
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

def base64_to_image(base64_str):
    """base64를 이미지로 변환"""
    image_data = base64.b64decode(base64_str)
    return Image.open(io.BytesIO(image_data))

def create_conversation_dataset(image_paths, questions, answers):
    """데이터셋 생성 도우미"""
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
    """데이터셋 저장"""
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(dataset, f, ensure_ascii=False, indent=2)
```

## 🚀 학습 스크립트 예제

```bash
#!/bin/bash
# train_qwen2_vl.sh

# 환경 변수 설정
export MODEL_NAME="Qwen/Qwen2-VL-7B-Instruct"
export DATA_PATH="train_data.json"
export OUTPUT_DIR="./qwen2-vl-finetuned"
export BATCH_SIZE=2
export LEARNING_RATE=2e-5
export EPOCHS=3

# 학습 실행
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

## 🔍 평가 및 추론

```python
# evaluate.py
from transformers import pipeline
from PIL import Image

# 파인튜닝된 모델 로드
model_path = "./qwen2-vl-finetuned"
vl_pipeline = pipeline(
    "visual-question-answering",
    model=model_path,
    device="cuda:0"
)

# 테스트 이미지
image = Image.open("test_image.jpg")

# 추론
question = "이 이미지에서 무엇이 보이나요?"
result = vl_pipeline(image=image, question=question)

print(f"Question: {question}")
print(f"Answer: {result['answer']}")
print(f"Confidence: {result['score']:.4f}")
```

## ⚡ 최적화 팁

### 1. **메모리 최적화**

```python
# 그래디언트 체크포인팅
model.gradient_checkpointing_enable()

# 배치 사이즈 조정
training_args = TrainingArguments(
    per_device_train_batch_size=1,
    gradient_accumulation_steps=8,  # 효과적 배치 크기: 8
)

# mixed precision training
training_args = TrainingArguments(
    fp16=True,  # 또는 bf16=True
)
```

### 2. **학습률 스케줄링**

```python
from transformers import get_cosine_schedule_with_warmup

# 웜업 스케줄러
num_training_steps = len(train_dataloader) * num_epochs
num_warmup_steps = int(0.1 * num_training_steps)

scheduler = get_cosine_schedule_with_warmup(
    optimizer,
    num_warmup_steps=num_warmup_steps,
    num_training_steps=num_training_steps
)
```

## 🎯 특정 태스크 파인튜닝 예제

### 1. **이미지 캡셔닝**

```python
def prepare_captioning_data(image_dir, captions_file):
    """이미지 캡셔닝 데이터 준비"""
    dataset = []
    with open(captions_file, 'r', encoding='utf-8') as f:
        for line in f:
            img_name, caption = line.strip().split('\t')
            dataset.append({
                "conversations": [
                    {
                        "from": "human",
                        "value": "<image>\n이 이미지를 설명해주세요."
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
    """VQA 데이터 준비"""
    # questions 및 annotations 파일 처리
    # ...
    return vqa_dataset
```

## 📊 모니터링 및 로깅

```python
# wandb 연동
import wandb

wandb.init(project="qwen2-vl-finetuning")

training_args = TrainingArguments(
    output_dir="./output",
    report_to="wandb",  # wandb에 리포트
    logging_dir="./logs",
    logging_steps=10,
)
```

## 🛠️ 문제 해결

### **Common Issues:**

1. **CUDA Out of Memory**: 배치 사이즈 줄이기, 그래디언트 accumulation 사용
2. **NaN Loss**: 학습률 낮추기, gradient clipping 적용
3. **Slow Training**: mixed precision 사용, 데이터 로딩 최적화

```python
# 그래디언트 클리핑
training_args = TrainingArguments(
    max_grad_norm=1.0,  # 그래디언트 클리핑
)
```
