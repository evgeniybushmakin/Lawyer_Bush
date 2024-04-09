<template>
  <div class="popup-form">
    <div class="popup-form__content">
      <h3 class="popup-form__title">Есть вопрос?</h3>

      <p class="popup-form__text">Отправьте Ваш вопрос юристам BushLawyer.
        Они ответят Вам в ближайшее время.</p>
    </div>

    <form class="popup-form__form" @submit.prevent="formSubmit">
      <AppField
        v-model="formData.name"
        label="Как Вас зовут?"
        :error="errors.indexOf('name') !== -1"
        :details="details.name"
      />

      <AppField
        v-model="formData.email"
        label="Ваша почта"
        :error="errors.indexOf('email') !== -1"
        :details="details.email"
      />

      <AppField
        v-model="formData.question"
        label="Ваш вопрос"
        :error="errors.indexOf('question') !== -1"
        :details="details.question"
        textarea
      />

      <div class="popup-form__submit-container">
        <AppButton :preloader="sending" type="submit">
          Отправить
        </AppButton>

        <p class="popup-form__submit-text">Нажимая на&nbsp;кнопку &laquo;Отправить&raquo; вы&nbsp;соглашаетесь с&nbsp;политикой по&nbsp;обработке персональных даных</p>
      </div>
    </form>
  </div>
</template>

<script>
import AppField from "~/components/ui/AppField";
import AppButton from "~/components/ui/AppButton";
import axios from "@/plugins/axios";

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
      details: {
        name: 'Заполните это поле',
        email: 'Заполните это поле',
        question: 'Заполните это поле',
      },
      sending: false,
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
            if (value.length === 0) {
              this.errors.push(dataKey)
              this.details.email = 'Заполните это поле'
            } else if (!EMAIL_REGEXP.test(value)) {
              this.errors.push(dataKey)
              this.details.email = 'Введите корректный email'
            }
            break
          case 'question':
            value.length === 0 && this.errors.push(dataKey)
            break
        }
      }

      if (this.errors.length) return

      this.sending = true

      axios.post('/question', this.formData)
        .then(() => {
          this.$toast.success('Ваш запрос отправлен. Юристы свяжутся с Вами в ближайшее время.');
          this.resetForm()
        })
        .catch(() => {
          this.$toast.error('Что-то пошло не так. Попробуйте повторить запрос позже.');
        })
        .finally(() => {
          this.sending = false
        })
    },
    resetForm() {
      for (const dataKey in this.formData) {
        this.formData[dataKey] = ''
      }
      for (const dataKey in this.details) {
        this.details[dataKey] = 'Заполните это поле'
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
