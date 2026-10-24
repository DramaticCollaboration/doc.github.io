---
title: 쿠버네티스 배포 및 GitOps 운영 파이프라인
shortTitle: K8s & GitOps 파이프라인
category: 인프라 & 보안
sort: 4
description: Helm 차트 및 ArgoCD를 활용한 SyncSeries 전사 서비스의 선언적 형상 배포와 KEDA 기반 오토스케일링 운영 가이드
---

# 쿠버네티스 배포 및 GitOps 운영 파이프라인

## 1. GitOps 운영 체계 개요

SyncSeries의 전사 프로덕션 환경은 인프라 구성의 일관성과 추적성을 보장하기 위해 **GitOps** 방법론을 채택하고 있습니다.

개발팀이나 운영팀이 프로덕션 쿠버네티스 클러스터에 직접 `kubectl` 명령어를 실행하여 변경하는 행위는 제한되며, 모든 서비스 배포, 환경변수 갱신, 스케일링 설정은 Git 리포지토리의 커밋과 Pull Request를 통해 선언적으로 수행됩니다.

```mermaid
flowchart LR
    Dev["개발자 커밋 & PR"] --> GitRepo["Git 형상 저장소 (Config Repo)"]
    GitRepo --> ArgoCD["ArgoCD GitOps 컨트롤러"]
    ArgoCD --> |선언적 동기화 (Sync)| K8sCluster["프로덕션 쿠버네티스 클러스터"]
    
    subgraph K8sCluster
        Deployments["서비스 Deployments (SyncVerse, Boot 등)"]
        HPA["KEDA & HPA 오토스케일러"]
    end
    
    Deployments --> HPA
```

---

## 2. Helm 차트 디렉터리 표준 구조

전사 서비스는 단일화된 Umbrella Helm 차트 패턴으로 관리되며, 각 도메인 서비스는 독립된 Sub-chart로 구성됩니다.

```
deploy/helm/
├── Chart.yaml                  # Umbrella Chart 메타데이터
├── values.yaml                 # 전사 공통 기본 설정 (도메인, 이미지 태그 등)
├── values-production.yaml      # 프로덕션 클러스터 전용 오버라이드
└── charts/
    ├── sync-verse/             # 관제탑 서비스 차트
    ├── sync-boot/              # 엔지니어링 백엔드 차트
    ├── sync-cms/               # 콘텐츠 서비스 차트
    ├── sync-shop/              # 이커머스 마이크로서비스 차트
    └── sync-llm/               # AI 게이트웨이 차트
```

### 전사 공통 values.yaml 예시
```yaml
global:
  environment: production
  domain: empasy.internal
  imageRegistry: harbor.empasy.internal/syncseries
  imagePullPolicy: IfNotPresent
  storageClass: fast-nvme-sc

sync-verse:
  replicaCount: 3
  resources:
    limits:
      cpu: "4"
      memory: 8Gi
    requests:
      cpu: "1"
      memory: 2Gi
  autoscaling:
    enabled: true
    minReplicas: 3
    maxReplicas: 10
    targetCPUUtilizationPercentage: 75
```

---

## 3. ArgoCD Application 매니페스트 구성

ArgoCD는 Git 저장소의 변경을 3분 주기로 감지(또는 Webhook 수신)하여 실제 클러스터 상태와 일치시킵니다. 수동 드리프트(Drift)가 발생할 경우 자율 치유(Self-Heal) 정책에 따라 Git 원본 상태로 강제 복구합니다.

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: sync-series-production
  namespace: argocd
  finalizers:
    - resources-finalizer.argocd.argoproj.io
spec:
  project: default
  source:
    repoURL: 'https://github.com/DramaticCollaboration/SyncSeries.git'
    targetRevision: main
    path: deploy/helm
    helm:
      valueFiles:
        - values.yaml
        - values-production.yaml
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: sync-prod
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
      - CreateNamespace=true
      - ApplyOutOfSyncOnly=true
```

---

## 4. KEDA 기반 이벤트 주도형 오토스케일링

대규모 작업 요청이나 배치 크롤링 작업이 인입될 때 단순 CPU 지표만으로는 급격한 부하 증가에 제때 대응하기 어렵습니다. SyncSeries는 **KEDA(Kubernetes Event-driven Autoscaling)**를 활용하여 메시지 큐의 대기열(Queue Length)에 기반한 선제적 스케일아웃을 수행합니다.

```yaml
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: sync-crawl-autoscaler
  namespace: sync-prod
spec:
  scaleTargetRef:
    name: sync-crawl-worker
  minReplicaCount: 2
  maxReplicaCount: 20
  triggers:
  - type: redis
    metadata:
      address: redis-ha.sync-prod.svc:6379
      listName: queue:crawl:tasks
      listLength: "15" # 대기 작업이 15개 초과할 때마다 Pod 1개 추가 생성
```

---

## 5. 무중단 롤링 업데이트 및 롤백 가이드

모든 배포는 `RollingUpdate` 전략을 기본으로 채택하여, 트래픽 유입 중단 없이 신규 버전 컨테이너가 준비 상태(`readinessProbe: healthy`)를 완전히 통과한 이후 구버전 컨테이너를 순차 종료합니다.

- **업데이트 전략 설정**:
  ```yaml
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0
  ```
- **즉각 롤백 절차**: 배포 직후 중대 결함이 감지된 경우, Git에서 이전 안정 커밋으로 Revert 커밋을 푸시하면 ArgoCD가 이를 감지하여 1분 이내에 이전 버전으로 클러스터를 원복합니다.
