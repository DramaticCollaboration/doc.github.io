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
    let zoom: ReturnType<typeof mediumZoom> | null = null;
    const initZoom = () => {
      if (!zoom) {
        zoom = mediumZoom(".VPHero .image-src, .main img", { background: "var(--vp-c-bg)" });
      } else {
        zoom.detach();
        zoom.attach(".VPHero .image-src, .main img");
      }
    };
    const openMermaidLightbox = (svgEl: SVGElement) => {
      const existing = document.querySelector(".vp-mermaid-lightbox");
      if (existing) existing.remove();

      const overlay = document.createElement("div");
      overlay.className = "vp-mermaid-lightbox";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-label", "다이어그램 확대 보기");

      const bar = document.createElement("div");
      bar.className = "vp-mermaid-lightbox-bar";
      const title = document.createElement("span");
      title.textContent = "아키텍처 다이어그램 확대 보기 (좌우로 밀어 탐색)";
      const closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className = "vp-mermaid-lightbox-close";
      closeBtn.textContent = "닫기";

      const stage = document.createElement("div");
      stage.className = "vp-mermaid-lightbox-stage";
      const clonedSvg = svgEl.cloneNode(true) as SVGElement;
      clonedSvg.removeAttribute("style");
      stage.appendChild(clonedSvg);

      const close = () => {
        overlay.remove();
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onEsc);
      };
      const onEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
      };

      closeBtn.addEventListener("click", close);
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) close();
      });
      document.addEventListener("keydown", onEsc);

      bar.appendChild(title);
      bar.appendChild(closeBtn);
      overlay.appendChild(bar);
      overlay.appendChild(stage);
      document.body.appendChild(overlay);
      document.body.style.overflow = "hidden";
    };

    const enhanceMermaidBlocks = () => {
      document.querySelectorAll<HTMLElement>(".vp-doc .mermaid, .mermaid").forEach((box) => {
        if (box.dataset.zoomBound === "true") return;
        const svg = box.querySelector("svg");
        if (!svg) return;
        box.dataset.zoomBound = "true";

        const toolbar = document.createElement("div");
        toolbar.className = "vp-mermaid-toolbar";
        const hint = document.createElement("span");
        hint.textContent = "다이어그램 (좌우 스크롤 가능)";
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "vp-mermaid-zoom-btn";
        btn.textContent = "확대 보기";
        btn.addEventListener("click", () => {
          const currentSvg = box.querySelector("svg");
          if (currentSvg) openMermaidLightbox(currentSvg);
        });
        toolbar.appendChild(hint);
        toolbar.appendChild(btn);
        box.parentElement?.insertBefore(toolbar, box);
      });
    };

    const scheduleEnhance = () => {
      nextTick(() => {
        initZoom();
        enhanceMermaidBlocks();
        window.setTimeout(enhanceMermaidBlocks, 500);
        window.setTimeout(enhanceMermaidBlocks, 1400);
      });
    };
    const scrollToSolutions = () => {
      const target = document.querySelector(".VPFeatures") || document.querySelector("#solutions");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    onMounted(() => {
      scheduleEnhance();

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
      () => scheduleEnhance()
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
