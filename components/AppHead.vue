<template>
  <div class="app-head">
    <div class="container">
      <div class="app-head__content">
        <p class="app-head__sign">Профессиональный юрист</p>
        <h1 class="app-head__name">Курмаева Мария Владимировна</h1>
        <p class="app-head__description">Помощь в&nbsp;решении судебных и&nbsp;досудебных вопросов</p>
        <AppButton>Получить бесплатную консультацию</AppButton>
      </div>

      <img
        alt="title image"
        src="~/assets/images/head.png"
        class="app-head__img"
      />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/ui/AppButton";
export default {
  name: 'AppHead',
  components: {
    AppButton,
  },
}
</script>

<style lang="scss" scoped>
.app-head {
  height: calc(100vh - $desktopHeaderHeight);
  background-color: var(--head-background);
  overflow: hidden;

  @include --tablet {
    height: calc(100vh - $mobileHeaderHeight);
  }

  .container {
    position: relative;
    height: 100%;
  }

  &__img {
    position: absolute;
    top: 0;
    right: -10%;
    height: 100%;
    max-width: 80%;
    object-fit: contain;

    @include --tablet {
      top: auto;
      bottom: -10%;
      right: -20%;
      height: 70%;
      max-width: none;
    }

    @include --mobile {
      bottom: 0;
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

    @include --tablet {
      padding-top: 5.6rem;
    }

    @include --mobile {
      height: 100%;
      padding-top: 4rem;
      padding-bottom: 4rem;
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
    margin-bottom: 5.6rem;

    @include --mobile {
      margin-bottom: 3.2rem;
    }
  }

  &__description {
    @include text-h3;
    margin-bottom: 3.2rem;
    font-weight: 500;
    color: var(--primary-color);

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
