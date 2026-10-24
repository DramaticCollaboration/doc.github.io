// https://vitepress.dev/guide/custom-theme
import mediumZoom from "medium-zoom";
import { EnhanceAppContext, inBrowser, Theme, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, onMounted, watch } from "vue";
import { BProgress } from "./bprogress"; // 진행 표시줄 컴포넌트
import "./bprogress.css"; // 진행 표시줄 스타일
import "./style.css";

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
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
    if (inBrowser) {
      BProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        BProgress.start(); // 진행 표시줄 시작
      };
      router.onAfterRouteChange = () => {
        BProgress.done(); // 진행 표시줄 종료
      };
    }
  },
} satisfies Theme;
