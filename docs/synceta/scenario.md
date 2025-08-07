---
title: 시나리오
description: AI 기반 테스트 자동화로 QA 시간을 80% 절감하세요. 코드 없는 테스트 생성, 자연어 시나리오 작성, 다양한 플랫폼 지원으로 QA의 새로운 기준을 제시합니다.
head:
  - - meta
    - name: keywords
      content: AI 테스트 자동화, 코드리스 자동화, QA 자동화, 소프트웨어 테스트, 테스트 시나리오 생성, 코드리스 테스트, 자연어 테스트, 테스트 자동화 도구, 테스트 자동화 플랫폼, 테스트 효율화, Playwright , Selenium , QAOps, TestOps, Shift-Left 테스트, Shift‑Right 테스트
  - - meta
    - property: og:title
      content: AI 테스트 자동화 | SyncETA
  - - meta
    - property: og:description
      content: AI 기반 테스트 자동화로 QA 시간을 80% 절감하세요. 코드 없는 테스트 생성, 자연어 시나리오 작성, 다양한 플랫폼 지원으로 QA의 새로운 기준을 제시합니다.
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/synceta/
sort: 500
---

# 시나리오

SyncETA를 사용하여 복잡한 테스트 코드 작성 없이 실제 UI를 통해 테스트 케이스를 생성하고  
관리할 수 있습니다.

## 테스트 시나리오 예시

#### **_'시나리오'_** 는 아래와 같은 기능 테스트 단위를 위미합니다.

##### [ **_'empasy'_** 홈페이지에 접속하여 문의 전송 ]

1. **_'empasy'_** 홈페이지 접속.
2. **_'문의 하기'_** 클릭.
3. 문의 내용 입력.
4. 문의 보내기.
5. 정상 전송 확인.

## 시나리오 생성

#### 1. **_'시나리오'_** 메뉴로 이동합니다.

![프로젝트 없음](./image/scenario/newScscs.png)

#### 2. **_'새로운 시나리오'_** 를 클릭합니다.

![프로젝트 생성하기](./image/scenario/newSc.png)

#### 3. 시나리오를 생성할 사이트의 url을 입력합니다.

![프로젝트 생성하기](./image/scenario/url.png)

#### 5. 실행시킬 브라우저를 선택합니다.

::: info

- 시나리오 생성시 설정한 브라우저 외의 다른 브라우저로 크로스 브라우징 테스트가 가능합니다.  
  EX) chrome 으로 시나리오 생성 → edge 로 테스트 가능
  :::

![프로젝트 생성하기](./image/scenario/browserinfo.png)

#### 6. 브라우저의 사이즈를 설정합니다.

::: info

- 시나리오 실행시 브라우저 사이즈를 변경할 수 있습니다.  
   EX) 시나리오 생성시 1400 _x_ 800 으로 생성 → 800 _x_ 600 으로 테스트 가능
  :::

![프로젝트 생성하기](./image/scenario/browsersize.png)

#### 7. 수집 허용 이벤트를 설정합니다.

::: info

- 기본 세팅으로 녹화를 진행하시는 것을 권장드립니다.
- 시나리오 녹화가 진행중인 브라우저에서 수집 허용 이벤트(동작) 가 발생하면  
  이벤트가 발생한 요소의 Dom 정보를 수집하여 저장합니다.
  :::

  1. keydown - 키보드 누름
  2. click - 마우스 클릭
  3. contextmenu - 마우스 우클릭
  4. input - 입력
  5. scroll - 스크롤
  6. navigate - url 이동

![프로젝트 생성하기](./image/scenario/eventtype.png)

#### 8. 녹화 시작

![프로젝트 생성하기](./image/scenario/recordingstart.png)

#### 9. 시나리오 녹화

::: info

- 기본 세팅으로 녹화를 진행하시는 것을 권장드립니다.
- 시나리오 녹화가 진행중인 브라우저에서 수집 허용 이벤트(동작) 가 발생하면  
   이벤트가 발생한 요소의 Dom 정보를 수집하여 저장합니다.
  :::

1. 브라우저 설정을 마친 후 녹화 시작 버튼을 클릭합니다.
2. 시나리오 생성용 브라우저가 노출되면 실제 테스트를 진행합니다.
3. 브라우저에서 허용 이벤트가 발생하면, 이벤트가 발생한 요소의 Dom 정보를 수집합니다.
4. 테스트를 완료하면 녹화 종료 버튼을 클릭한 후 시나리오명과 설명을 작성합니다.

<iframe width="100%" height="400" src="https://youtu.be/vrd4gT8A10Q" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

## 부가 기능

#### [ 코멘트 ]

::: info

- 레코드의 설명을 작성하는 기능입니다.  
  EX) 문의사항 click 이벤트 레코드에 **_'상단 대메뉴의 문의사항 클릭'_** 과 같은 식으로 레코드의 설명을 작성합니다.
  :::

![프로젝트 생성하기](./image/scenario/res.png)

#### [ 실패 복구 스크립트 ]

::: info

- 레코드 실행이 실패했을 경우 실행되는 스크립트 입니다.
  EX) 문의사항 click 을 실패하였을 경우 실행할 스크립트를 입력합니다.
  :::

![프로젝트 생성하기](./image/scenario/recover.png)

#### [ 데이타셋 ]

::: info

- 변수의 입력 값을 설정합니다.
- 녹화 당시 문의 제목인 **_'test'_** 를 다른 값으로 설정할 수 있습니다.
- 해당 기능은 **_'데이타셋'_** 부분을 참고해주세요.
  :::

![프로젝트 생성하기](./image/scenario/dataset.png)

#### [ 삭제 ]

::: info

- 레코드를 삭제합니다.  
  레코드를 바로 삭제하기 보다는 아래의 비활성화 기능을 사용하시는 것을 권장드립니다.
  :::

![프로젝트 생성하기](./image/scenario/delete.png)

#### [ 비활성화 ]

::: info

- 레코드를 비활성화합니다.
- 시나리오의 실행 과정에서 비활성화 레코드는 제외됩니다.
  :::

![프로젝트 생성하기](./image/scenario/active.png)
