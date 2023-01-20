<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__head">
        <div class="footer__head-item">
          <span class="footer__head-title">Курмаева Мария Владимировна</span>

          <span class="footer__head-sign">Профессиональный юрист</span>
        </div>

        <div class="footer__head-item">
          <span class="footer__head-title">
            <a href="tel:+79219095503">+7 (921) 909-55-03</a>
          </span>

          <span class="footer__head-sign">Телефон</span>
        </div>

        <div class="footer__head-item">
          <span class="footer__head-title">
            <a href="mailto:mariku@mail.ru">mariku@mail.ru</a>
          </span>

          <span class="footer__head-sign">Почта</span>
        </div>

        <div class="footer__head-item">
          <div class="footer__social-container">
            <a target="_blank" href="https://wa.me/79219095503"><svg-icon name="whatsapp"/></a>
            <a target="_blank" href="tg://resolve?domain=lilulilovskaya"><svg-icon name="telegram"/></a>
          </div>
        </div>
      </div>

      <div class="footer__foot">
        <nuxt-link class="footer__foot-link" to="/privacy-policy">Политика конфиденциальности</nuxt-link>
      </div>
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
  padding: 4rem 0;
  background-color: var(--accent-color);
  color: var(--text-contrast-color);

  .container {
    display: flex;
    flex-direction: column;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--divider-color);

    @include --tablet {
      flex-wrap: wrap;
      padding-bottom: 1.6rem;
    }

    @include --mobile {
      flex-direction: column;
      padding-bottom: 2rem;
    }
  }

  &__head-item {
    display: flex;
    flex-direction: column;

    @include --tablet {
      width: auto;
      margin-bottom: 2.4rem;

      &:first-child {
        width: 100%;
      }
    }

    @include --mobile {
      margin-bottom: 0;
      width: 100%;

      &:not(:last-of-type) {
        margin-bottom: 1.2rem;
      }
    }
  }

  &__head-title {
    @include text-lead;
    font-weight: 600;
    margin-bottom: 0.8rem;

    @include --mobile {
      margin-bottom: 0;
    }

    a {
      text-decoration: underline transparent;
      text-decoration-skip-ink: none;
      text-underline-offset: 2px;
      transition: text-decoration $trTime $easeDefault;

      @include hover {
        text-decoration-color: var(--text-contrast-color);
      }
    }
  }

  &__social-container {
    display: flex;
    justify-content: flex-end;

    @include --mobile {
      justify-content: flex-start;
    }

    a {
      @include box(2.4rem);
      transition: opacity $trTime $easeDefault;

      &:not(:last-of-type) {
        margin-right: 1.6rem;
      }

      @include hover {
        opacity: 0.6;
      }

      svg {
        @include box(100%);
        color: var(--text-contrast-color);
      }
    }
  }

  &__head-sign {
    @include text-sm;
    opacity: 0.7;
  }

  &__foot-link {
    @include text-lead;
    font-weight: 600;
    text-decoration: underline transparent;
    text-decoration-skip-ink: none;
    text-underline-offset: 2px;
    transition: text-decoration $trTime $easeDefault;

    @include hover {
      text-decoration-color: var(--text-contrast-color);
    }
  }

  &__foot {
    padding-top: 4rem;

    @include --mobile {
      padding-top: 2rem;
    }
  }
}
</style>
