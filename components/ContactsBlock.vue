<template>
  <div class="container">
    <div class="contacts">
      <div class="contacts__map">
        <img
          alt="map"
          src="~/assets/images/map.png"
          class="contacts__img"
        />
      </div>

      <div class="contacts__text">
        <p class="contacts__text-item"><span>Адрес офиса:</span> г. Санкт-Петербург, ул. Белы Куна, дом 5, пом. 1Н</p>

        <p class="contacts__text-item"><span>Как добраться своим ходом:</span> Метро Международная (выход из метро один), из стеклянных дверей направо, через 100 метров необходимо совершить пешеходный переход.</p>

        <p class="contacts__text-item">Вход в жилой дом со двора.</p>

        <p class="contacts__text-item"><span>Телефон:</span> <a href="tel:+79219095503">+7 (921) 909-55-03</a></p>

        <p class="contacts__text-item"><span>Почта:</span> <a href="mailto:mariku@mail.ru">mariku@mail.ru</a></p>

        <div class="contacts__social">
          <a target="_blank" href="https://wa.me/79219095503"><svg-icon name="whatsapp"/></a>
          <a target="_blank" href="tg://resolve?domain=lilulilovskaya"><svg-icon name="telegram"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactsBlock',
}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  align-items: center;

  @include --tablet {
    flex-direction: column-reverse;
  }

  &__map {
    @include box(51.4rem);
    flex-shrink: 0;

    @include --tablet {
      width: 100%;
      height: 30rem;
    }

    img {
      @include box(100%);
      display: block;
      object-fit: cover;
    }
  }

  &__text {
    margin-left: 14.2rem;

    @include --tablet {
      margin-left: 0;
      margin-bottom: 2.4rem;
    }
  }

  &__text-item {
    @include text;
    margin-bottom: 1.2rem;

    @include --tablet {
      margin-bottom: 0.8rem;
    }

    span {
      font-weight: 600;
    }

    a {
      color: var(--primary-color);
      text-decoration: underline transparent;
      text-decoration-skip-ink: none;
      text-underline-offset: 2px;
      transition: text-decoration $trTime $easeDefault;

      @include hover {
        text-decoration-color: var(--primary-color);
      }
    }
  }

  &__social {
    display: flex;

    a {
      @include box(2.4rem);
      transition: opacity $trTime $easeDefault;

      &:not(:last-of-type) {
        margin-right: 1.6rem;
      }

      @include hover {
        opacity: 0.6;
      }

      svg {
        @include box(100%);
        color: var(--primary-color);
      }
    }
  }
}
</style>
