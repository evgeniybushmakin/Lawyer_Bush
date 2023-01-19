<template>
  <div class="popup">
    <div ref="popup" @click.self="close" class="popup__overlay">
      <div ref="card" v-if="image" class="popup__image-container">
        <img
          v-if="imageSrc"
          alt="image"
          :src="getImgUrl(imageSrc)"
        />

        <button @click="close" class="popup__close _image">
          <svg-icon name="close"/>
        </button>
      </div>

      <div v-else ref="card" class="popup__card">
        <button @click="close" class="popup__close">
          <svg-icon name="close"/>
        </button>

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
    image: {
      type: Boolean,
      default: false,
    },
    imageSrc: {
      type: String,
      default: '',
    }
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
    getImgUrl(pic) {
      return require('../assets/images/' + pic)
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

  &__close {
    @include box(3.2rem);
    position: absolute;
    top: 3.2rem;
    right: 3.2rem;
    z-index: 200;

    @include hover {
      svg {
        color: var(--primary-color);
      }
    }

    @include active {
      svg {
        color: var(--primary-darken-color);
      }
    }

    @include --tablet {
      @include box(2.4rem);
      top: 1.6rem;
      right: 1.6rem
    }

    &._image {
      top: -3.2rem;
      right: -3.2rem;

      @include --tablet {
        @include box(2.4rem);
        right: 0;
      }

      svg {
        color: var(--text-contrast-color);
      }

      @include hover {
        svg {
          color: var(--text-contrast-color);
          opacity: 0.6;
        }
      }

      @include active {
        svg {
          color: var(--text-contrast-color);
        }
      }
    }

    svg {
      @include box(100%);
      color: var(--text-color);
      transition: color $trTime $easeDefault, opacity $trTime $easeDefault;
    }
  }

  &__card {
    position: relative;
    width: 100%;
    max-width: 84.2rem;
    max-height: 90%;
    padding: 3.2rem;
    border-radius: $borderRadiusDefault;
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

  &__image-container {
    position: relative;

    img {
      @include box(100%);
      max-width: 85vw;
      max-height: 90vh;
      display: block;
      object-fit: contain;

      @include --mobile {
        max-width: 95vw;
      }
    }
  }
}
</style>
