<template>
  <header ref="header" class="header">
    <div class="container">
      <nuxt-link to="/" class="header__logo">
        <img
          alt="logo"
          src="~/assets/images/logo.png"
        />
      </nuxt-link>

      <div class="header__links">
        <nuxt-link to="/individual" class="header__link">Физическим лицам</nuxt-link>
        <nuxt-link to="/entity" class="header__link">Юридическим лицам</nuxt-link>
        <nuxt-link to="/contacts" class="header__link">Контакты</nuxt-link>
        <AppButton color="contrast" @click="openPopup">Задать вопрос</AppButton>
      </div>

      <button class="header__burger" @click="handleOpenMenu">
        <span class="header__burger-inner" :class="{open: isMenuOpen}"></span>
      </button>
    </div>

    <div class="menu-burger" :class="{open: isMenuOpen}">
      <div class="container">
        <nuxt-link to="/" class="menu-burger__link" v-on:click.native="handleOpenMenu">
          Главная <svg-icon name="button-arrow"/>
        </nuxt-link>
        <nuxt-link to="/individual" class="menu-burger__link" v-on:click.native="handleOpenMenu">
          Физическим лицам <svg-icon name="button-arrow"/>
        </nuxt-link>
        <nuxt-link to="/entity" class="menu-burger__link" v-on:click.native="handleOpenMenu">
          Юридическим лицам <svg-icon name="button-arrow"/>
        </nuxt-link>
        <nuxt-link to="/contacts" class="menu-burger__link" v-on:click.native="handleOpenMenu">
          Контакты <svg-icon name="button-arrow"/>
        </nuxt-link>

        <AppButton color="contrast" v-on:click="openPopup">Задать вопрос</AppButton>

        <img
          alt="image"
          src="~/assets/images/femide.png"
          class="menu-burger__img"
        />
      </div>
    </div>

    <Popup :open-popup="isPopupShown" @close="closePopup"/>
  </header>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import AppButton from "~/components/ui/AppButton";
import Popup from "~/components/Popup";

export default {
  name: 'Header',
  components: {
    AppButton,
    Popup,
  },
  data() {
    return {
      isMenuOpen: false,
      isPopupShown: false,
    }
  },
  methods: {
    handleOpenMenu() {
      if (!this.isMenuOpen) {
        disableBodyScroll(this.$refs.header)
        this.isMenuOpen = true
      } else {
        enableBodyScroll(this.$refs.header)
        this.isMenuOpen = false
      }
    },
    openPopup() {
      this.isPopupShown = true;
    },
    closePopup() {
      this.isPopupShown = false
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 3;
  background-color: transparent;
  height: $desktopHeaderHeight;
  border-bottom: 1px solid var(--border-color);

  @include --tablet {
    height: $mobileHeaderHeight;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 1rem 0;
  }

  &__logo {
    height: 100%;
    border-radius: 50%;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__links {
    display: flex;
    align-items: center;

    @include --tablet {
      display: none;
    }
  }

  &__link {
    @include text-h5;
    margin-right: 3.5rem;
    color: var(--text-contrast-color);
    text-decoration: underline transparent;
    text-decoration-skip-ink: none;
    text-underline-offset: 2px;
    transition: text-decoration $trTime $easeDefault;

    @include hover {
      text-decoration-color: var(--text-contrast-color);
    }
  }

  &__burger {
    position: fixed;
    z-index: 11;
    top: 1.5rem;
    right: 4rem;
    display: none;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 1px solid var(--text-contrast-color);
    background-color: var(--primary-color);

    @include --tablet {
      display: flex;
    }

    @include --mobile {
      right: 2rem;
    }
  }

  &__burger-inner {
    display: block;
    position: relative;
    width: 2rem;
    height: 1px;
    background-color: var(--text-contrast-color);
    transition: background-color $trTime $easeDefault;

    &::before {
      position: absolute;
      display: block;
      width: 2rem;
      height: 1px;
      background-color: var(--text-contrast-color);
      transform: translateY(-5px);
      transition: transform .35s ease-in-out;
      content: '';
    }

    &::after {
      position: absolute;
      display: block;
      width: 2rem;
      height: 1px;
      background-color: var(--text-contrast-color);
      transform: translateY(5px);
      transition: transform .35s ease-in-out;
      content: '';
    }

    &.open {
      background-color: transparent;

      &::before {
        transform: translateY(0) rotate(130deg);
      }

      &::after {
        transform: translateY(0) rotate(45deg);
      }
    }
  }
}

.menu-burger {
  display: none;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: var(--text-contrast-color);
  background-color: var(--accent-color);
  transform: translateX(-100%);
  transition: transform, $trTime $easeDefault;
  will-change: transform;

  @include --tablet {
    display: block;
  }

  &.open {
    transform: translateX(0);
  }

  .container {
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @include --mobile {
      padding-bottom: 2rem;
    }
  }

  &__link {
    @include text-h4;
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;

    svg {
      @include box(1.4rem);
      margin-left: 1.4rem;

      @include --mobile {
        @include box(1.2rem);
        margin-left: 1.2rem;
      }
    }
  }

  &__img {
    display: none;

    @include --tablet {
      display: block;
      position: absolute;
      right: 0;
      bottom: -5%;
      max-height: 75%;
      max-width: 100%;
      object-fit: contain;
      transform: scale(-1, 1);
    }
  }

  .app-button {
    position: relative;
    z-index: 2;
    margin-top: 1.2rem;

    @include --mobile {
      margin-top: auto;
      width: 100%;
    }
  }
}
</style>
