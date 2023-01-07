<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="page-head-1.jpg"
        title="Жилищные споры"
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
        'Консультирование по жилищным спорам;',
        'Досудебное урегулирование жилищных споров;',
        'Определение порядка пользования жилым помещением;',
        'Вселение в жилое помещение;',
        'Выселение из квартиры;',
        'Выселение бывшего супруга/супруги;',
        'Снятие с регистрационного учета (выписки) из квартиры;',
        'Затопление квартиры;',
        'Признание не приобретшим право пользования жилым помещением;',
        'Признание прав пользования жилым помещением;',
        'Взыскание задолженности за коммунальные платежи;',
        'Признании утратившим право пользования жилым помещением;',
        'и иная защита.',
      ],
    }
  }
}
</script>
