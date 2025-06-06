---
order: 8
---

# How to develop scheduled tasks?

> Adopt Quartz distributed cluster scheduling and support online configuration of scheduled tasks

How to use it?  
Step 1: Customize the job (implementation class org.quartz.Job)

```
/**
 * 示例不带参定时任务
 *
 * @author Scott
 */
@Slf4j
public class SampleJob implements Job {

	@Override
	public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
	   log.info(String.format(" Jeecg-Boot 普通定时任务 SampleJob !  时间:" + DateUtils.getTimestamp()));
	}
}

```

copy

Step 2: Configure scheduled tasks online  
![](https://lfs.k.topthink.com/lfs/edee834b91e16ed2e75b209c38a1941ced1fec3e7d28e2dafdad94a0df810677.dat)

Step 3: Support online management, start and stop  
![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1687781150621.png)
