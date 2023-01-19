<template>
  <div class="container">
    <div class="certificates">
      <div class="certificates__button _left">
        <svg-icon name="button-arrow"/>
      </div>
      <div class="certificates__button _right">
        <svg-icon name="button-arrow"/>
      </div>
      <flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">
          <img alt="certificate" src="~/assets/images/certificate1.jpg"/>
        </div>
        <div class="carousel-cell">
          <img alt="certificate" src="~/assets/images/certificate2.jpg"/>
        </div>
        <div class="carousel-cell">
          <img alt="certificate" src="~/assets/images/certificate1.jpg"/>
        </div>
        <div class="carousel-cell">
          <img alt="certificate" src="~/assets/images/certificate2.jpg"/>
        </div>
      </flickity>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Certificates',
  data() {
    return {
      flickityOptions: {

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

    @include --mobile {
      height: 30rem;
    }

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
