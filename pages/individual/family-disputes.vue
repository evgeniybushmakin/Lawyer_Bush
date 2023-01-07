<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="page-head-1.jpg"
        title="Семейные споры"
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
        'Консультирование по семейным спорам;',
        'Досудебное урегулирование семейных споров;',
        'Расторжение брака;',
        'Признание брака недействительным;',
        'Раздел общего имущества супругов;',
        'Выделение супружеской доли;',
        'Споры о месте жительства ребенка;',
        'Установление отцовства;',
        'Оспаривание отцовства;',
        'Ограничение родительских прав;',
        'Лишение родительских прав;',
        'Усыновление (удочерение) ребенка;',
        'Отмена ограничения родительских прав;',
        'Взыскание алиментов на содержание детей;',
        'Взыскание алиментов на содержание супруги/супруга;',
        'Взыскание неустойки за несвоевременную уплату алиментов;',
      ],
    }
  }
}
</script>
