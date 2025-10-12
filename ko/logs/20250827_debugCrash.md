---
title: 리눅스 electron 디버깅 Crash
description: 기억은 금방 사라지지만, 로그는 영원하다! 🎯 우리 팀의 재미있고 자유로운 작업 기록 공간
head:
  - - meta
    - name: keywords
      content: 공부 한것들을 적어 보아요
  - - meta
    - property: og:title
      content: 작업 로그 놀이터 - 자유로운 작업 기록 공간 🎪
  - - meta
    - property: og:description
      content: 이 곳은 팀원들이 자유롭게 작업 로그를 기록하고 공유하는 공간입니다. 강제 없이 필요할 때 편하게 추가할 수 있는 재미있는 작업 로그 시스템을 소개합니다.
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/study/
sort: 400
---

# Linux에서 디버그중에 어플이 갑자기 죽는 "ENOSPC: System limit for number of file watchers reached" 오류

해결 1) Linux inotify watcher 한도 증가(권장)

- 현재 값 확인:

```shell script
# Bash
  cat /proc/sys/fs/inotify/max_user_watches
  cat /proc/sys/fs/inotify/max_user_instances
```

- 일시 증가(즉시 적용):

```shell script
# Bash (sudo 필요)
  sudo sysctl fs.inotify.max_user_watches=524288
  sudo sysctl fs.inotify.max_user_instances=1024
```

- 영구 설정(재부팅 후에도 유지):

```shell script
# Bash (sudo 필요)
  echo 'fs.inotify.max_user_watches=524288' | sudo tee /etc/sysctl.d/99-inotify.conf
  echo 'fs.inotify.max_user_instances=1024' | sudo tee -a /etc/sysctl.d/99-inotify.conf
  sudo sysctl -p /etc/sysctl.d/99-inotify.conf
```

- 이후 다시: yarn dev:debug 실행

해결 2) Watcher 대신 폴링 사용(대안/즉시 응급처치)

- 한 번만 시험:

```shell script
CHOKIDAR_USEPOLLING=1 CHOKIDAR_INTERVAL=800 yarn dev:debug
```

- 자주 쓸 거면 Run/Debug 구성의 Environment variables에 CHOKIDAR_USEPOLLING=1, CHOKIDAR_INTERVAL=800 추가
