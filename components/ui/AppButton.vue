<template>
  <component
    :is="tag"
    class="app-button"
    :to="to"
    :class="{
      primary: color === 'primary',
      contrast: color === 'contrast',
      preloader
    }"
    @click="click"
  >
    <span class="app-button__inner">
      <slot />
    </span>

    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </component>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    /**
     * @type {('primary'|'contrast')}
     */
    color: {
      type: String,
      default: 'primary',
    },
    tag: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: '',
    },
    preloader: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit('click')
    }
  },
}
</script>

<style lang="scss" scoped>
.app-button {
  @include text-btn;
  position: relative;
  display: flex;
  justify-content: center;
  width: fit-content;
  padding: 1.6rem 3.2rem;
  border-radius: 3.2rem;
  transition-property: color, background-color, border-color, opacity;
  transition-duration: $trTime;
  transition-timing-function: $easeDefault;

  @include --tablet {
    padding: 1.2rem 2.4rem;
  }

  &.primary {
    color: var(--text-contrast-color);
    background-color: var(--primary-color);
    border: 1px solid transparent;

    @include hover {
      color: var(--primary-color);
      background-color: transparent;
      border-color: var(--primary-color);
    }

    @include active {
      color: var(--primary-darken-color);
      border-color: var(--primary-darken-color);
    }
  }

  &.contrast {
    color: var(--text-color);
    background-color: var(--text-contrast-color);
    border: 1px solid transparent;

    @include hover {
      color: var(--text-contrast-color);
      background-color: transparent;
      border-color: var(--text-contrast-color);
    }

    @include active {
      opacity: 0.6;
    }
  }

  &.preloader {
    pointer-events: none;

    &.primary {
      .lds-ring {
        background-color: var(--primary-color);

        div {
          border: 0.5rem solid var(--text-contrast-color);
          border-color: var(--text-contrast-color) transparent transparent transparent;
        }
      }
    }

    .lds-ring {
      display: flex;

      div {
        display: block;
      }
    }
  }

  .lds-ring {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    justify-content: center;
    background-color: var(--text-contrast-color);
    border-radius: 3.2rem;
    align-items: center;
    width: 100%;
    height: 100%;

    div {
      display: none;
      box-sizing: border-box;
      position: absolute;
      width: 3.2rem;
      height: 3.2rem;
      border: 0.5rem solid var(--primary-color);
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: var(--primary-color) transparent transparent transparent;

      &:nth-child(1) {
        animation-delay: -0.45s;
      }

      &:nth-child(2) {
        animation-delay: -0.3s;
      }

      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
