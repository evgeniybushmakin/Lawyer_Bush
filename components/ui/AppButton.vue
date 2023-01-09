<template>
  <component
    :is="tag"
    class="app-button"
    :to="to"
    :class="{
      primary: color === 'primary',
      contrast: color === 'contrast',
    }"
    @click="click"
  >
    <span>
      <slot />
    </span>
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
}
</style>
