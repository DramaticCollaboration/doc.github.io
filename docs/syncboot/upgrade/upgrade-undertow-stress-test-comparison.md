---
order: 5
---

# stress test 비교

Comparison results of tomcat vs undertow stress test

### Database query stress testing

> MySQL connection pool, initial 300, idle 300, maximum activated 2000

#### 1K concurrent requests, 10W total requests

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 57s           | 1743                                  |
| Undertow          | 55s           | 1787                                  |

#### 2K concurrent requests, 10W total requests

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 40s           | 2493                                  |
| Undertow          | 36s           | 2765                                  |

#### 3K concurrent requests, 10W total requests

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 39s           | 2506                                  |
| Undertow          | 36s           | 2771                                  |

> MySQL connection pool, initial 300, idle 300, maximum activated 10000

#### 3K concurrent requests, 10W total requests

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 39s           | 2531                                  |
| Undertow          | 35s           | 2805                                  |

### Summary of the period

As of the current test results, it can be seen that the database query stress test has reached a bottleneck. The database query does not go through redis, but directly goes to mysql. From the above data, undertow is relatively excellent compared to tomcat.

### Web query test

#### 3K concurrent requests, 100,000 total requests (instantaneous high traffic)

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 7s            | 13129                                 |
| Undertow          | 6s            | 14673                                 |

#### 8K concurrent requests, 100,000 total requests (instantaneous huge traffic)

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 6s            | 15882                                 |
| Undertow          | 5s            | 17530                                 |

#### 2K concurrent requests, 1 million total requests (long-term high traffic)

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 59s           | 16864                                 |
| Undertow          | 51s           | 19347                                 |

#### 2W concurrent requests, 1 million total requests (long-term high traffic)

| Servlet Container | Complete time       | Average number of requests per second | Completion                                      |
| ----------------- | ------------------- | ------------------------------------- | ----------------------------------------------- |
| Tomcat            | More than 2 minutes | Up to 14000                           | Completed 96W requests, unable to complete 100W |
| Undertow          | 51s                 | 19240                                 | Done successfully                               |

### Summary of the period

Compared with no database involvement, the request is completed much faster. Two valid data can be obtained.

- The first data is that undertow has higher availability than tomcat in scenarios with long-term high traffic, and can maintain higher concurrent responses, while tomcat cannot maintain
- The second data is in the case of 4 cores and 8G, undertow can maintain a maximum concurrency of about 19,000, and tomcat can maintain about 16,000

---

---

---

\=================================================

## Stress test results

### Database query stress testing

> MySQL connection pool, initial 300, idle 300, maximum activated 2000

#### 1K concurrent requests, 10W total requests

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 57s           | 1743                                  |
| Undertow          | 55s           | 1787                                  |

#### 2K concurrent requests, 10W total requests

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 40s           | 2493                                  |
| Undertow          | 36s           | 2765                                  |

#### 3K concurrent requests, 10W total requests

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 39s           | 2506                                  |
| Undertow          | 36s           | 2771                                  |

> MySQL connection pool, initial 300, idle 300, maximum activated 10000

#### 3K concurrent requests, 10W total requests

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 39s           | 2531                                  |
| Undertow          | 35s           | 2805                                  |

### Summary of the period

As of the current test results, it can be seen that the database query stress test has reached a bottleneck. The database query does not go through redis, but directly goes to mysql. From the above data, undertow is relatively excellent compared to tomcat.

### Web query test

#### 3K concurrent requests, 100,000 total requests (instantaneous high traffic)

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 7s            | 13129                                 |
| Undertow          | 6s            | 14673                                 |

#### 8K concurrent requests, 100,000 total requests (instantaneous huge traffic)

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 6s            | 15882                                 |
| Undertow          | 5s            | 17530                                 |

#### 2K concurrent requests, 1 million total requests (long-term high traffic)

| Servlet Container | Complete time | Average number of requests per second |
| ----------------- | ------------- | ------------------------------------- |
| Tomcat            | 59s           | 16864                                 |
| Undertow          | 51s           | 19347                                 |

#### 2W concurrent requests, 1 million total requests (long-term high traffic)

| Servlet Container | Complete time       | Average number of requests per second | Completion                                      |
| ----------------- | ------------------- | ------------------------------------- | ----------------------------------------------- |
| Tomcat            | More than 2 minutes | Up to 14000                           | Completed 96W requests, unable to complete 100W |
| Undertow          | 51s                 | 19240                                 | Done successfully                               |

### Summary of the period

Compared with no database involvement, the request is completed much faster. Two valid data can be obtained.

- The first data is that undertow has higher availability than tomcat in scenarios with long-term high traffic, and can maintain higher concurrent responses, while tomcat cannot maintain
- The second data is in the case of 4 cores and 8G, undertow can maintain a maximum concurrency of about 19,000, and tomcat can maintain about 16,000

### Summarize

| Servlet Container | Standard configuration | Maximum number of concurrent connections | Average number of responses per second |
| ----------------- | ---------------------- | ---------------------------------------- | -------------------------------------- |
| Tomcat            | 4 cores 8G             | 4000                                     | 18300                                  |
| Undertow          | 4 cores 8G             | 4000                                     | 21300                                  |
