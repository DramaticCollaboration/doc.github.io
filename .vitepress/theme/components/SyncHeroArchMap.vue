<template>
  <div class="vp-hero-arch" :aria-label="ui.boardTitle">
    <div class="vp-hero-arch-head">
      <div class="vp-hero-arch-brand">
        <span class="vp-hero-arch-dot" aria-hidden="true" />
        <span>{{ ui.boardTitle }}</span>
      </div>
      <span class="vp-hero-arch-pill">{{ ui.protocolPill }}</span>
    </div>

    <div class="vp-hero-arch-body">
      <div class="vp-hero-arch-label">{{ ui.flagshipHeading }}</div>
      <div class="vp-hero-arch-flagship">
        <a
          v-for="node in flagshipNodes"
          :key="node.id"
          :href="docHref(node.docSlug)"
          class="vp-hero-node"
          :class="{ 'is-hub': node.isHub }"
          @click.prevent="goDoc(node.docSlug)"
        >
          <span class="vp-hero-node-name">{{ node.name }}</span>
          <span class="vp-hero-node-sub">{{ node[localeKey].shortTag }}</span>
        </a>
      </div>

      <div class="vp-hero-arch-bus">{{ ui.busLabel }}</div>

      <div class="vp-hero-arch-label">{{ ui.extHeading }}</div>
      <div class="vp-hero-arch-ext-grid">
        <div class="vp-hero-arch-group">
          <span class="vp-hero-arch-group-title">{{ ui.groupDataAi }}</span>
          <div class="vp-hero-arch-mini-row cols-3">
            <a
              v-for="node in dataAiNodes"
              :key="node.id"
              :href="docHref(node.docSlug)"
              class="vp-hero-node is-mini"
              @click.prevent="goDoc(node.docSlug)"
            >
              <span class="vp-hero-node-name">{{ node.name }}</span>
              <span class="vp-hero-node-sub">{{ node[localeKey].shortTag }}</span>
            </a>
          </div>
        </div>

        <div class="vp-hero-arch-group">
          <span class="vp-hero-arch-group-title">{{ ui.groupSecurity }} · {{ ui.groupOperations }}</span>
          <div class="vp-hero-arch-mini-row cols-4">
            <a
              v-for="node in secOpsNodes"
              :key="node.id"
              :href="docHref(node.docSlug)"
              class="vp-hero-node is-mini"
              @click.prevent="goDoc(node.docSlug)"
            >
              <span class="vp-hero-node-name">{{ node.name }}</span>
              <span class="vp-hero-node-sub">{{ node[localeKey].shortTag }}</span>
            </a>
          </div>
        </div>
      </div>

      <a
        v-if="foundationNode"
        :href="docHref(foundationNode.docSlug)"
        class="vp-hero-arch-foundation"
        @click.prevent="goDoc(foundationNode.docSlug)"
      >
        <div class="vp-hero-arch-foundation-text">
          <strong>{{ ui.foundationTitle }}</strong>
          <span>{{ ui.foundationSub }}</span>
        </div>
        <span class="vp-hero-arch-foundation-tag">sync-core</span>
      </a>
    </div>

    <div class="vp-hero-arch-foot">
      <span>{{ ui.heroHint }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vitepress";
import { computed } from "vue";
import archData from "../data/architecture-map.json";

type DocLocale = "ko" | "en" | "ja";

interface LocalizedNodeCopy {
  role: string;
  shortTag: string;
  tier: string;
  desc: string;
}

interface ArchNode {
  id: string;
  name: string;
  zone: string;
  isHub?: boolean;
  isFoundation?: boolean;
  integrated?: boolean;
  docSlug: string;
  apiPrefix: string;
  protocol: string;
  connectedTo: string[];
  ko: LocalizedNodeCopy;
  en: LocalizedNodeCopy;
  ja: LocalizedNodeCopy;
}

const route = useRoute();
const router = useRouter();

const localeKey = computed<DocLocale>(() => {
  if (route.path === "/en" || route.path.startsWith("/en/")) return "en";
  if (route.path === "/ja" || route.path.startsWith("/ja/")) return "ja";
  return "ko";
});

const ui = computed(() => archData.ui[localeKey.value]);
const nodes = archData.nodes as ArchNode[];

const flagshipNodes = computed(() => nodes.filter((n) => n.zone === "flagship"));
const dataAiNodes = computed(() => nodes.filter((n) => n.zone === "data-ai"));
const secOpsNodes = computed(() => nodes.filter((n) => n.zone === "security" || n.zone === "operations"));
const foundationNode = computed(() => nodes.find((n) => n.isFoundation));

function docHref(slug: string): string {
  return localeKey.value === "ko" ? `/${slug}/` : `/${localeKey.value}/${slug}/`;
}

function goDoc(slug: string): void {
  void router.go(docHref(slug));
}
</script>
