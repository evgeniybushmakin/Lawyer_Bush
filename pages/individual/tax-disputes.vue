<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="tax-disputes.jpg"
        title="Защита по налоговым спорам"
      />
    </div>

    <div class="app-section">
      <TextBlock>
        <p>Налоги являются обязательными платежами, взимаемыми государством с&nbsp;физических и&nbsp;юридических лиц.
          Большинство норм, содержащихся в&nbsp;Налоговом кодексе&nbsp;РБ, являются императивными.</p>
        <p>Поэтому налоговые споры предполагают собой взаимодействие с&nbsp;органами государственной власти, в&nbsp;частности
          Налоговой Службы и&nbsp;ее&nbsp;структурными подразделениями, что представляет собой еще большую
          сложность в&nbsp;виду отношений подчиненности между спорящими сторонами.</p>
      </TextBlock>
    </div>

    <div class="app-section">
      <ServicesList
        title=" BushLawyer может оказать Вам следующую юридическую помощь:"
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
        'Консультирование по&nbsp;налоговым спорам;',
        'Досудебное урегулирование налоговых споров;',
        'Обжалование решений налоговых органов;',
        'Взыскание из&nbsp;бюджета излишне уплаченных платежей;',
        'Оказание защиты в&nbsp;ходе производства выемки;',
        'Оказание защиты в&nbsp;ходе производства допросов;',
        'И&nbsp;иная защита.',
      ],
    }
  }
}
</script>
