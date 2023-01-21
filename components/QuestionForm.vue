<template>
  <div class="question-form" id="question-form">
    <div class="container">
      <div class="question-form__content">
        <h3 class="question-form__title">Получите бесплатную консультацию</h3>

        <p class="question-form__text">Отправьте заявку на&nbsp;бесплатную консультацию, юрист Мария Владимировна
          свяжется с&nbsp;вами, ответит на&nbsp;все вопросы и&nbsp;поможет выработать план, для получения наилучшего
          результата с&nbsp;юридической точки зрения.</p>
      </div>

      <form class="question-form__form" @submit.prevent="formSubmit">
        <AppField
          v-model="formData.name"
          label="Как вас зовут?"
          :error="errors.indexOf('name') !== -1"
          details="Заполните это поле"
          color="contrast"
        />

        <AppField
          v-model="formData.tel"
          label="Ваш номер телефона"
          :error="errors.indexOf('tel') !== -1"
          details="Заполните это поле"
          color="contrast"
          mask="{+7} {(}000{)} 000{-}00{-}00"
        />

        <div class="question-form__submit-container">
          <AppButton type="submit" color="contrast" @click="formSubmit">
            Отправить
          </AppButton>

          <p class="question-form__submit-text">Нажимая на&nbsp;кнопку &laquo;Отправить&raquo; вы&nbsp;соглашаетесь с&nbsp;
            <nuxt-link to="/privacy-policy">политикой по&nbsp;обработке персональных даных</nuxt-link></p>
        </div>
      </form>

      <svg-icon
        ref="img"
        class="question-form__svg"
        name="scales-2"
      />
    </div>
  </div>
</template>

<script>
import AppField from "@/components/ui/AppField";
import AppButton from "~/components/ui/AppButton";
import axios from "@/plugins/axios";

export default {
  name: 'QuestionForm',
  components: {
    AppField,
    AppButton,
  },
  data() {
    return {
      formData: {
        name: '',
        tel: '',
      },
      errors: [],
    }
  },
  mounted() {
    const gsap = this.$gsap
    const { img } = this.$refs

    gsap.to(img, {
      xPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSection",
        start: "top bottom", // the default values
        end: "bottom top",
        scrub: true
      },
    });
  },
  methods: {
    formSubmit() {
      this.errors = []

      for (const dataKey in this.formData) {
        const value = this.formData[dataKey]

        switch (dataKey) {
          case 'name':
            value.length === 0 && this.errors.push(dataKey)
            break
          case 'tel':
            if (value.length < 16) {
              this.errors.push(dataKey)
            }
            break
        }
      }

      if (this.errors.length) return

      axios.post('/question', this.formData)
        .then(res => {console.log(res)})

      this.resetForm()

      this.errors = []
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
.question-form {
  padding: 10rem 0;
  color: var(--text-contrast-color);
  background-color: var(--primary-color);
  overflow: hidden;

  @include --tablet {
    padding: 8rem 0;
  }

  @include --mobile {
    padding: 6.4rem 0;
  }

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;

    @include --tablet {
      flex-direction: column;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
    max-width: 51.4rem;

    @include --tablet {
      max-width: none;
      margin-bottom: 3.8rem;
    }
  }

  &__title {
    margin-bottom: 3.8rem;

    @include --tablet {
      margin-bottom: 2.4rem;
    }

    @include --mobile {
      margin-bottom: 1.2rem;
    }
  }

  &__form {
    position: relative;
    z-index: 2;
    min-width: 62.4rem;

    @include --tablet {
      min-width: auto;
    }
  }

  &__submit-container {
    display: flex;
    align-items: flex-start;

    @include --mobile {
      flex-direction: column;
    }
  }

  &__submit-text {
    margin-left: 4rem;
    width: 40rem;

    @include --mobile {
      margin-top: 1.2rem;
      margin-left: 0;
      width: auto;
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

  &__svg {
    position: absolute;
    right: -10%;
    top: -100%;
    height: 300%;
    width: 50rem;
    color: var(--text-contrast-color);
    opacity: 0.4;

    @include --mobile {
      top: auto;
      bottom: -20%;
      right: -40%;
      height: 100%;
    }
  }

  .app-button {
    @include --mobile {
      width: 100%;
    }
  }
}
</style>
