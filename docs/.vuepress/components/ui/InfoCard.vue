<template>
  <div class="custom-info-card" :class="type">
    <p class="custom-info-card-title">{{ title }}</p>
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'info', // 'info', 'tip', 'warning', 'danger'
    validator: value => ['info', 'tip', 'warning', 'danger'].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.custom-info-card {
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border-left-width: 0.5rem;
  border-left-style: solid;
  background-color: var(--c-bg-light, #f3f4f6); // Use CSS variables to be compatible with light and dark modes

  &.info {
    border-left-color: var(--c-brand, #3eaf7c); // The brand color is used by default
  }
  &.tip {
    border-left-color: var(--c-tip, #42b983);
    background-color: var(--c-tip-bg, #e2f5ec);
  }
  &.warning {
    border-left-color: var(--c-warning, #e7c000);
    background-color: var(--c-warning-bg, #fff8d8);
    .custom-info-card-title {
      color: var(--c-warning-title, #b49400);
    }
  }
  &.danger {
    border-left-color: var(--c-danger, #cc0000);
    background-color: var(--c-danger-bg, #ffe0e0);
    .custom-info-card-title {
      color: var(--c-danger-title, #a40000);
    }
  }
}

.custom-info-card-title {
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

// Removes the default margin for a paragraph if it's the only element within the card
:slotted(p:first-child:last-child) {
  margin: 0;
}
</style>
