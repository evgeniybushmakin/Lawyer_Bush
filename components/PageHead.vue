<template>
  <div class="page-head">
    <div class="container">
      <h2 v-if="title" class="page-head__title" v-html="title"></h2>
    </div>

    <img
      ref="img"
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
  mounted() {
    const gsap = this.$gsap
    const { img } = this.$refs

    gsap.to(img, {
      xPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSection",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
      },
    });
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
  min-height: 35rem;
  padding-top: 9rem;

  @include --tablet {
    min-height: 30rem;
    padding-top: 5rem;
  }

  @include --mobile {
    min-height: 25rem;
    padding-top: 5rem;
  }

  &__title {
    color: var(--text-contrast-color);
    position: relative;
    z-index: 2;
  }

  &::before {
    position: absolute;
    z-index: 2;
    top: -$desktopHeaderHeight;
    left: 0;
    width: 100%;
    height: calc(100% + $desktopHeaderHeight);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    content: '';

    @include --tablet {
      top: -$mobileHeaderHeight;
      height: calc(100% + $mobileHeaderHeight);
    }
  }

  &__img {
    position: absolute;
    top: -$desktopHeaderHeight;
    left: -20%;
    width: 120%;
    height: calc(100% + $desktopHeaderHeight);
    object-fit: cover;

    @include --tablet {
      top: -$mobileHeaderHeight;
      height: calc(100% + $mobileHeaderHeight);
    }
  }
}
</style>
