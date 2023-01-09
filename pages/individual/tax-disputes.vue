<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="page-head-1.jpg"
        title="Защита по налоговым спорам"
      />
    </div>

    <div class="app-section">
      <TextBlock>
        <p>Налоги являются обязательными платежами, взимаемыми государством с физических и юридических лиц. Большинство норм, содержащихся в Налоговом кодексе РФ, являются императивными.</p>
        <p>Поэтому налоговые споры предполагают собой взаимодействие с органами государственной власти, в частности Федеральной Налоговой Службы и ее структурными подразделениями, что представляет собой еще большую сложность в виду отношений подчиненности между спорящими сторонами.</p>
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
