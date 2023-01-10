<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="housing-disputes.jpg"
        title="Защита по жилищным спорам"
      />
    </div>

    <div class="app-section">
      <TextBlock>
        <p>В настоящее время практически у каждого гражданина возникают вопросы с жилым помещением.</p>
        <p>Своевременное обращение к адвокату, поможет не только избежать и минимизировать последствия спорных ситуаций, но и защитить и восстановить нарушенное право в установленном законом порядке.</p>
      </TextBlock>
    </div>

    <div class="app-section">
      <ServicesList
        title=" Мария Владимировна может оказать Вам следующую юридическую помощь:"
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
import TextBlock from "~/components/TextBlock";

export default {
  components: {
    PageHead,
    QuestionForm,
    ServicesList,
    TextBlock,
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
