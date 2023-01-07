<template>
  <div class="container">
    <div class="services-list">
      <div class="services-list__content">
        <h3 class="services-list__title" v-html="title"></h3>

        <ul class="services-list__list">
          <li
            v-for="(item, index) in services"
            :key="index"
            class="services-list__list-item"
            v-html="item"
          ></li>
        </ul>
      </div>

      <img
        alt="image"
        src="~/assets/images/head.png"
        class="services-list__img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesList',
  props: {
    title: {
      type: String,
      default: '',
    },
    services: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.services-list {
  position: relative;
  padding: 5.2rem;
  background-color: var(--head-background);
  border-radius: $borderRadiusDefault;
  overflow: hidden;

  @include --tablet {
    padding: 4rem;
  }

  @include --mobile {
    padding: 2rem;
  }

  &__img {
    position: absolute;
    right: -5%;
    bottom: -15%;
    max-height: 100%;
    max-width: 60%;
    object-fit: contain;

    @include --tablet {
      display: none;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
    max-width: 70%;

    @include --tablet {
      max-width: none;
    }
  }

  &__title {
    margin-bottom: 2.4rem;

    @include --mobile {
      margin-bottom: 1.6rem;
    }
  }

  &__list {
    columns: 2;

    @include --tablet {
      columns: 1;
    }
  }

  &__list-item {
    margin-bottom: 1.6rem;

    &::before {
      display: inline-block;
      margin-right: 1rem;
      margin-bottom: 3px;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: var(--primary-color);
      content: '';
    }

    @include --mobile {
      margin-top: 0.8rem;
    }
  }
}
</style>
