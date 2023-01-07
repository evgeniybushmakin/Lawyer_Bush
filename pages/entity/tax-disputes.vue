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
        'Консультирование по налоговым делам;',
        'Досудебное урегулирование налоговых споров;',
        'Сопровождение камеральных налоговых проверок;',
        'Сопровождение выездных налоговых проверок;',
        'Защита в ходе проведение осмотра и выемок налоговыми органами;',
        'Защита в ходе допросов руководителя компании и их сотрудников (на основании ст. 31, 90 НК РФ);',
        'Подготовка возражений на акты налоговых проверок;',
        'Подготовка жалоб, заявлений, исковых заявлений, отзывов на иск и иных документов;',
        'Представление интересов компании в Арбитражном суде;',
        'Проведение разъяснительной работы непосредственно в Вашем офисе (обучающий семинар «по правам и обязанностям руководителя и сотрудников компании при проверке налоговыми органами»);',
        'и иная защита.',
      ],
    }
  }
}
</script>
