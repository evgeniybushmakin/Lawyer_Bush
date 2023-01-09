<template>
  <div class="popup">
    <div ref="popup" @click.self="close" class="popup__overlay">
      <div ref="card" class="popup__card">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default {
  name: 'Popup',
  props: {
    openPopup: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isPopupShown: false,
    }
  },
  watch: {
    openPopup() {
      if (this.openPopup) {
        this.open()
      }
    }
  },
  methods: {
    open() {
      const gsap = this.$gsap
      this.isPopupShown = true

      disableBodyScroll(this.$refs.popup)
      document.addEventListener('keydown', this.handleEscKeydown)

      const { popup, card } = this.$refs

      const tl = gsap.timeline()
      const cardCenterPosition = {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.1)',
      }

      tl.set(popup, { display: 'flex', willChange: 'alpha, backgroundColor' })
      tl.set(card, { willChange: 'transform' })
      tl.to(
        popup,
        { backgroundColor: 'rgba(0, 0, 0, 0.6)', duration: 0.3 },
        '>0.1'
      )
      tl.to(card, cardCenterPosition, '<')
      tl.set([card, popup], { willChange: 'auto' })
    },
    close() {
      const gsap = this.$gsap
      clearAllBodyScrollLocks()
      document.removeEventListener('keydown', this.handleEscKeydown)

      const { popup, card } = this.$refs

      const tl = gsap.timeline()
      const cardCenterPosition = {
        scale: 0,
        duration: 0.15,
        ease: 'back.in(1.1)',
      }

      tl.set(popup, { willChange: 'alpha, backgroundColor' })
      tl.set(card, { willChange: 'transform' })
      tl.to(
        popup,
        { backgroundColor: 'rgba(46, 49, 70, 0)', duration: 0.15 },
        '>0.1'
      )
      tl.to(card,  cardCenterPosition, '<')
      tl.set([card, popup], { willChange: 'auto' })
      tl.set(popup, { display: 'none' })
      tl.add(() => {
        this.$emit('close')
        this.isPopupShown = false
      })
    },
    handleEscKeydown(e) {
      if (e.key === 'Escape') {
        this.close()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.popup {
  &__overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 199;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  &__card {
    position: relative;
    width: 100%;
    max-width: 84.2rem;
    max-height: 90%;
    padding: 3.2rem;
    border-radius: $borderRadiusDefault;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--element-background);
    transform: scale(0);

    @include --tablet {
      max-width: calc(100% - 8rem);
    }

    @include --mobile {
      max-width: calc(100% - 4rem);
      padding: 1.6rem;
    }
  }
}
</style>
