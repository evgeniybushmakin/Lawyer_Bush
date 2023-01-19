<template>
  <div class="container">
    <div class="certificates__button _left">
      <svg-icon name="button-arrow"/>
    </div>
    <div class="certificates__button _right">
      <svg-icon name="button-arrow"/>
    </div>

    <div class="certificates">
      <div v-swiper:mySwiper="options">
        <div class="swiper-wrapper">
          <div class="img-warpper swiper-slide">
            <img alt="certificate" src="~/assets/images/certificate1.jpg"/>
          </div>

          <div class="img-warpper swiper-slide">
            <img alt="certificate" src="~/assets/images/certificate2.jpg"/>
          </div>

          <div class="img-warpper swiper-slide">
            <img alt="certificate" src="~/assets/images/certificate1.jpg"/>
          </div>

          <div class="img-warpper swiper-slide">
            <img alt="certificate" src="~/assets/images/certificate2.jpg"/>
          </div>
        </div>

        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Certificates',
  data() {
    return {
      options: {
        navigation: {
          nextEl: '._right',
          prevEl: '._left',
        },
        pagination: {
          el: '.swiper-pagination'
        },
        breakpoints: {
          767: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        },
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.certificates {
  position: relative;

  .swiper-slide {
    width: 100%;
    height: 40rem;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  ::v-deep.swiper-pagination-bullet-active {
    background-color: black;
  }


  &__button {
    @include box(5.6rem);
    position: absolute;
    top: calc(50% - 2.8rem);
    z-index: 2;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid transparent;
    transition: background-color $trTime $easeDefault, border-color $trTime $easeDefault;
    cursor: pointer;

    &.swiper-button-disabled {
      background-color: var(--input-disabled-color);
      opacity: 0.6;
      pointer-events: none;
    }

    @include hover {
      background-color: var(--text-contrast-color);
      border-color: var(--primary-color);

      svg {
        color: var(--primary-color);
      }
    }

    @include active {
      border-color: var(--primary-darken-color);

      svg {
        color: var(--primary-darken-color);
      }
    }

    svg {
      @include box(2.4rem);
      color: var(--text-contrast-color);
      transition: color $trTime $easeDefault;
    }

    &._left {
      left: 0;
      transform: scale(-1, 1);
    }

    &._right {
      right: 0;
    }
  }
}
</style>
