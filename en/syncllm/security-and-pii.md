---
title: "Enterprise Security & PII Protection"
sidebarTitle: "Security & PII Masking"
description: "Explains security guardrails for proactive personally identifiable information (PII) masking, prompt injection defense, and enterprise regulatory compliance."
head:
  - - meta
    - name: keywords
      content: PII Masking, Enterprise Security, Prompt Injection, Data Privacy, AI Guardrails, Compliance, Security Governance
  - - meta
    - property: og:title
      content: "Enterprise Security & PII Protection"
  - - meta
    - property: og:description
      content: "An enterprise security engine that masks national IDs, card numbers, and corporate secrets before transmitting prompts to cloud models"
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/syncllm/security-and-pii
sort: 5
---

# Enterprise Security & PII Protection

When leveraging external public LLMs in an enterprise environment, the highest priority is **preventing the leakage of customer personally identifiable information (PII) and internal corporate secrets**.

SyncLLM enforces strict inline security filters at the gateway level before any data packet leaves your network.

---

## 1. Real-Time Automatic PII Masking Pipeline

```mermaid
flowchart LR
    RawInput["Original User Prompt
'Hong Gil-dong 900101-1234567 cancel payment'"]
    
    subgraph Gateway ["SyncLLM Inline Guard"]
        Detector["Regex + NER PII Detector"]
        Vault["Temporary Security Token Vault (TTL 300s)"]
        Masker["Masking Substitutor"]
    end
    
    ExternalLLM["External Public LLM
'Hong Gil-dong [PII_RRN_01] cancel payment'"]
    
    RawInput --> Detector
    Detector --> Vault
    Detector --> Masker --> ExternalLLM
```

### Primary Detection and Masking Targets
- **Personal Identification Numbers**: National registration numbers, alien registration numbers, passport numbers, and driver's license numbers.
- **Financial Information**: Credit/debit card numbers and bank account numbers.
- **Contact Information**: Mobile phone numbers, landline numbers, and email addresses.
- **System Credentials**: AWS Access Keys, OpenAI API Keys, DB connection strings, and internal JWT tokens.

---

## 2. Prompt Injection & Exfiltration Defense (Prompt Defense)

Detects patterns in which malicious users attempt to extract system prompts (jailbreaking) or abuse agent privileges.
- **Heuristic Injection Detection**: Proactively blocks known injection signatures such as `Ignore previous instructions` and `System prompt bypass`.
- **Full Audit Trail**: All blocked events and API access records are streamed in real time to your Security Operations team (SIEM) to enable immediate incident response.
