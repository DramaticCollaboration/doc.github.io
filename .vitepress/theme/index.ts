// https://vitepress.dev/guide/custom-theme
import mediumZoom from "medium-zoom";
import { EnhanceAppContext, inBrowser, Theme, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, onMounted, watch } from "vue";
import { BProgress } from "./bprogress"; // 进度条组件
import "./bprogress.css"; // 进度条样式
import "./style.css";

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  // Layout: () => {
  //   return h();
  // },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // 进度条组件
    if (inBrowser) {
      BProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        BProgress.start(); // 开始进度条
      };
      router.onAfterRouteChange = () => {
        BProgress.done(); // 停止进度条
      };
    }
  },
} satisfies Theme;
