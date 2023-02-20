<template>
  <div class="container">
    <div class="contacts">
      <div class="contacts__map">
        <div style="position:relative;overflow:hidden;"><a
          href="https://yandex.uz/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a><a
          href="https://yandex.uz/maps/2/saint-petersburg/?ll=30.381521%2C59.870860&mode=routes&rtext=59.870206%2C30.379295~59.871174%2C30.383084&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9898637~&utm_medium=mapframe&utm_source=maps&z=16"
          style="color:#eee;font-size:12px;position:absolute;top:14px;">улица Белы Куна, 5: как доехать на автомобиле,
          общественным транспортом или пешком – Яндекс Карты</a>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=30.381521%2C59.870860&mode=routes&rtext=59.870206%2C30.379295~59.871174%2C30.383084&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9898637~&z=16"
            width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
        </div>
      </div>

      <div class="contacts__text">
        <address class="contacts__text-item"><span>Адрес офиса:</span> г. Санкт-Петербург, ул. Белы Куна, дом 5, пом. 1Н</address>

        <address class="contacts__text-item"><span>Как добраться своим ходом:</span> Метро Международная (выход из метро
          один), из стеклянных дверей направо, через 100 метров необходимо совершить пешеходный переход.</address>

        <address class="contacts__text-item">Вход в жилой дом со двора.</address>

        <address class="contacts__text-item"><span>Телефон:</span> <a href="tel:+79219095503">+7 (921) 909-55-03</a></address>

        <address class="contacts__text-item"><span>Почта:</span> <a href="mailto:mariku@mail.ru">mariku@mail.ru</a></address>

        <div class="contacts__social">
          <a target="_blank" href="https://wa.me/79219095503">
            <svg-icon name="whatsapp"/>
          </a>
          <a target="_blank" href="tg://resolve?domain=lilulilovskaya">
            <svg-icon name="telegram"/>
          </a>
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
  justify-content: space-between;
  align-items: center;

  @include --tablet {
    flex-direction: column-reverse;
  }

  &__map {
    height: 51.4rem;
    width: 60%;
    flex-shrink: 0;

    @include --tablet {
      width: 100%;
      height: 40rem;
    }

    div {
      @include box(100%);
    }

    iframe {
      @include box(100%);
      border: none;
    }
  }

  &__text {
    width: 30%;

    @include --tablet {
      width: 100%;
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
