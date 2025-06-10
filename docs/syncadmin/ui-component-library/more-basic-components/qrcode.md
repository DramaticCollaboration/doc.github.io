---
order: 15
---

# Qrcode

Component for generating QR codes

## Usage

```
<template>
  <QrCode :value="qrCodeUrl" />
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { QrCode, QrCodeActionType } from '/@/components/Qrcode/index';
  import LogoImg from '/@/assets/images/logo.png';
  const qrCodeUrl = 'https://www.vvbin.cn';
  export default defineComponent({
    components: { QrCode },
    setup() {
      const qrRef = ref<Nullable<QrCodeActionType>>(null);
      function download() {
        const qrEl = unref(qrRef);
        if (!qrEl) return;
        qrEl.download('文件名');
      }
      return {
        qrCodeUrl,
        LogoImg,
        download,
        qrRef,
      };
    },
  });
</script>
<style scoped>
  .qrcode-demo-item {
    width: 30%;
    margin-right: 1%;
  }
</style>
```

copy

## Props

| Attributes | type                     | default value | Optional Values | illustrate                                        |
| ---------- | ------------------------ | ------------- | --------------- | ------------------------------------------------- |
| value      | `string`                 | \-            | \-              | QR code address                                   |
| options    | `QRCodeRenderersOptions` | \-            | \-              | QR code configuration, see QRCodeRenderersOptions |
| width      | `number`                 | 2             | \-              | width                                             |
| logo       | `string｜LogoType`       | \-            | \-              | Middle logo configuration, see LogoType           |
| tag        | `渲染标签`               | canvas        | `canvas \| img` | img does not support embedded logo                |

**QRCodeRenderersOptions**

```
/**
 * 定义margin的宽度。.
 * Default: 4
 */
margin?: number;
/**
 * 比例因子。值1表示每个模块1像素（黑点）。
 * Default: 4
 */
scale?: number;
/**
 * 为输出图像强制指定宽度。
 * 如果宽度太小而不能包含qr符号，则此选项将被忽略。
 * 优先于规模。
 */
width?: number;
color?: {
  /**
   * 暗模块的颜色。值必须为十六进制格式（RGBA）.
   * 注意：深色应始终比color.light暗。.
   * Default: #000000ff
   */
  dark?: string;
  /**
   * 照明模块的颜色。值必须为十六进制格式（RGBA）.
   * Default: #ffffffff
   */
  light?: string;
};

```

copy

**LogoType**

```
{
  // logo图片
  src: string;
  // logo大小
  logoSize: number;
  // 背景颜色
  bgColor: string;
  // logo圆角
  logoRadius: number;
}
```

copy

## Methods

| name     | Callback parameters         | illustrate |
| -------- | --------------------------- | ---------- |
| download | `Function(fileName:string)` | download   |

## event

| name  | Callback parameters                   | illustrate                                     |
| ----- | ------------------------------------- | ---------------------------------------------- |
| done  | `(data: QrcodeDoneEventParams)=>void` | Drawing completed                              |
| error | `(error)=>void`                       | An error occurred while generating the QR code |

QrcodeDoneEventParams

```
{
  url: string;  // 二维码DataURL数据
  ctx?: CanvasRenderingContext2D;  // 该对象为画布的2D渲染上下文，仅在tag为canvas时有效，可用于自定义绘制
}
```

copy

`done`The QR code can be drawn in a custom way in the event callback. The sample code is as follows:

```
<QrCode
  :value="qrCodeUrl"
  :width="200"
  @done="onQrcodeDone"
/>
```

copy

```
function onQrcodeDone({ ctx }) {
  if (ctx instanceof CanvasRenderingContext2D) {
    // 额外绘制
    ctx.fillStyle = 'black';
    ctx.font = '16px "微软雅黑"';
    ctx.textBaseline = 'bottom';
    ctx.textAlign = 'center';
    ctx.fillText('你帅你先扫', 100, 195, 200);
  }
}
```

copy

For `CanvasRenderingContext2D`more information and drawing methods, please refer to [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)
