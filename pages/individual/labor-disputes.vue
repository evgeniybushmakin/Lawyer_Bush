<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="page-head-1.jpg"
        title="Трудовые споры"
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
        'Консультирование по вопросам трудового законодательства;',
        'Досудебное урегулирование трудовых споров;',
        'Юридическое сопровождение при проведении проверки;',
        'Признание увольнение незаконным;',
        'Споры об увольнении работника в связи с сокращением штата;',
        'Взыскание задолженности по заработной плате;',
        'Признание незаконным перевода работника на другую работу;',
        'Взыскание с работника причиненного организации вреда;',
        'Оспаривание дисциплинарного взыскания;',
        'и иная защита.',
      ],
    }
  }
}
</script>
