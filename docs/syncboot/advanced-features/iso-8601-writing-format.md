---
order: 5
---

# ISO 8601 writing format

> Scheduled start time attributes

| Property Name | Attribute Description                                                                           | Example                                          |
| ------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| timeDate      | One-time launch, specific to a date                                                             | 2022-12-12 00:00:00                              |
| timeDuration  | Set the time after which the process will start                                                 | PT1M (1 minute later)                            |
| timeCycle     | Periodic startup task, used to set the cycle time interval, indicating how often it is executed | R3/PT10H (3 cycles, 10 hours between each cycle) |

> ISO 8601 writing format

| letter | illustrate               | Example         |
| ------ | ------------------------ | --------------- |
| P      | Start Tag                |                 |
| AND    | Year                     | 1Y: 1 year      |
| M      | moon                     | 1M: 1 month     |
| D      | Day                      | 10D: 10 days    |
| T      | Time and date separators |                 |
| H      | Hour                     | 1H:1 hour       |
| M      | minute                   | 1M: 1 minute    |
| S      | Second                   | 10S: 10 seconds |

### Cron expression usage, trigger every 5 minutes:

```
0 0/5 * * * ?
```

copy

### Custom delay usage:

Delay 10 minutes  
Delay 1 minute  
Delay 1 hour  
Delay 1 month
