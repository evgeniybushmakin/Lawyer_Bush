<template>
  <div class="container text-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TextBlock'
}
</script>

<style lang="scss" scoped>
.text-content {
  p {
    &:not(:last-child) {
      margin-bottom: 1.2rem;
    }

    @include --tablet {
      &:not(:last-child) {
        margin-bottom: 0.8rem;
      }
    }
  }
}
</style>
