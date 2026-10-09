---
title: LLM 파인튜닝 후 성능 저하 원인 및 해결책 분석
shortTitle: 파인튜닝 성능 저하 분석
description: 도메인 특화 LLM 파인튜닝 시 발생하는 일반 추론 능력 저하(파국적 망각)의 근본 메커니즘과 LoRA 하이퍼파라미터 최적화 및 정규화 리플레이 기법
category: AI 연구
sort: 500
---

# LLM 파인튜닝 후 성능 저하 원인 및 해결책 분석

## 1. 개요 및 문제 정의

도메인 특화 작업(예: SQL 생성, 사내 규정 QA, 의료/금융 분석)을 위해 파운데이션 모델(Foundation Model)을 파인튜닝(Fine-tuning)할 때, 목표 태스크의 정확도는 향상되지만 **일반 추론(General Reasoning), 수리적 사고, 다국어 번역, 코딩 능력 등 기초 능력이 급격히 붕괴하는 현상**이 빈번하게 관측됩니다.

이를 학술적으로 **파국적 망각(Catastrophic Forgetting)** 또는 **정렬 비용(Alignment Tax)**이라 부르며, 엔터프라이즈 AI 시스템 구축 시 반드시 해결해야 할 핵심 과제입니다.

---

## 2. 성능 저하의 4대 핵심 원인

```mermaid
flowchart TD
    Degradation[파인튜닝 후 성능 저하]
    Degradation --> Cause1[1. 파국적 망각<br/>(가중치 공간의 급격한 이동)]
    Degradation --> Cause2[2. 과적합 및 다양성 상실<br/>(Overfitting to Narrow Format)]
    Degradation --> Cause3[3. LoRA 랭크 및 알파 불균형<br/>(Rank Saturation & Scaling)]
    Degradation --> Cause4[4. 레이블 노이즈 & 데이터 오염<br/>(Format Inconsistency)]
```

### 2.1 가중치 공간의 급격한 변위 (Catastrophic Forgetting)
파운데이션 모델은 수조 개의 토큰을 사전 학습(Pre-training)하며 광범위한 다차원 매니폴드(Manifold) 상에 균형 잡힌 가중치를 형성합니다.  
소규모 도메인 데이터셋으로 전체 가중치를 미세 조정(Full Fine-Tuning)하거나 과도하게 높은 학습률(Learning Rate)을 적용하면, 기존의 최적화 유역(Basin)을 벗어나 특정 태스크에만 편향된 가중치 국소점으로 이동하게 됩니다.

### 2.2 출력 형식 과적합 (Format Overfitting)
특정 JSON 템플릿이나 짧은 문장 형식을 강제 학습시킬 경우, 모델은 문제의 본질적인 인과관계를 추론하는 능력 대신 **표면적인 문법 패턴만을 모방(Surface Pattern Mimicking)**하게 되며, 약간의 프롬프트 변형에도 오답을 출력하는 취약성을 드러냅니다.

### 2.3 LoRA(Low-Rank Adaptation) 하이퍼파라미터 불일치
PEFT(Parameter-Efficient Fine-Tuning) 기법인 LoRA 사용 시, $r$(Rank)과 $\alpha$(Alpha)의 비율 및 학습률 설정 오류로 인해 가중치 업데이트 크기가 모델 기저 지식을 덮어쓰는 문제가 발생합니다:
$$\Delta W = \frac{\alpha}{r} (B \times A)$$
- $r$이 너무 크면(예: $r=128$) 파운데이션 모델의 일반화 능력을 파괴할 위험이 커집니다.
- $\alpha / r$ 비율이 2.0을 초과하면 업데이트 크기가 지나치게 커져 이전 지식의 파괴적 소실이 가속됩니다.

---

## 3. 실증적 해결 방안 및 완화 전략

### 3.1 일반 도메인 데이터 리플레이 혼합 (General Replay Mixing)
가장 효과적인 해결책은 도메인 특화 데이터셋에 **5% ~ 15% 비율의 고품질 일반 추론 데이터셋(General Instruction Replay Dataset)**을 혼합하여 학습하는 것입니다.

```python
# 데이터셋 혼합 비율 예시 (PyTorch Dataset)
domain_samples = load_domain_dataset()       # 85% (도메인 특화 데이터)
general_samples = load_alpaca_eval_mix()     # 15% (일반 추론/수학/코딩 정규화 데이터)

training_dataset = ConcatDataset([domain_samples, general_samples])
```

- **효과**: 손실 함수(Loss function)가 일반 추론 능력의 그래디언트를 지속적으로 반영하여 가중치가 기존 매니폴드 영역 내에서 안정적으로 유지됩니다.

### 3.2 LoRA 하이퍼파라미터 골든 룰 (Golden Rules)
1. **Rank와 Alpha 권장 설정**:
   - $r = 16$ 또는 $r = 32$ (대부분의 다운스트림 태스크에 충분)
   - $\alpha = 16$ 또는 $\alpha = 32$ ($rac{\alpha}{r} = 1.0$)
2. **타깃 모듈 확장**: 오직 `q_proj`, `v_proj`만 학습하기보다는 모든 선형 계층(`q, k, v, o, gate, up, down`)에 저차원 어댑터를 적용하는 것이 파국적 망각을 최소화합니다.
3. **Weight Decay 및 코사인 스케줄러**:
   - Cosine Annealing Learning Rate Schedule 적용
   - Warmup ratio 0.05 ~ 0.1 설정

### 3.3 NEFTune (Noisy Embedding Fine-Tuning) 기법 도입
임베딩 레이어에 가우시안 노이즈(Gaussian Noise)를 미세하게 주입하여 모델이 표면적인 토큰 토폴로지에 과적합되는 것을 방지합니다:
$$\tilde{E} = E + \frac{\alpha}{\sqrt{L \cdot d}} \cdot \text{Uniform}(-1, 1)$$
- 학습 데이터의 정답 패턴 암기를 억제하고 의미론적 추론 능력을 유지시키는 데 탁월한 효과를 보입니다.

---

## 4. 검증 체크리스트 및 벤치마크 파이프라인

파인튜닝 완료 후 프로덕션 배포 전, 도메인 점수뿐만 아니라 **기초 벤치마크의 회귀 여부를 필수 점검**해야 합니다:

| 평가 지표 | 점검 대상 | 통과 기준 (Threshold) |
|:---|:---|:---|
| **Domain Benchmark** | 도메인 특화 정밀도/재현율 | 베이스 모델 대비 **+15% 이상 향상** |
| **MMLU / ARC** | 일반 지식 및 상식 추론 | 베이스 모델 대비 **-3% 이내 방어** |
| **GSM8K** | 다단계 수리적 연산 능력 | 베이스 모델 대비 **-5% 이내 방어** |
| **HumanEval** | 파이썬 코딩 및 문법 생성 | 베이스 모델 대비 **-5% 이내 방어** |
