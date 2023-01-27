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
        <p>В&nbsp;настоящее время практически у&nbsp;каждого гражданина возникают вопросы с&nbsp;жилым помещением.</p>
        <p>Своевременное обращение к&nbsp;юристу, поможет не&nbsp;только избежать и&nbsp;минимизировать последствия
          спорных ситуаций, но&nbsp;и&nbsp;защитить и&nbsp;восстановить нарушенное право в&nbsp;установленном законом
          порядке.</p>
      </TextBlock>
    </div>

    <div class="app-section">
      <ServicesList
        title=" Мария Владимировна может оказать Вам следующую юридическую помощь:"
        :services="services"
      />
    </div>

    <div class="app-section">
      <QuestionForm/>
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
        'Консультирование по&nbsp;жилищным спорам;',
        'Досудебное урегулирование жилищных споров;',
        'Определение порядка пользования жилым помещением;',
        'Вселение в&nbsp;жилое помещение;',
        'Выселение из&nbsp;квартиры;',
        'Выселение бывшего супруга/супруги;',
        'Снятие с&nbsp;регистрационного учета (выписки) из&nbsp;квартиры;',
        'Затопление квартиры;',
        'Признание не&nbsp;приобретшим право пользования жилым помещением;',
        'Признание прав пользования жилым помещением;',
        'Взыскание задолженности за&nbsp;коммунальные платежи;',
        'Признании утратившим право пользования жилым помещением;',
        'И&nbsp;иная защита.',
      ],
    }
  }
}
</script>
