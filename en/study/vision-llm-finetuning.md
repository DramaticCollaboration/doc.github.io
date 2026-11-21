---
title: Llama-3.2-Vision Vision Fine-Tuning Guide
description: LoRA fine-tuning and UI element recognition optimization workflow for the Llama-3.2-Vision vision-language model
head:
  - - meta
    - name: keywords
      content: Llama-3.2-Vision, vision fine-tuning, Vision-LLM, LoRA, UI test automation, Empasy
  - - meta
    - property: og:title
      content: Llama-3.2-Vision Vision Fine-Tuning Guide | Empasy Technical Research Archive
  - - meta
    - property: og:description
      content: Guide to LoRA fine-tuning and improving web component recognition accuracy for the Llama-3.2-Vision vision-language model
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/study/vision-llm-finetuning
sort: 400
---

# Llama-3.2-Vision Fine-Tuning Guide

## 1. Prerequisites

### 1. **Environment Setup**

```bash
# Install required packages
pip install transformers>=4.37.0
pip install accelerate
pip install datasets
pip install peft
pip install torch>=2.0.0
pip install torchvision
pip install pillow
pip install einops
pip install timm

# Dedicated Llama-3.2-Vision package
pip install git+https://github.com/Llama-VisionLM/Llama-3.2-Vision.git
```

### 2. **Hardware Requirements**

- **GPU Memory**:
  - Full Fine-tuning: 80GB+ (A100 80GB)
  - LoRA Fine-tuning: 24GB+ (RTX 4090)
  - QLoRA: 16GB+ (V100 16GB)

## Dataset Format

### 1. **Standard Data Format**

```json
{
  "conversations": [
    {
      "from": "human",
      "value": "<image>\nWhat do you see in this image?"
    },
    {
      "from": "gpt",
      "value": "In this image, a red sports car is parked on a road."
    }
  ],
  "image": "base64_encoded_image_or_image_path"
}
```

### 2. **Multi-Turn Conversation Format**

```json
{
  "conversations": [
    {
      "from": "human",
      "value": "<image>\nWhere is the background of this photo?"
    },
    {
      "from": "gpt",
      "value": "It is a city street."
    },
    {
      "from": "human",
      "value": "What color is the vehicle?"
    },
    {
      "from": "gpt",
      "value": "It is red."
    }
  ],
  "image": "base64_encoded_image"
}
```

## Fine-Tuning Methods

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

