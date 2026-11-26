// https://vitepress.dev/guide/custom-theme
import mediumZoom from "medium-zoom";
import { EnhanceAppContext, inBrowser, Theme, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h, nextTick, onMounted, watch } from "vue";
import { BProgress } from "./bprogress";
import "./bprogress.css";
import SyncArchitectureMap from "./components/SyncArchitectureMap.vue";
import "./style.css";

type DocUiLocale = "ko" | "en" | "ja";

const MERMAID_UI_LABELS: Record<
  DocUiLocale,
  {
    dialogAria: string;
    dialogTitle: string;
    closeBtn: string;
    toolbarHint: string;
    zoomBtn: string;
  }
> = {
  ko: {
    dialogAria: "다이어그램 확대 보기",
    dialogTitle: "아키텍처 다이어그램 확대 보기 (좌우로 밀어 탐색)",
    closeBtn: "닫기",
    toolbarHint: "다이어그램 (좌우 스크롤 가능)",
    zoomBtn: "확대 보기",
  },
  en: {
    dialogAria: "Expanded diagram view",
    dialogTitle: "Architecture Diagram Zoom View (scroll horizontally to explore)",
    closeBtn: "Close",
    toolbarHint: "Diagram (horizontally scrollable)",
    zoomBtn: "Zoom",
  },
  ja: {
    dialogAria: "ダイアグラム拡大表示",
    dialogTitle: "アーキテクチャ図 拡大表示（左右スクロールで閲覧）",
    closeBtn: "閉じる",
    toolbarHint: "ダイアグラム（左右スクロール可能）",
    zoomBtn: "拡大表示",
  },
};

function detectRouteLocale(pathname: string): DocUiLocale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/ja" || pathname.startsWith("/ja/")) return "ja";
  return "ko";
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-hero-after": () => h(SyncArchitectureMap, { heroSlot: true }),
    });
  },
  setup() {
    const route = useRoute();
    let zoom: ReturnType<typeof mediumZoom> | null = null;

    const getUiLabels = () => MERMAID_UI_LABELS[detectRouteLocale(route.path)];

    const initZoom = () => {
      if (!zoom) {
        zoom = mediumZoom(".VPHero .image-src, .main img", { background: "var(--vp-c-bg)" });
      } else {
        zoom.detach();
        zoom.attach(".VPHero .image-src, .main img");
      }
    };

    const openMermaidLightbox = (svgEl: SVGElement) => {
      const labels = getUiLabels();
      const existing = document.querySelector(".vp-mermaid-lightbox");
      if (existing) existing.remove();

      const overlay = document.createElement("div");
      overlay.className = "vp-mermaid-lightbox";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-label", labels.dialogAria);

      const bar = document.createElement("div");
      bar.className = "vp-mermaid-lightbox-bar";
      const title = document.createElement("span");
      title.textContent = labels.dialogTitle;
      const closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className = "vp-mermaid-lightbox-close";
      closeBtn.textContent = labels.closeBtn;

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
      const labels = getUiLabels();
      document.querySelectorAll<HTMLElement>(".vp-doc .mermaid, .mermaid").forEach((box) => {
        if (box.dataset.zoomBound === "true") return;
        const svg = box.querySelector("svg");
        if (!svg) return;
        box.dataset.zoomBound = "true";

        const toolbar = document.createElement("div");
        toolbar.className = "vp-mermaid-toolbar";
        const hint = document.createElement("span");
        hint.textContent = labels.toolbarHint;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "vp-mermaid-zoom-btn";
        btn.textContent = labels.zoomBtn;
        btn.addEventListener("click", () => {
          const currentSvg = box.querySelector("svg");
          if (currentSvg) openMermaidLightbox(currentSvg);
        });
        toolbar.appendChild(hint);
        toolbar.appendChild(btn);
        box.parentElement?.insertBefore(toolbar, box);
      });
    };

    const persistPreferredLocale = () => {
      try {
        localStorage.setItem("doc_empasy_locale", detectRouteLocale(route.path));
      } catch {
        // ignore storage restrictions
      }
    };

    const scheduleEnhance = () => {
      persistPreferredLocale();
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

      if (
        window.location.hash === "#solutions" ||
        window.location.hash.includes("제품군") ||
        window.location.hash.includes("solutions")
      ) {
        setTimeout(scrollToSolutions, 300);
      }

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
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component("SyncArchitectureMap", SyncArchitectureMap);
    if (inBrowser) {
      BProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        BProgress.start();
      };
      router.onAfterRouteChange = () => {
        BProgress.done();
      };
    }
  },
} satisfies Theme;
