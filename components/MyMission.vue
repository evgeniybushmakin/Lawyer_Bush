<template>
  <div class="container">
    <div class="mission">
      <div class="mission__images">
        <div class="mission__img mission__img_1">
          <img
            alt="title image"
            src="~/assets/images/mission-1.jpg"
          />
        </div>

        <div class="mission__img mission__img_2">
          <img
            alt="title image"
            src="~/assets/images/mission-2.jpg"
          />
        </div>
      </div>

      <div class="mission__content">
        <span class="mission__sign">Моя миссия</span>
        <p class="mission__text">Моя миссия заключается в&nbsp;предоставлении действительно профессиональной правовой
          помощи. Мои главные цели,&nbsp;&mdash; защитить Ваши законные права, ревностно представлять Ваши интересы, и&nbsp;выработать
          позицию, для получения наилучшего результата для каждого случая с&nbsp;юридической точки зрения.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMission',
}
</script>

<style lang="scss" scoped>
.mission {
  display: flex;

  @include --tablet {
    flex-direction: column;
  }

  &__images {
    flex-shrink: 0;
    position: relative;
    width: 51.6rem;
    height: 42.7rem;

    @include --tablet {
      width: 100%;
    }

    @include --mobile {
      height: 30rem;
    }
  }

  &__img {
    position: absolute;
    overflow: hidden;
    border-radius: $borderRadiusDefault;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &_1 {
      top: 0;
      right: 0;
      width: 42.7rem;
      height: 30.1rem;
      transform: scale(-1, 1);

      @include --tablet {
        width: 70%;
      }

      @include --mobile {
        height: 20rem;
      }
    }

    &_2 {
      bottom: 0;
      left: 0;
      width: 24.2rem;
      height: 28.8rem;
      filter: drop-shadow(0px 0px 51px rgba(0, 0, 0, 0.25)) drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.25));

      @include --tablet {
        width: 40%;
      }

      @include --mobile {
        height: 20rem;
      }
    }
  }

  &__content {
    margin-left: 13.5rem;
    padding-top: 5.6rem;

    @include --tablet {
      margin-left: 0;
    }

    @include --mobile {
      padding-top: 2.4rem;
    }
  }

  &__sign {
    @include text-bold;
    display: block;
    color: var(--text-lighten-color);
    margin-bottom: 2.4rem;

    @include --mobile {
      margin-bottom: 1.2rem;
    }
  }

  &__text {
    @include text-h4;
  }
}
</style>
