<template>
  <div class="popup-form">
    <div class="popup-form__content">
      <h3 class="popup-form__title">Есть вопрос?</h3>

      <p class="popup-form__text">Отправьте Ваш вопрос юристу Марие Владимировне.
        Она ответит Вам в ближайшее время.</p>
    </div>

    <form class="popup-form__form" @submit.prevent="formSubmit">
      <AppField
        v-model="formData.name"
        label="Как Вас зовут?"
        :error="errors.indexOf('name') !== -1"
        details="Заполните это поле"
      />

      <AppField
        v-model="formData.email"
        label="Ваша почта"
        :error="errors.indexOf('email') !== -1"
        details="Заполните это поле"
      />

      <AppField
        v-model="formData.question"
        label="Ваш вопрос"
        :error="errors.indexOf('question') !== -1"
        details="Заполните это поле"
        textarea
      />

      <div class="popup-form__submit-container">
        <AppButton type="submit" @click="formSubmit">
          Отправить
        </AppButton>

        <p class="popup-form__submit-text">Нажимая на&nbsp;кнопку &laquo;Отправить&raquo; вы&nbsp;соглашаетесь с&nbsp;
          <nuxt-link to="/privacy-policy">политикой по&nbsp;обработке персональных даных</nuxt-link></p>
      </div>
    </form>
  </div>
</template>

<script>
import AppField from "~/components/ui/AppField";
import AppButton from "~/components/ui/AppButton";

export default {
  name: 'FormInPopup',
  components: {
    AppField,
    AppButton,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        question: '',
      },
      errors: [],
    }
  },
  methods: {
    formSubmit() {
      this.errors = []
      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

      for (const dataKey in this.formData) {
        const value = this.formData[dataKey]

        switch (dataKey) {
          case 'name':
            value.length === 0 && this.errors.push(dataKey)
            break
          case 'email':
            !EMAIL_REGEXP.test(value) && this.errors.push(dataKey)
            break
          case 'question':
            value.length === 0 && this.errors.push(dataKey)
            break
        }
      }

      if (this.errors.length) return

      this.errors = []
      this.resetForm()
    },
    resetForm() {
      for (const dataKey in this.formData) {
        this.formData[dataKey] = ''
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.popup-form {
  &__title {
    margin-bottom: 2.4rem;

    @include --mobile {
      margin-bottom: 1.2rem;
    }
  }

  &__form {
    margin-top: 4rem;

    @include --mobile {
      margin-top: 2.4rem;
    }
  }

  &__submit-container {
    margin-top: 2.4rem;
    display: flex;

    @include --mobile {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 2.4rem;
    }
  }

  .app-button {
    @include --mobile {
      width: 100%;
    }
  }

  &__submit-text {
    margin-left: 4rem;
    max-width: 40rem;

    @include --mobile {
      margin-left: 0;
      margin-top: 1.2rem;
      max-width: none;
    }

    a {
      text-decoration: underline;
      text-decoration-skip-ink: none;
      text-underline-offset: 2px;
      transition: opacity $trTime $easeDefault;

      @include hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
