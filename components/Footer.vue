<template>
  <footer class="footer">
    <div class="container">
      <nuxt-link class="footer__link" to="/privacy-policy">Политика конфиденциальности</nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  padding: 5.2rem 0;
  background-color: var(--accent-color);

  &__link {
    @include text-h5;
    color: var(--text-contrast-color);
  }
}
</style>
