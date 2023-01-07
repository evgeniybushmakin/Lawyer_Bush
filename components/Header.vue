<template>
  <header class="header">
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
      </div>

      <button class="header__burger" @click="handleOpenMenu">
        <span class="header__burger-inner" :class="{open: isMenuOpen}"></span>
      </button>
    </div>

    <div class="menu-burger" :class="{open: isMenuOpen}">
      <div class="container">
        <nuxt-link to="/" class="menu-burger__link" v-on:click.native="handleCloseMenu">Главная</nuxt-link>
        <nuxt-link to="/individual" class="menu-burger__link" v-on:click.native="handleCloseMenu">Физическим лицам</nuxt-link>
        <nuxt-link to="/entity" class="menu-burger__link" v-on:click.native="handleCloseMenu">Юридическим лицам</nuxt-link>
        <nuxt-link to="/contacts" class="menu-burger__link" v-on:click.native="handleCloseMenu">Контакты</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    handleOpenMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    handleCloseMenu() {
      this.isMenuOpen = false
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
    @include --tablet {
      display: none;
    }
  }

  &__link {
    @include text-h5;
    color: var(--text-contrast-color);
    text-decoration: underline transparent;
    text-decoration-skip-ink: none;
    text-underline-offset: 2px;
    transition: text-decoration $trTime $easeDefault;

    &:not(:last-of-type) {
      margin-right: 3.5rem;
    }

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
  background-color: var(--app-background);
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
  }

  &__link {
    @include text-h3;

    &:not(:last-of-type) {
      margin-bottom: 1.2rem;
    }
  }
}
</style>
