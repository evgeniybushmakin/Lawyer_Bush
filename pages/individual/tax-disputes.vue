<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="page-head-1.jpg"
        title="Налоговые споры"
      />
    </div>

    <div class="app-section">
      <ServicesList
        title="Предоставляемые услуги"
        :services="services"
      />
    </div>

    <div class="app-section">
      <QuestionForm />
    </div>
  </main>
</template>

<script>
import PageHead from "~/components/PageHead";
import QuestionForm from "~/components/QuestionForm";
import ServicesList from "~/components/ServicesList";

export default {
  components: {
    PageHead,
    QuestionForm,
    ServicesList,
  },
  data() {
    return {
      services: [
        'Консультирование по налоговым спорам;',
        'Досудебное урегулирование налоговых споров;',
        'Обжалование решений налоговых органов;',
        'Взыскание из бюджета излишне уплаченных платежей;',
        'Оказание защиты в ходе производства выемки;',
        'Оказание защиты в ходе производства допросов;',
        'И иная защита.',
      ],
    }
  }
}
</script>
