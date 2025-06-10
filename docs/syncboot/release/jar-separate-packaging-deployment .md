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

Use mvn clean package again to generate a package that does not contain lib.

## 3\. Run the jar package

\# `C:\111111\lib`is the lib package path. Execute the following command to start the project.

`java -Dloader.path=C:\111111\lib -jar jeecg-system-start-3.4.0.jar`

## 4\. Directory Structure

> Note: You must create a config in the same directory as jar and copy the yml file under system to config.

config content screenshot
