---
title: 공부 한것들을 적어 보아요 | RAG
description: 공부 한것들을 공유하는 페이지입니다.
head:
  - - meta
  - name: keywords
    content: 공부 한것들을 적어 보아요
  - - meta
  - property: og:title
    content: 공부
  - - meta
  - property: og:description
    content: 공부 한것들을 적어 보아요
  - - meta
  - property: og:image
    content: https://doc.empasy.com/images/favicon.png
  - - meta
  - property: og:url
    content: https://doc.empasy.com/study/
    sort: 300
---

# RAG(Retrieval-Augmented Generation) 구축을 위한 초보자 가이드

## RAG란 무엇인가요?

RAG(Retrieval-Augmented Generation)는 **검증된 정보를 검색(Retrieval)하여 AI의 답변 생성(Generation)을 보강(Augment)**하는 기술입니다. 간단히 말하면, LLM(대형 언어 모델)이 자신의 내부 지식만으로 답변하는 대신, 외부 지식 소스(문서, 데이터베이스 등)에서 관련 정보를 찾아서 더 정확하고 신뢰할 수 있는 답변을 생성하는 방법입니다.

### RAG의 장점

1. **정확성 향상**: 실제 문서 기반으로 답변하므로 오류 감소
2. **최신 정보 제공**: LLM의 학습 데이터 한계를 넘어 최신 정보 활용 가능
3. **출처 제공**: 답변의 근거를 제시할 수 있어 신뢰성 향상
4. **비용 효율성**: 매번 LLM을 재학습시키지 않아도 됨

---

## RAG 시스템 구축 단계별 가이드

### 1단계: 준비 작업

#### 필요한 도구 이해하기

- **임베딩 모델**: 텍스트를 숫자 벡터로 변환 (예: OpenAI text-embedding-ada-002, SentenceTransformers)
- **벡터 데이터베이스**: 변환된 벡터를 저장하고 검색 (예: ChromaDB, Pinecone, Weaviate)
- **LLM**: 실제 답변 생성 (예: GPT-4, LLaMA 2, Claude)
- **프레임워크**: LangChain, LlamaIndex 등 (선택사항)

#### 문서 준비하기

- PDF, Word, PowerPoint, Excel, 텍스트 파일 등 다양한 형식 지원
- 데이터 양과 복잡도에 따라 단계적으로 시작하는 것이 좋음

### 2단계: 문서 처리 및 저장

#### 과정 상세 설명:

1. **문서 로드**:

   ```python
   # 예시: PDF 문서 로드
   from langchain.document_loaders import PyPDFLoader

   loader = PyPDFLoader("example.pdf")
   documents = loader.load()
   ```

2. **문서 분할**:

- 문서를 작은 조각(chunks)으로 나누어야 효율적 검색 가능
- 보통 500-1000자 단위로 분할

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = text_splitter.split_documents(documents)
```

3. **임베딩 생성**:

- 텍스트를 숫자 벡터로 변환하여 의미적 유사도 계산 가능하게 함

```python
from langchain.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()
vector_store = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db"
)
```

4. **벡터 저장소에 저장**:

- 변환된 벡터를 데이터베이스에 저장하여 빠른 검색 가능

### 3단계: 질의 처리 및 응답 생성

#### 과정 상세 설명:

1. **사용자 질문 임베딩**:

   ```python
   question = "RAG 시스템의 장점은 무엇인가요?"
   question_embedding = embeddings.embed_query(question)
   ```

2. **유사 문서 검색**:

- 벡터 데이터베이스에서 질문과 가장 유사한 문서 조각 검색

```python
relevant_docs = vector_store.similarity_search(question, k=3)
```

3. **LLM에 컨텍스트 제공 및 답변 생성**:

- 검색된 문서를 LLM에 제공하여 답변 생성

```python
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

context = "\n".join([doc.page_content for doc in relevant_docs])

llm = ChatOpenAI(model="gpt-3.5-turbo")
response = llm([
    SystemMessage(content="다음 문서를 참고하여 질문에 답변하세요:"),
    HumanMessage(content=f"문서: {context}\n\n질문: {question}")
])
```

4. **답변 및 출처 반환**:

- 생성된 답변과 함께 참고한 문서 출처도 함께 제공

---

## 간단한 RAG 시스템 구현 예제

```python
import os
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

# API 키 설정 (실제 키로 교체 필요)
os.environ["OPENAI_API_KEY"] = "your-api-key-here"

class SimpleRAGSystem:
    def __init__(self):
        self.embeddings = OpenAIEmbeddings()
        self.llm = ChatOpenAI(model="gpt-3.5-turbo")
        self.vector_store = None

    def load_and_process_documents(self, file_path):
        # 문서 로드
        loader = PyPDFLoader(file_path)
        documents = loader.load()

        # 문서 분할
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )
        chunks = text_splitter.split_documents(documents)

        # 벡터 저장소 생성
        self.vector_store = Chroma.from_documents(
            documents=chunks,
            embedding=self.embeddings,
            persist_directory="./chroma_db"
        )

        return len(chunks)

    def ask_question(self, question):
        if not self.vector_store:
            return "먼저 문서를 로드해주세요."

        # 관련 문서 검색
        relevant_docs = self.vector_store.similarity_search(question, k=3)
        context = "\n".join([doc.page_content for doc in relevant_docs])

        # LLM을 사용한 답변 생성
        response = self.llm([
            SystemMessage(content="다음 문서를 참고하여 질문에 답변하세요. 문서에 없는 정보는 '모르겠습니다'라고 답변하세요."),
            HumanMessage(content=f"문서 내용:\n{context}\n\n질문: {question}")
        ])

        # 출처 정보 추가
        sources = [f"문서 {i+1} 페이지 {doc.metadata.get('page', '?')}"
                  for i, doc in enumerate(relevant_docs)]

        return f"{response.content}\n\n참고 문서: {', '.join(sources)}"

# 사용 예제
rag_system = SimpleRAGSystem()
rag_system.load_and_process_documents("manual.pdf")

question = "이 제품의 주요 기능은 무엇인가요?"
answer = rag_system.ask_question(question)
print(answer)
```

---

## 초보자를 위한 실용적 조언

### 시작 방법

1. **소규모로 시작**: 하나의 PDF 문서로 시작해보세요
2. **간단한 도구 선택**: ChromaDB + OpenAI 조합이 시작하기 가장 쉬움
3. **점진적 확장**: 기본 시스템 작동 후 점점 더 복잡한 요구사항 추가

### 흔한 실수 피하기

1. **문서 분할을 너무 세밀하게 또는 너무 거칠게**: 500-1000자 정도가 적당
2. **충분한 컨텍스트 제공하지 않기**: LLM이 답변할 수 있도록 관련 문서 충분히 제공
3. **출처 추적 소홀**: 답변의 신뢰성을 위해 어떤 문서를 참조했는지 반드시 기록

### 무료로 시작할 수 있는 방법

1. **오픈소스 임베딩 모델**: SentenceTransformers의 all-MiniLM-L6-v2 모델
2. **무료 LLM**: LLaMA 2나 Mistral 모델 활용
3. **로컬 벡터 DB**: ChromaDB는 무료로 사용 가능

### 다음 단계

1. 성능 평가 및 개선
2. 다중 문서 소스 지원
3. 사용자 인터페이스 추가
4. 캐싱 및 성능 최적화
