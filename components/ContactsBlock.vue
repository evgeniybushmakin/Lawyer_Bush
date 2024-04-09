<template>
  <div class="container">
    <div class="contacts">
      <div class="contacts__map">
        <div style="position:relative;overflow:hidden;"><a
          href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a><a
          href="https://yandex.ru/maps/2/saint-petersburg/?indoorLevel=1&ll=30.381555%2C59.870568&mode=routes&rtext=59.870208%2C30.379298~59.870890%2C30.383332&rtt=pd&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgkxMDAxMTg4MTASYNCg0L7RgdGB0LjRjywg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDUg0LvQuNC90LjRjywg0LzQtdGC0YDQviDQnNC10LbQtNGD0L3QsNGA0L7QtNC90LDRjyIKDcwI80EVF3tvQg%2C%2C~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxOTA4ODg1MDgxEl7QoNC-0YHRgdC40Y8sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDRg9C70LjRhtCwINCR0LXQu9GLINCa0YPQvdCwLCA1LCDQv9C-0LTRitC10LfQtCAyIgoNZRDzQRXqe29C&utm_medium=mapframe&utm_source=maps&z=16.92"
          style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты</a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=30.381555%2C59.870568&mode=routes&rtext=59.870208%2C30.379298~59.870890%2C30.383332&rtt=pd&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgkxMDAxMTg4MTASYNCg0L7RgdGB0LjRjywg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDUg0LvQuNC90LjRjywg0LzQtdGC0YDQviDQnNC10LbQtNGD0L3QsNGA0L7QtNC90LDRjyIKDcwI80EVF3tvQg%2C%2C~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxOTA4ODg1MDgxEl7QoNC-0YHRgdC40Y8sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDRg9C70LjRhtCwINCR0LXQu9GLINCa0YPQvdCwLCA1LCDQv9C-0LTRitC10LfQtCAyIgoNZRDzQRXqe29C&z=16.92"
            width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
        </div>
      </div>

      <div class="contacts__text">
        <address class="contacts__text-item"><span>Адрес офиса:</span> г. Минск, ул. Колесникова, дом 18, пом. 1А
        </address>

        <address class="contacts__text-item"><span>Как добраться своим ходом:</span> Метро Каменная горка (выход из метро
          на сторону МТБанка), из стеклянных дверей напрва, через 100 метров необходимо сесть на 54 автобус.
        </address>

        <address class="contacts__text-item">Вход в жилой дом со двора.</address>

        <address class="contacts__text-item"><span>Телефон:</span> <a href="tel:+375(44)562-72-86">+375(44)562-72-86</a>
        </address>

        <address class="contacts__text-item"><span>Почта:</span> <a href="mailto:E-bushmakin@bk.ru">E-bushmakin@bk.ru</a>
        </address>

        <div class="contacts__social">
          <a target="_blank" href="tg://resolve?domain=BushmakinEvgeniy_Kommunarka">
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
