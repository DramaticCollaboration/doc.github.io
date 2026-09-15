---
title: "엔터프라이즈 보안 & PII 개인정보 보호"
sidebarTitle: "보안 & PII 마스킹"
description: "민감 개인정보(PII) 사전 마스킹, 프롬프트 인젝션 방어 및 기업 규정 준수를 위한 보안 가드레일을 설명합니다."
head:
  - - meta
    - name: keywords
      content: PII 마스킹, 엔터프라이즈 보안, 프롬프트 인젝션, 개인정보 보호, AI 가드레일, 컴플라이언스, 보안 거버넌스
  - - meta
    - property: og:title
      content: "엔터프라이즈 보안 & PII 개인정보 보호"
  - - meta
    - property: og:description
      content: "클라우드 모델 전송 전 주민번호, 카드번호, 사내 기밀을 원천 마스킹하는 엔터프라이즈 보안 엔진"
  - - meta
    - property: og:url
      content: https://doc.empasy.com/syncllm/security-and-pii
sort: 5
---

# 엔터프라이즈 보안 & PII 개인정보 보호

기업 환경에서 외부 퍼블릭 LLM을 활용할 때 가장 중요한 과제는 **고객 개인정보(PII) 및 사내 기밀 유출 방지**입니다.

SyncLLM은 모든 데이터 패킷이 외부 네트워크로 전송되기 전, 게이트웨이 레벨에서 강력한 인라인 보안 필터를 적용합니다.

---

## 1. 실시간 PII 자동 마스킹 파이프라인

```mermaid
flowchart LR
    RawInput["사용자 원본 프롬프트
'홍길동 900101-1234567 결제 취소해줘'"]
    
    subgraph Gateway ["SyncLLM Inline Guard"]
        Detector["Regex + NER PII 감지기"]
        Vault["임시 보안 토큰 금고 (TTL 300s)"]
        Masker["마스킹 치환기"]
    end
    
    ExternalLLM["외부 퍼블릭 LLM
'홍길동 [PII_RRN_01] 결제 취소해줘'"]
    
    RawInput --> Detector
    Detector --> Vault
    Detector --> Masker --> ExternalLLM
```

### 주요 탐지 및 마스킹 대상
- **개인식별정보**: 주민등록번호, 외국인등록번호, 여권번호, 운전면허번호.
- **금융 정보**: 신용/체크카드 번호, 계좌번호.
- **연락처 정보**: 휴대폰 번호, 일반 전화번호, 이메일 주소.
- **시스템 인증키**: AWS Access Key, OpenAI API Key, DB Connection String, 사내 JWT Token.

---

## 2. 프롬프트 인젝션 & 탈취 방어 (Prompt Defense)

악의적인 사용자가 시스템 프롬프트를 탈취하거나(Jailbreak), 에이전트의 권한을 오남용하려는 패턴을 탐지합니다.
- **인젝션 휴리스틱 탐지**: `Ignore previous instructions`, `System prompt bypass` 등 알려진 인젝션 시그니처를 사전 차단합니다.
- **감사 및 추적성 (Full Audit Trail)**: 모든 차단 이벤트와 API 접근 내역은 보안 운영팀(SIEM)으로 실시간 전달되어 즉각적인 대응을 지원합니다.
