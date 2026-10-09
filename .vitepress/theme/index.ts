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
    const scrollToSolutions = () => {
      const target = document.querySelector(".VPFeatures") || document.querySelector("#solutions");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    onMounted(() => {
      initZoom();

      // Handle direct hash navigation on load
      if (
        window.location.hash === "#solutions" ||
        window.location.hash.includes("제품군") ||
        window.location.hash.includes("solutions")
      ) {
        setTimeout(scrollToSolutions, 300);
      }

      // Intercept anchor clicks for #solutions and legacy #sync-series-제품군
      document.addEventListener("click", (e) => {
        const link = (e.target as HTMLElement).closest("a");
        if (link) {
          const href = link.getAttribute("href");
          if (
            href === "#solutions" ||
            href?.includes("sync-series-제품군") ||
            href?.includes("solutions")
          ) {
            e.preventDefault();
            scrollToSolutions();
            history.pushState(null, "", "#solutions");
          }
        }
      });
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