# Load model
model = Llama32VisionForConditionalGeneration.from_pretrained(
    "Llama-Vision/Llama-3.2-Vision-7B-Instruct",
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

processor = Llama32VisionProcessor.from_pretrained("Llama-Vision/Llama-3.2-Vision-7B-Instruct")

# Prepare dataset
def load_dataset(json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    def process_example(example):
        # Process image
        image = Image.open(example['image_path']).convert('RGB')

        # Process conversation
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

# Configure Trainer
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

# Start training
trainer.train()
trainer.save_model()
```

### 2. **LoRA Fine-Tuning**

```python
# lora_finetune.py
from peft import LoraConfig, get_peft_model
from transformers import Llama32VisionForConditionalGeneration

# LoRA configuration
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
    lora_dropout=0.1,
    bias="none",
    task_type="CAUSAL_LM"
)

# Apply LoRA to model
model = Llama32VisionForConditionalGeneration.from_pretrained(
    "Llama-Vision/Llama-3.2-Vision-7B-Instruct",
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()

# Set a higher learning rate
training_args = TrainingArguments(
    output_dir="./qwen2-vl-lora",
    per_device_train_batch_size=4,  # LoRA uses less memory
    gradient_accumulation_steps=2,
    learning_rate=1e-4,  # Higher learning rate
    num_train_epochs=5,
    fp16=True,
    # ... remaining settings are the same
)
```

### 3. **QLoRA Fine-Tuning (4-bit Quantization)**

```python
# qlora_finetune.py
from transformers import BitsAndBytesConfig
from peft import prepare_model_for_kbit_training

# 4-bit quantization configuration
quantization_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16
)

# Load quantized model
model = Llama32VisionForConditionalGeneration.from_pretrained(
    "Llama-Vision/Llama-3.2-Vision-7B-Instruct",
    quantization_config=quantization_config,
    device_map="auto"
)

# Prepare for QLoRA
model = prepare_model_for_kbit_training(model)

# LoRA configuration (QLoRA)
lora_config = LoraConfig(
    r=8,  # Smaller rank
    lora_alpha=16,
    target_modules=["q_proj", "v_proj"],  # Target key modules only
    lora_dropout=0.1,
    bias="none",
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, lora_config)
```

## Data Preprocessing Utilities

```python
# data_utils.py
from PIL import Image
import base64
import io

def image_to_base64(image_path):
    """Convert an image to base64"""
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

def base64_to_image(base64_str):
    """Convert base64 to an image"""
    image_data = base64.b64decode(base64_str)
    return Image.open(io.BytesIO(image_data))

def create_conversation_dataset(image_paths, questions, answers):
    """Dataset creation helper"""
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
    """Save dataset"""
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(dataset, f, ensure_ascii=False, indent=2)
```

## Training Script Example

```bash
#!/bin/bash
# train_qwen2_vl.sh

# Set environment variables
export MODEL_NAME="Llama-Vision/Llama-3.2-Vision-7B-Instruct"
export DATA_PATH="train_data.json"
export OUTPUT_DIR="./qwen2-vl-finetuned"
export BATCH_SIZE=2
export LEARNING_RATE=2e-5
export EPOCHS=3

# Run training
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

## Evaluation and Inference

```python
# evaluate.py
from transformers import pipeline
from PIL import Image

# Load fine-tuned model
model_path = "./qwen2-vl-finetuned"
vl_pipeline = pipeline(
    "visual-question-answering",
    model=model_path,
    device="cuda:0"
)

# Test image
image = Image.open("test_image.jpg")

# Inference
question = "What do you see in this image?"
result = vl_pipeline(image=image, question=question)

print(f"Question: {question}")
print(f"Answer: {result['answer']}")
print(f"Confidence: {result['score']:.4f}")
```

## Optimization Tips

### 1. **Memory Optimization**

```python
# Gradient checkpointing
model.gradient_checkpointing_enable()

# Adjust batch size
training_args = TrainingArguments(
    per_device_train_batch_size=1,
    gradient_accumulation_steps=8,  # Effective batch size: 8
)

# Mixed precision training
training_args = TrainingArguments(
    fp16=True,  # or bf16=True
)
```

### 2. **Learning Rate Scheduling**

```python
from transformers import get_cosine_schedule_with_warmup

# Warmup scheduler
num_training_steps = len(train_dataloader) * num_epochs
num_warmup_steps = int(0.1 * num_training_steps)

scheduler = get_cosine_schedule_with_warmup(
    optimizer,
    num_warmup_steps=num_warmup_steps,
    num_training_steps=num_training_steps
)
```

## Task-Specific Fine-Tuning Examples

### 1. **Image Captioning**

```python
def prepare_captioning_data(image_dir, captions_file):
    """Prepare image captioning data"""
    dataset = []
    with open(captions_file, 'r', encoding='utf-8') as f:
        for line in f:
            img_name, caption = line.strip().split('\t')
            dataset.append({
                "conversations": [
                    {
                        "from": "human",
                        "value": "<image>\nPlease describe this image."
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
    """Prepare VQA data"""
    # Process questions and annotations files
    # ...
    return vqa_dataset
```

## Monitoring and Logging

```python
# Weights & Biases (wandb) integration
import wandb

wandb.init(project="qwen2-vl-finetuning")

training_args = TrainingArguments(
    output_dir="./output",
    report_to="wandb",  # Report to wandb
    logging_dir="./logs",
    logging_steps=10,
)
```

## Troubleshooting

### **Common Issues:**

1. **CUDA Out of Memory**: Reduce batch size, use gradient accumulation
2. **NaN Loss**: Lower learning rate, apply gradient clipping
3. **Slow Training**: Use mixed precision, optimize data loading

```python
# Gradient clipping
training_args = TrainingArguments(
    max_grad_norm=1.0,  # Gradient clipping
)
```
