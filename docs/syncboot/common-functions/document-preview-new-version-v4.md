---
order: 4
---

# Document preview new version v4

### Docker container environment running

> Version number: [kkfileview 4.1.0](https://kkfileview.keking.cn/zh-cn/docs/production.html)

- Pull the image

```
docker run -it -p 8012:8012 --name kkfileview4.1.0 -d keking/kkfileview:4.1.0
```

copy

- Restart the docker image

```
docker restart  kkfileview4.1.0
```

copy

- Upgrade Instructions

From `KkFileview-v3.3.0`now on, the file preview address adopts the base64+urlencode double encoding rule.

```
import {encryptByBase64} from "@/utils/cipher";

let url = encodeURIComponent(encryptByBase64(record.url));
let previewUrl = `${glob.viewUrl}?url=` + url;
window.open(previewUrl, '_blank');
```

copy

### common problem

[kkfile configures https domain name](https://blog.csdn.net/zhuiguhenman/article/details/135477043)
