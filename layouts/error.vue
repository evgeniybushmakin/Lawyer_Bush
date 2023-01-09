<template>
  <div class="not-found">
    <div class="container">
      <span
        class="not-found__error-number"
        v-if="error.statusCode"
        v-html="error.statusCode"
      ></span>

      <h4 class="not-found__error-text" v-html="errorText"></h4>

      <AppButton tag="nuxt-link" to="/">
        Вернуться на главную
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from "~/components/ui/AppButton";

export default {
  props: ['error'],
  components: {
    AppButton
  },
  computed: {
    errorText() {
      switch (this.error.statusCode) {
        case 404:
          return 'К&nbsp;сожалению, запрашиваемая вами страница не&nbsp;найдена. Попробуйте вернуться на&nbsp;главную.'
        case 401:
          return 'Неавторизованный запрос'
        case 403:
          return 'Доступ к ресурсу запрещен'
        case 413:
          return 'Превышен размер выполняемого запроса'
        default:
          return 'Произошла непредвиденная ошибка'
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  position: relative;
  padding-top: 10rem;

  &::before {
    position: absolute;
    top: -$desktopHeaderHeight;
    left: 0;
    width: 100%;
    height: $desktopHeaderHeight;
    background-color: var(--accent-color);
    content: '';

    @include --tablet {
      top: -$mobileHeaderHeight;
      height: $mobileHeaderHeight;
    }
  }

  &__error-number {
    display: block;
    margin-bottom: 3.2rem;
    color: var(--primary-color);
    font-weight: 700;
    font-size: 9.6rem;
    line-height: 6.8rem;
  }

  &__error-text {
    max-width: 69.4rem;
    margin-bottom: 4.8rem;
  }

  .app-button {
    @include --mobile {
      width: 100%;
    }
  }
}
</style>
