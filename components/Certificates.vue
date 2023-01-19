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
          <div @click="openPopup('certificate1.jpg')" class="img-warpper swiper-slide">
            <img alt="certificate" src="~/assets/images/certificate1.jpg"/>
          </div>

          <div @click="openPopup('certificate2.jpg')" class="img-warpper swiper-slide">
            <img alt="certificate" src="~/assets/images/certificate2.jpg"/>
          </div>

          <div @click="openPopup('certificate1.jpg')" class="img-warpper swiper-slide">
            <img alt="certificate" src="~/assets/images/certificate1.jpg"/>
          </div>

          <div @click="openPopup('certificate2.jpg')" class="img-warpper swiper-slide">
            <img alt="certificate" src="~/assets/images/certificate2.jpg"/>
          </div>
        </div>

        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>

    <Popup :open-popup="isPopupShown" image :image-src="popupSrc" @close="closePopup"/>
  </div>
</template>

<script>
import Popup from "@/components/Popup";
export default {
  name: 'Certificates',
  components: {
    Popup,
  },
  data() {
    return {
      isPopupShown: false,
      popupSrc: '',
      options: {
        slidesPerView: 3,
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
  },
  methods: {
    openPopup(img) {
      this.popupSrc = img
      this.isPopupShown = true;
    },
    closePopup() {
      this.isPopupShown = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  @include --tablet {
    padding-bottom: 4rem;
  }
}

.certificates {
  position: relative;

  .swiper-slide {
    width: 100%;
    height: 40rem;

    @include hover {
      cursor: pointer;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .swiper-pagination.swiper-pagination-bullets {
    bottom: -3.2rem;
  }

  ::v-deep .swiper-container {
    overflow: visible;
  }

  ::v-deep .swiper-pagination-bullet-active {
    background-color: var(--primary-color);
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

    @include --tablet {
      @include box(3.2rem);
      top: auto;
      bottom: 0;
    }

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

      @include --tablet {
        @include box(1.6rem);
      }
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
