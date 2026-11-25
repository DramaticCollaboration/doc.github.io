<template>
  <div class="vp-arch-wrap">
    <div class="vp-arch-board">
      <div class="vp-arch-head">
        <div class="vp-arch-brand">
          <span class="vp-arch-dot" aria-hidden="true" />
          <span class="vp-arch-brand-title">{{ ui.boardTitle }}</span>
        </div>
        <div class="vp-arch-head-meta">
          <span class="vp-arch-hint">{{ ui.mapHint }}</span>
          <span class="vp-arch-pill">{{ ui.protocolPill }}</span>
        </div>
      </div>

      <div class="vp-arch-body">
        <div class="vp-arch-layer-label">{{ ui.flagshipHeading }}</div>
        <div class="vp-arch-flagship">
          <div v-for="node in flagshipNodes" :key="node.id" class="vp-arch-node-wrap">
            <div
              role="button"
              tabindex="0"
              class="vp-arch-node"
              :class="nodeClasses(node)"
              :aria-pressed="selectedId === node.id"
              @click="selectNode(node.id)"
              @keydown.enter.prevent="selectNode(node.id)"
              @keydown.space.prevent="selectNode(node.id)"
            >
              <div class="vp-arch-node-top">
                <span class="vp-arch-node-name">{{ node.name }}</span>
                <a
                  :href="docHref(node.docSlug)"
                  class="vp-arch-launch"
                  :title="`${node.name} ${ui.directOpenAria}`"
                  :aria-label="`${node.name} ${ui.directOpenAria}`"
                  @click.stop.prevent="goDoc(node.docSlug)"
                >
                  &#8599;
                </a>
              </div>
              <span class="vp-arch-node-role">{{ node[localeKey].role }}</span>
              <span class="vp-arch-node-tag" :class="{ 'is-hub-tag': node.isHub }">
                {{ node[localeKey].shortTag }}
              </span>
            </div>
            <span class="vp-arch-stem" :class="{ 'is-lit': isNodeLit(node.id) }" aria-hidden="true" />
          </div>
        </div>

        <div class="vp-arch-bus">{{ ui.busLabel }}</div>

        <div class="vp-arch-layer-label vp-arch-ext-heading">{{ ui.extHeading }}</div>
        <div class="vp-arch-ext-groups">
          <div v-for="group in extensionGroups" :key="group.key" class="vp-arch-ext-group-wrap">
            <div class="vp-arch-ext-group" :class="{ 'has-active': isGroupLit(group.nodes) }">
              <div class="vp-arch-ext-group-title">{{ group.title }}</div>
              <div class="vp-arch-ext-grid" :class="`cols-${group.nodes.length}`">
                <div
                  v-for="node in group.nodes"
                  :key="node.id"
                  role="button"
                  tabindex="0"
                  class="vp-arch-node vp-arch-node-ext"
                  :class="nodeClasses(node)"
                  :aria-pressed="selectedId === node.id"
                  @click="selectNode(node.id)"
                  @keydown.enter.prevent="selectNode(node.id)"
                  @keydown.space.prevent="selectNode(node.id)"
                >
                  <div class="vp-arch-node-top">
                    <span class="vp-arch-node-name">{{ node.name }}</span>
                    <a
                      :href="docHref(node.docSlug)"
                      class="vp-arch-launch"
                      :title="`${node.name} ${ui.directOpenAria}`"
                      :aria-label="`${node.name} ${ui.directOpenAria}`"
                      @click.stop.prevent="goDoc(node.docSlug)"
                    >
                      &#8599;
                    </a>
                  </div>
                  <span class="vp-arch-ext-tag">{{ node[localeKey].shortTag }}</span>
                  <span v-if="node.integrated" class="vp-arch-integrated">{{ ui.integratedTag }}</span>
                </div>
              </div>
            </div>
            <span class="vp-arch-stem" :class="{ 'is-lit': isGroupLit(group.nodes) }" aria-hidden="true" />
          </div>
        </div>

        <button
          v-if="foundationNode"
          type="button"
          class="vp-arch-foundation"
          :class="{ 'is-selected': selectedId === foundationNode.id }"
          @click="selectNode(foundationNode.id)"
        >
          <div class="vp-arch-foundation-accent" aria-hidden="true" />
          <div class="vp-arch-foundation-copy">
            <strong>{{ ui.foundationTitle }}</strong>
            <span>{{ ui.foundationSub }}</span>
          </div>
          <div class="vp-arch-foundation-badges" aria-hidden="true">
            <span>sync-core</span>
            <span>sync-module-*</span>
          </div>
        </button>
      </div>

      <div v-if="selectedNode" class="vp-arch-inspector" aria-live="polite">
        <div class="vp-arch-ins-info">
          <div class="vp-arch-ins-meta">
            <span class="vp-arch-ins-tier">{{ selectedNode[localeKey].tier }}</span>
            <code class="vp-arch-ins-api">{{ selectedNode.apiPrefix }}</code>
            <span class="vp-arch-ins-proto">{{ selectedNode.protocol }}</span>
          </div>
          <div class="vp-arch-ins-title">{{ selectedNode.name }}</div>
          <p class="vp-arch-ins-desc">{{ selectedNode[localeKey].desc }}</p>
          <div class="vp-arch-ins-rel">
            <span class="vp-arch-rel-label">{{ ui.connectedLabel }}</span>
            <span v-if="selectedNode.isHub" class="vp-arch-hub-note">{{ ui.hubConnectedNote }}</span>
            <div v-else class="vp-arch-rel-chips">
              <button
                v-for="rel in connectedNodes"
                :key="rel.id"
                type="button"
                class="vp-arch-rel-chip"
                @click="selectNode(rel.id)"
              >
                {{ rel.name }}
              </button>
            </div>
          </div>
        </div>

        <div class="vp-arch-ins-actions">
          <a
            :href="docHref(selectedNode.docSlug)"
            class="vp-arch-btn vp-arch-btn-primary"
            @click.prevent="goDoc(selectedNode.docSlug)"
          >
            {{ ui.openDocBtn }}
          </a>
          <a
            :href="ecosystemHref"
            class="vp-arch-btn vp-arch-btn-outline"
            @click.prevent="goPath(ecosystemHref)"
          >
            {{ ui.ecosystemBtn }}
          </a>
          <a
            :href="demoHref(selectedNode.id)"
            target="_blank"
            rel="noopener noreferrer"
            class="vp-arch-btn vp-arch-btn-ghost"
          >
            {{ ui.liveDemoBtn }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vitepress";
import { computed, ref } from "vue";
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
const securityNodes = computed(() => nodes.filter((n) => n.zone === "security"));
const operationsNodes = computed(() => nodes.filter((n) => n.zone === "operations"));

const extensionGroups = computed(() => [
  { key: "data-ai", title: ui.value.groupDataAi, nodes: dataAiNodes.value },
  { key: "security", title: ui.value.groupSecurity, nodes: securityNodes.value },
  { key: "operations", title: ui.value.groupOperations, nodes: operationsNodes.value },
]);

const hubNode = computed(() => nodes.find((n) => n.isHub) ?? nodes[0]);
const foundationNode = computed(() => nodes.find((n) => n.isFoundation));

const selectedId = ref<string>(hubNode.value?.id ?? "");

const selectedNode = computed<ArchNode | undefined>(
  () => nodes.find((n) => n.id === selectedId.value) ?? hubNode.value,
);

const relatedSet = computed<Set<string>>(() => {
  if (!selectedNode.value || selectedNode.value.isHub) return new Set();
  return new Set(selectedNode.value.connectedTo);
});

const connectedNodes = computed<ArchNode[]>(() => {
  if (!selectedNode.value) return [];
  return selectedNode.value.connectedTo
    .map((id) => nodes.find((n) => n.id === id))
    .filter((item): item is ArchNode => Boolean(item));
});

const ecosystemHref = computed(() =>
  localeKey.value === "ko" ? "/ecosystem/" : `/${localeKey.value}/ecosystem/`,
);

function docHref(slug: string): string {
  return localeKey.value === "ko" ? `/${slug}/` : `/${localeKey.value}/${slug}/`;
}

function demoHref(productId: string): string {
  return localeKey.value === "ko"
    ? `https://demo.empasy.io/products/${productId}`
    : `https://demo.empasy.io/${localeKey.value}/products/${productId}`;
}

function goDoc(slug: string): void {
  void router.go(docHref(slug));
}

function goPath(path: string): void {
  void router.go(path);
}

function selectNode(id: string): void {
  selectedId.value = id;
}

function isNodeLit(id: string): boolean {
  if (selectedNode.value?.isHub) return true;
  return selectedId.value === id || relatedSet.value.has(id);
}

function isGroupLit(groupNodes: ArchNode[]): boolean {
  return groupNodes.some((n) => isNodeLit(n.id));
}

function nodeClasses(node: ArchNode): Record<string, boolean> {
  const isSelected = selectedId.value === node.id;
  const isRelated = !isSelected && relatedSet.value.has(node.id);
  return {
    "is-hub": Boolean(node.isHub),
    "is-selected": isSelected,
    "is-related": isRelated,
  };
}
</script>
