<template>
  <div class="page-head">
    <div class="container">
      <h2 v-if="title" class="page-head__title" v-html="title"></h2>
    </div>

    <img
      v-if="img"
      alt="title image"
      :src="getImgUrl(img)"
      class="page-head__img"
    />
  </div>
</template>

<script>
export default {
  name: 'PageHead',
  props: {
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/images/' + pic)
    }
  },
}
</script>

<style lang="scss" scoped>
.page-head {
  position: relative;
  min-height: 40rem;
  padding-top: 5.2rem;

  @include --tablet {
    min-height: 25rem;
    padding-top: 3.2rem;
  }

  @include --mobile {
    min-height: 17rem;
    padding-top: 2.4rem;
  }

  &__title {
    color: var(--text-contrast-color);
    position: relative;
    z-index: 3;
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

  &__img {
    position: absolute;
    top: -$desktopHeaderHeight;
    left: 0;
    width: 100%;
    height: calc(100% + $desktopHeaderHeight);
    object-fit: cover;

    @include --tablet {
      top: -$mobileHeaderHeight;
      height: calc(100% + $mobileHeaderHeight);
    }
  }
}
</style>
