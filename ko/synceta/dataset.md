---
title: "데이터셋 관리 및 파라미터화 (Data-Driven Testing)"
description: "Key-Value 테이블 및 Excel 파일을 활용하여 테스트 입력값을 동적으로 치환하고 대량 파라미터 테스트를 수행하는 SyncETA 데이터셋 관리 가이드입니다."
head:
  - - meta
    - name: keywords
      content: SyncETA, 데이터셋, 데이터 주도 테스트, Data-Driven Testing, Excel 연동, 변수 치환, 목업 데이터
  - - meta
    - property: og:title
      content: "데이터셋 관리 및 파라미터화 | SyncETA"
  - - meta
    - property: og:description
      content: "Excel 및 Key-Value 테이블 기반으로 테스트 시나리오에 동적 입력 데이터를 주입하는 가이드입니다."
sort: 700
---

# 데이터셋 관리 및 파라미터화 (Data-Driven Testing)

**'데이터셋(Dataset)'**은 테스트 시나리오에 하드코딩된 입력값을 외부 데이터 테이블의 변수와 동적으로 매핑하여, 하나의 시나리오를 수많은 입력 조합(경계값, 예외값, 다국어 텍스트)으로 반복 검증할 수 있도록 지원하는 기능입니다.

---

## 1. 데이터셋 구조 및 특징

- **스프레드시트 형식 UI**: 행(Row)과 열(Column) 기반의 친숙한 테이블 인터페이스로 테스트 파라미터를 관리합니다.
- **Excel 파일 Import/Export**: 대량의 기존 테스트 데이터를 엑셀 시트 형식으로 손쉽게 업로드하거나 다운로드할 수 있습니다.
- **동적 변수 바인딩**: 시나리오 레코드에서 `{{username}}`, `{{search_keyword}}` 형태로 변수를 지정하면 실행 시 데이터셋의 해당 열 값이 순차적으로 주입됩니다.

---

## 2. 데이터셋 생성 및 관리 방법

### 직접 테이블 편집
데이터셋 관리 화면에서 열(변수명)과 행(테스트 데이터 세트)을 자유롭게 추가/수정/삭제할 수 있습니다.

![데이터셋 시트 화면](./image/dataset/dataset.png)

### Excel 파일을 통한 일괄 업로드
기본 제공되는 템플릿 양식을 다운로드하여 데이터를 작성한 후 일괄 업로드할 수 있습니다.

- **템플릿 파일 다운로드**: [dataset_form.xlsx](./image/dataset/dataset_form.xlsx)

![엑셀 업로드 화면](./image/dataset/exel.png)

### 데이터 생성 보조 기능
변수 속성(이름, 이메일, 전화번호 등)에 맞추어 유효한 형태의 테스트 샘플 데이터를 보조 생성할 수 있습니다.

![데이터 생성 로딩](./image/dataset_loading.png)
![데이터 생성 완료](./image/dataset_ai.png)

---

## 3. 시나리오에 데이터셋 적용 및 실행

시나리오 실행 옵션에서 생성된 데이터셋을 지정하면, 데이터셋의 각 행(Row)별로 독립된 테스트 케이스가 순차 또는 병렬로 실행됩니다.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/d2RU8aabXIQ" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>
