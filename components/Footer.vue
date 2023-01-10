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
            <a href="tel:+1234567890">+7 (965) 195-58-58</a>
          </span>

          <span class="footer__head-sign">Телефон</span>
        </div>

        <div class="footer__head-item">
          <span class="footer__head-title">
            <a href="mailto:info@dragomir.pro">info@dragomir.pro</a>
          </span>

          <span class="footer__head-sign">Почта</span>
        </div>

        <div class="footer__head-item">
          <div class="footer__social-container">
            <a href="#"><svg-icon name="whatsapp"/></a>
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

    @include --mobile {
      flex-direction: column;
      padding-bottom: 2rem;
    }
  }

  &__head-item {
    display: flex;
    flex-direction: column;

    @include --mobile {
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
