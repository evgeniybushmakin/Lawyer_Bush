<template>
  <div class="app-head">
    <div class="container">
      <div class="app-head__content">
        <p class="app-head__sign">Профессиональный юрист</p>
        <h1 class="app-head__name">Курмаева Мария Владимировна</h1>
        <p class="app-head__description">Помощь в&nbsp;решении судебных и&nbsp;досудебных вопросов</p>
        <AppButton @click="scrollToForm">Получить бесплатную консультацию</AppButton>
      </div>
    </div>

    <img
      alt="title image"
      src="~/assets/images/page-head-1.jpg"
      class="app-head__img"
    />
  </div>
</template>

<script>
import AppButton from "@/components/ui/AppButton";

export default {
  name: 'AppHead',
  components: {
    AppButton,
  },
  methods: {
    scrollToForm() {
      const gsap = this.$gsap
      gsap.to(window, {duration: 1, scrollTo:"#question-form"});
    },
  },
}
</script>

<style lang="scss" scoped>
.app-head {
  position: relative;
  height: calc(100vh - $desktopHeaderHeight);
  background-color: var(--head-background);

  @include --tablet {
    height: calc(100vh - $mobileHeaderHeight);
  }

  .container {
    position: relative;
    height: 100%;
  }

  &__img {
    position: absolute;
    top: -$desktopHeaderHeight;
    left: 0;
    width: 100%;
    height: calc(100% + $desktopHeaderHeight);
    object-fit: cover;

    @include --tablet {
      object-position: left;
      top: -$mobileHeaderHeight;
      height: calc(100% + $mobileHeaderHeight);
    }
  }

  &::before {
    position: absolute;
    z-index: 2;
    top: -$desktopHeaderHeight;
    left: 0;
    width: 100%;
    height: calc(100% + $desktopHeaderHeight);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    content: '';

    @include --tablet {
      top: -$mobileHeaderHeight;
      height: calc(100% + $mobileHeaderHeight);
    }
  }

  &__content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 15vh;
    max-width: 60rem;
    color: var(--text-contrast-color);

    @include --tablet {
      padding-top: 10vh;
    }

    @include --mobile {
      height: 100%;
      padding-top: 4rem;
      padding-bottom: 12rem;
    }
  }

  &__sign {
    @include text-h3;
    margin-bottom: 1.2rem;
    font-weight: 500;

    @include --mobile {
      margin-bottom: 0.8rem;
    }
  }

  &__name {
    margin-bottom: 15vh;

    @include --tablet {
      margin-bottom: 10vh;
    }

    @include --mobile {
      margin-bottom: 4rem;
    }
  }

  &__description {
    @include text-h3;
    margin-bottom: 3.2rem;
    font-weight: 500;

    @include --mobile {
      margin-bottom: 1.6rem;
    }
  }

  .app-button {
    @include --mobile {
      width: 100%;
      margin-top: auto;
    }
  }
}
</style>
