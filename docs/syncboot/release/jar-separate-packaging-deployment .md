---
order: 6
---

# JAR separate packaging deployment

Springboot slimming (lib and program are packaged separately)

> Version: 3.5+

## 1\. First, use mvn clean package to generate the jar package normally.

This jar package may be several hundred megabytes in size, and lib accounts for the vast majority.  
Unzip the jar package and take out the lib package under BOOT-INF and store it separately.

## 2\. Modify the pom of the jeecg-system-start project and repackage it

```
<build>
	<plugins>
		<plugin>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-maven-plugin</artifactId>
			<configuration>
				<layout>ZIP</layout>
				<includes>
					<include>
						<groupId>nothing</groupId>
						<artifactId>nothing</artifactId>
					</include>
				</includes>
			</configuration>
			<executions>
				<execution>
					<goals>
						<goal>repackage</goal>
					</goals>
				</execution>
			</executions>
		</plugin>
	</plugins>
</build>
```

copy

![](/images/image_1687780486896.png)

Use mvn clean package again to generate a package that does not contain lib.

## 3\. Run the jar package

\# `C:\111111\lib`is the lib package path. Execute the following command to start the project.

`java -Dloader.path=C:\111111\lib -jar jeecg-system-start-3.4.0.jar`

## 4\. Directory Structure

> Note: You must create a config in the same directory as jar and copy the yml file under system to config.

![](/images/38ebdd52b26029c0e1b96ef9b8d7d22667117f8a52fb3a150961a9c310e6268a.png)

config content screenshot  
![](/images/679b1c1e3de63a9bc8bad786660f2a95e398b9fe4ca72016f13468e00774b8b8.png)
