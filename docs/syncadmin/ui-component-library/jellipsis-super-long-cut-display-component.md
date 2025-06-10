---
order: 25
---

# JEllipsis Super long cut display component✔

When you encounter a very long text display, you can use this tag to intercept the ellipsis display, and the full text will be displayed when the mouse is placed

## Parameter configuration

| parameter | type   | Required     | illustrate      |
| --------- | ------ | ------------ | --------------- |
| value     | string | Required     | String literals |
| length    | number | Not required | Default 25      |

## Show results

![](https://lfs.k.topthink.com/lfs/dcda4626818b291bcfa79cac3a1f183f14adfdfe9064ea52f5e176965a10999b.dat)

## Usage Examples

1\. How to use components with v-model

```
<JEllipsis :value="text" />
```

copy
