<template>
  <div class="container">
    <div class="certificates">
      <agile :options="myOptions">
        <div class="certificates__slide">
          <img alt="certificate" src="~/assets/images/certificate1.jpg"/>
        </div>

        <div class="certificates__slide">
          <img alt="certificate" src="~/assets/images/certificate2.jpg"/>
        </div>

        <div class="certificates__slide">
          <img alt="certificate" src="~/assets/images/certificate1.jpg"/>
        </div>

        <div class="certificates__slide">
          <img alt="certificate" src="~/assets/images/certificate2.jpg"/>
        </div>

        <template slot="prevButton">
          <div class="certificates__button _left">
            <svg-icon name="button-arrow"/>
          </div>
        </template>
        <template slot="nextButton">
          <div class="certificates__button _right">
            <svg-icon name="button-arrow"/>
          </div>
        </template>
      </agile>
    </div>
  </div>
</template>

<script>
import {VueAgile} from 'vue-agile'

export default {
  name: 'Certificates',
  components: {
    agile: VueAgile
  },
  data()
  {
    return {
      myOptions: {
        navButtons: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: true
            }
          },

          {
            breakpoint: 1024,
            settings: {
              navButtons: true,
              dots: false,
              infinite: false,
              slidesToShow: 3,
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.certificates {
  position: relative;

  &__slide {
    height: 40rem;

    @include --mobile {}
    height: 30rem;

    img {
      @include box(100%);
      display: block;
      object-fit: contain;
    }
  }

  button {
    &[disabled] {
      .certificates__button {
        background-color: var(--input-disabled-color);
        opacity: 0.6;
        pointer-events: none;
      }
    }
  }

  &__button {
    @include box(5.6rem);
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid transparent;
    transition: background-color $trTime $easeDefault, border-color $trTime $easeDefault;

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
      transform: scale(-1, 1);
    }

    &._right {

    }
  }
}
</style>
