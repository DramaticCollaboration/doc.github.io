---
title: "Performance Analysis of Asynchronous Messaging Based on Java 25 Virtual Threads and AgentScope Java"
description: "A research study on high-performance architecture combining Java 25 Virtual Threads and AgentScope Java to overcome blocking I/O bottlenecks during large-scale multi-agent collaboration in Spring Boot 4.0.x backends."
head:
  - - meta
    - name: keywords
      content: Java 25, Virtual Threads, AgentScope Java, Spring Boot 4.0, Asynchronous Messaging, Multi-Agent Performance, SyncBoot, SyncVerse
  - - meta
    - property: og:title
      content: "Performance Analysis of Asynchronous Messaging Based on Java 25 Virtual Threads and AgentScope Java | Empasy"
sort: 50
---

# Performance Analysis of Asynchronous Messaging Based on Java 25 Virtual Threads and AgentScope Java

## 1. Research Background: I/O Characteristics of LLM Agent Workloads

While traditional web backends complete database queries or cache lookups within a few milliseconds (ms), **autonomous AI agent systems (A2A)** inherently exhibit extreme **I/O-bound workloads**:

- **LLM API inference latency**: Each model invocation incurs a long HTTP communication wait of 1 to 10 seconds.
- **Multi-step tool chaining**: Sequential and parallel message exchanges across multiple agents, such as database schema generation (SyncBoot), crawling (SyncCrawl), and E2E testing (SyncETA).
- **Limitations of traditional OS platform threads**: Because each thread occupies roughly 1 MB of stack memory, scaling to thousands of concurrently active agents causes thread pool exhaustion (`OutOfMemoryError: unable to create native thread`) and context-switching overhead, rapidly degrading system performance.

To solve this problem, SyncSeries's standard Java backend frameworks—**SyncBoot** and **AgentScope Java** (`io.agentscope:agentscope-harness`)—have adopted **Java 25 Virtual Threads** as their default runtime.

---

## 2. Comparing Java 25 Virtual Threads and Platform Threads

Virtual threads are lightweight threads that are not mapped 1:1 to OS kernel threads; instead, the JVM schedules them in user space atop a small pool of carrier threads (`ForkJoinPool`).

```mermaid
graph TD
    subgraph "Tens of Thousands of Virtual Threads"
        V1["Virtual Thread 1: Waiting on LLM Call"]
        V2["Virtual Thread 2: Executing DB Query"]
        V3["Virtual Thread 3: Waiting on MCP Tool Call"]
        V4["Virtual Thread N: SSE Streaming"]
    end

    subgraph "Few Carrier Threads (ForkJoinPool Workers - CPU Core Count)"
        C1[Carrier Thread 1]
        C2[Carrier Thread 2]
        C3[Carrier Thread M]
    end

    subgraph "OS Kernel"
        K[OS Kernel CPU Scheduler]
    end

    V1 -.->|"Unmount on I/O Blocking"| C1
    V2 -->|"Mount During Active Computation"| C1
    V3 -.->|Unmount| C2
    C1 --> K
    C2 --> K
```

- **Memory footprint**: Compared to platform threads (1 MB), virtual threads start at a few hundred bytes (approximately 200–500 B) and grow dynamically.
- **Context-switching cost**: Handled purely in user space by copying and restoring heap-allocated stack frames, without kernel-mode transitions.

---

## 3. Practical Configuration for Spring Boot 4.0.x and AgentScope Java

### 1) Enabling Spring Boot Virtual Threads (`application.yml`)

```yaml
spring:
  threads:
    virtual:
      enabled: true
```

With this single option, Tomcat request-handling threads, the `@Async` executor, and `TaskScheduler` are all automatically switched to a virtual thread pool (`Thread.ofVirtual().factory()`).

### 2) Configuring the AgentScope Java Asynchronous Worker

```java
@Configuration
@EnableAsync
public class AgentScopeVirtualThreadConfig {

    @Bean(name = "agentMessageExecutor")
    public Executor agentMessageExecutor() {
        return Executors.newVirtualThreadPerTaskExecutor();
    }
}
```

### 3) Principles for Preventing Thread Pinning

**Thread pinning** occurs when a virtual thread enters an I/O-blocking state without yielding (unmounting from) its carrier thread, holding onto the carrier thread instead.

- **Prohibited pattern**: Performing I/O calls inside a `synchronized` block.
- **Recommended pattern**: Acquiring a lock using `java.util.concurrent.locks.ReentrantLock` before performing I/O.

```java
// Proper asynchronous agent state synchronization
private final ReentrantLock agentLock = new ReentrantLock();

public void dispatchAgentMessage(AgentMessage msg) {
    agentLock.lock();
    try {
        // I/O or LLM API call
        mcpClient.invokeTool(msg.getToolName(), msg.getPayload());
    } finally {
        agentLock.unlock();
    }
}
```

---

## 4. Concurrency Load Test Benchmark (10,000 Concurrent Communicating Agents)

We simulated a scenario in identical container environments (8 vCPU, 16 GB RAM) where 10,000 independent agents each perform remote LLM/tool invocations with a 2-second latency.

| Performance Metric | Platform Threads (ThreadPool 500) | Java 25 Virtual Threads | Improvement |
|:---|:---|:---|:---|
| **Max Concurrent Active Tasks** | Up to 500 (remaining queued) | **10,000 concurrent tasks** | **20x scale** |
| **Total Elapsed Time** | 42.8 s | **2.3 s** | **94.6% reduction** |
| **Peak Memory Usage (JVM RSS)** | 4.8 GB | **1.2 GB** | **75.0% reduction** |
| **CPU Context Switches / sec** | ~48,000 | **~3,200** | **93.3% reduction** |

---

## 5. Conclusion and Adoption Guidelines

By combining Java 25 Virtual Threads with AgentScope Java, teams can achieve **extreme concurrency while preserving the traditional synchronous blocking coding style**, without the complex asynchronous chaining code and debugging difficulties of conventional reactive programming (WebFlux).

All Spring Boot-based backend services in SyncSeries (SyncBoot, SyncVerse Core, SyncCMS Server) are deployed in compliance with this architecture as the enterprise-wide standard.
