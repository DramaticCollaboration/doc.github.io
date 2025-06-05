<template>
  <Transition name="popup-fade">
    <div
      v-if="isShow"
      class="pwa-popup"
      :class="{
        bottom: popupConfig.position === 'bottom',
        right: popupConfig.position === 'right',
      }"
      role="alertdialog"
      aria-labelledby="pwa-popup-title"
    >
      <div class="pwa-popup-content">
        <div class="pwa-popup-text">
          <h3 id="pwa-popup-title">{{ popupConfig.message }}</h3>
          <p v-if="popupConfig.description">{{ popupConfig.description }}</p>
        </div>
        <div class="pwa-popup-action">
          <button @click="reload" class="pwa-popup-button refresh-button">
            {{ popupConfig.buttonText }}
          </button>
          <button @click="close" class="pwa-popup-button close-button">
            {{ popupConfig.closeButtonText }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'PwaPopup',
  data() {
    return {
      isShow: false,
      popupConfig: {
        message: 'Discover new content available',
        description: 'Click the Update button to refresh the page for the latest content',
        buttonText: 'Update',
        closeButtonText: 'Close',
        position: 'bottom', // 'bottom' | 'right'
      },
    }
  },
  mounted() {
    // Listen to SW events
    const event = 'sw-updated'
    this.$on = this.$on || ((...args) => this.$emit(...args))

    // Listen for update events
    document.addEventListener(event, this.onSWUpdated)

    // Prevent duplicate bindings
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener(event, this.onSWUpdated)
    })

    // Automatic shut-off after 10 seconds
    setTimeout(() => {
      this.close()
    }, 10000)
  },
  methods: {
    onSWUpdated() {
      this.isShow = true
    },

    reload() {
      this.close()
      if (window.location) {
        window.location.reload(true)
      }
    },

    close() {
      this.isShow = false
    },
  },
}
</script>

<style scoped>
.pwa-popup {
  position: fixed;
  z-index: 100;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  background-color: var(--c-bg);
  border: 1px solid var(--c-border);
  margin: 24px;
  max-width: 400px;
}

.pwa-popup.bottom {
  bottom: 0;
  left: 0;
}

.pwa-popup.right {
  bottom: 24px;
  right: 24px;
}

.pwa-popup-content {
  padding: 16px;
}

.pwa-popup-text h3 {
  font-size: 1.1rem;
  margin: 0 0 8px;
  color: var(--c-text);
}

.pwa-popup-text p {
  margin: 0;
  color: var(--c-text-lighter);
  font-size: 0.9rem;
}

.pwa-popup-action {
  display: flex;
  margin-top: 12px;
  justify-content: flex-end;
  gap: 8px;
}

.pwa-popup-button {
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.refresh-button {
  background-color: var(--c-brand);
  color: white;
  border: none;
}

.refresh-button:hover {
  background-color: var(--c-brand-light);
}

.close-button {
  background-color: transparent;
  border: 1px solid var(--c-border);
  color: var(--c-text);
}

.close-button:hover {
  background-color: var(--c-bg-lighter);
}

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: all 0.3s;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
