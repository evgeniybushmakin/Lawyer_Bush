<template>
  <div class="container">
    <div class="services-list">
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

  &__title {
    margin-bottom: 2.4rem;

    @include --mobile {
      margin-bottom: 1.6rem;
    }
  }

  &__list-item {
    margin-top: 1.6rem;

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
