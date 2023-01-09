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
        <p class="contacts__text-item"><span>Адрес офиса:</span> Москва, ул. Таганская, д. 15, стр. 2, офис 17</p>

        <p class="contacts__text-item"><span>Как добраться своим ходом:</span> Метро Марксистская (выход из метро один), из
          стеклянных дверей налево, держитесь левее от ТЦ «Таганка», через 300 метров необходимо совершить пешеходный
          переход.</p>

        <p class="contacts__text-item">Вход в офисное здание прямо с улицы Таганская, по ступенькам, серебристая
          железная дверь, над большими световыми буквами «АДВОКАТ ДРАГОМИР А.Р.». Для прохода в офис необходимо нажать
          кнопку вызова «17».</p>

        <p class="contacts__text-item"><span>Режим работы:</span> круглосуточно</p>

        <p class="contacts__text-item"><span>Телефон:</span> <a href="tel:+1234567890">+7 (965) 195-58-58</a></p>

        <p class="contacts__text-item"><span>Почта:</span> <a href="mailto:info@dragomir.pro">info@dragomir.pro</a></p>
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

    &:not(:last-of-type) {
      margin-bottom: 1.6rem;
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
}
</style>
