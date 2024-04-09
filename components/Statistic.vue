<template>
  <div class="container">
    <div class="statistic">
      <div class="statistic__content">
        <h4 class="statistic__title">Вы&nbsp;стали гостем интернет приемной, а&nbsp;значит, Вам требуется помощь
          квалифицированного специалиста в&nbsp;области права.</h4>

        <p class="statistic__text">Мы&nbsp;оказываем содействие гражданам и&nbsp;бизнесу в&nbsp;решении различных правовых
          споров и&nbsp;обеспечиваем представление Ваших интересов в&nbsp;судах общей юрисдикции, арбитраже, третейском
          суде, принимаем участие в&nbsp;переговорах, оказываем помощь на&nbsp;стадии досудебного урегулирования споров.</p>
        <p class="statistic__text">Наши основные принципы это профессионализм и индивидуальный подход к каждому
          доверителю.</p>
      </div>

      <div class="statistic__items">
        <div class="statistic__item">
          <div class="statistic__item-title">5 <span>лет</span></div>
          <span class="statistic__item-sign">судебной практики</span>
        </div>

        <div class="statistic__item">
          <div class="statistic__item-title">24</div>
          <span class="statistic__item-sign">выигранных суда</span>
        </div>

        <div class="statistic__item">
          <div class="statistic__item-title">35 <span>человек</span></div>
          <span class="statistic__item-sign">довольных клиентов</span>
        </div>

        <div class="statistic__item">
          <div class="statistic__item-title">30 <span>%</span></div>
          <span class="statistic__item-sign">доверителей приходят по&nbsp;рекомендации</span>
        </div>
      </div>

      <img
        alt="goddess"
        src="~/assets/images/femide.png"
        class="statistic__img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistic'
}
</script>

<style lang="scss" scoped>
.statistic {
  position: relative;
  padding: 5.2rem;
  background: linear-gradient(97.55deg, #2E3146 25.89%, #434C8A 126.82%), #2E3146;
  border-radius: $borderRadiusDefault;
  color: var(--text-contrast-color);
  overflow: hidden;

  @include --tablet {
    padding: 4rem;
  }

  @include --mobile {
    padding: 2rem;
  }

  &__content {
    width: 45%;

    @include --tablet {
      width: 100%;
    }
  }

  &__title {
    margin-bottom: 2.4rem;

    @include --mobile {
      margin-bottom: 1.6rem;
    }
  }

  &__text {
    margin-top: 1.6rem;

    @include --mobile {
      margin-top: 0.8rem;
    }
  }

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 5.2rem;

    @include --tablet {
      margin-top: 2.4rem;
    }

    @include --mobile {
      margin-top: 0.8rem;
    }
  }

  &__item {
    width: calc(25% - 8rem);

    @include --tablet {
      margin-top: 1.6rem;
      width: calc(50% - 4rem);
    }

    @include --mobile {
      width: calc(50% - 1rem);
    }
  }

  &__item-title {
    @include text-h2;
    padding-bottom: 0.8rem;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid var(--divider-color);

    span {
      @include text-h4;
    }
  }

  &__img {
    position: absolute;
    right: 10%;
    bottom: -10%;
    height: 100%;
    transform: scale(-1, 1);

    @include --mobile {
      right: 0;
      bottom: 0;
      height: 50%;
    }
  }
}
</style>
