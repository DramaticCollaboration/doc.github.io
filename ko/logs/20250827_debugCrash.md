---
title: "Linux Electron 디버그 크래시(ENOSPC inotify watcher 한도 초과) 트러블슈팅"
description: "Linux 환경에서 Electron 애플리케이션 디버그 실행 중 발생하는 ENOSPC(System limit for number of file watchers reached) 커널 inotify 한도 초과 원인 분석 및 sysctl 영구 튜닝 가이드입니다."
head:
  - - meta
    - name: keywords
      content: SyncETA, Electron, Linux, ENOSPC, inotify, max_user_watches, max_user_instances, chokidar, 디버깅, 트러블슈팅
  - - meta
    - property: og:title
      content: "Linux Electron 디버그 크래시(ENOSPC inotify watcher 한도 초과) 트러블슈팅 | Empasy Docs"
  - - meta
    - property: og:description
      content: "Linux 커널 fs.inotify.max_user_watches 한도 상향 및 CHOKIDAR_USEPOLLING 폴백을 통한 Electron 개발 서버 크래시 해결 가이드입니다."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/logs/20250827_debugCrash
sort: 400
---

# Linux Electron 디버그 크래시 (`ENOSPC: System limit for number of file watchers reached`) 트러블슈팅

## 1. 장애 현상 및 원인 분석 (RCA)

Linux 데스크톱 개발 환경에서 SyncETA Electron 애플리케이션을 디버그 모드(`yarn dev:debug`)로 구동할 때, Vite/Chokidar 파일 변경 감지기가 `node_modules` 및 워크스페이스 하위 디렉터리의 파일 디스크립터를 감시하는 과정에서 Linux 커널의 기본 `inotify` 워처 한도(`8192` 또는 `65536`)를 초과하여 `ENOSPC: System limit for number of file watchers reached` 예외와 함께 프로세스가 비정상 종료되는 현상입니다.

---

## 2. 해결 방법 1: Linux 커널 `inotify` Watcher 한도 상향 (권장)

### 2.1 현재 커널 설정값 확인

```bash
cat /proc/sys/fs/inotify/max_user_watches
cat /proc/sys/fs/inotify/max_user_instances
```

### 2.2 런타임 즉시 상향 적용 (일시 적용)

```bash
sudo sysctl fs.inotify.max_user_watches=524288
sudo sysctl fs.inotify.max_user_instances=1024
```

### 2.3 영구 설정 적용 (`/etc/sysctl.d/99-inotify.conf`)

시스템 재부팅 이후에도 설정이 유지되도록 `sysctl.d` 설정 파일을 등록합니다.

```bash
echo 'fs.inotify.max_user_watches=524288' | sudo tee /etc/sysctl.d/99-inotify.conf
echo 'fs.inotify.max_user_instances=1024' | sudo tee -a /etc/sysctl.d/99-inotify.conf
sudo sysctl -p /etc/sysctl.d/99-inotify.conf
```

설정 반영 후 `yarn dev:debug`를 재실행하여 정상 기동 여부를 확인합니다.

---

## 3. 해결 방법 2: 커널 파라미터 변경 불가 시 Polling 모드 전환 (컨테이너/제한 환경)

`sudo` 권한이 없거나 커널 파라미터 수정이 제한된 CI 컨테이너 환경에서는 파일 시스템 이벤트 대신 폴링(Polling) 모드를 활성화합니다.

### 3.1 일회성 환경변수 실행

```bash
CHOKIDAR_USEPOLLING=1 CHOKIDAR_INTERVAL=800 yarn dev:debug
```

### 3.2 IDE Run/Debug Configuration 등록

IntelliJ IDEA의 **Run/Debug Configurations -> Environment variables** 항목에 아래 변수를 고정 등록하여 상시 적용할 수 있습니다.

| 환경변수 키 | 권장 설정값 | 설명 |
| :--- | :--- | :--- |
| `CHOKIDAR_USEPOLLING` | `1` | OS 커널 `inotify` 대신 주기적 파일 상태 폴링 활성화 |
| `CHOKIDAR_INTERVAL` | `800` | 파일 변경 감지 폴링 주기 (`ms` 단위, CPU 부하 최소화) |
