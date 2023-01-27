<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="arbitration-cases.jpg"
        title="Защита по арбитражным делам"
      />
    </div>

    <div class="app-section">
      <TextBlock>
        <p>Деятельность арбитражных судов заключается в&nbsp;разрешении экономических споров и&nbsp;рассмотрении дел, в&nbsp;которых
          участвуют юридические лица и&nbsp;индивидуальные предприниматели.</p>
        <p>В&nbsp;арбитражных инстанциях судебный процесс является достаточно формальной процедурой, так как решающую
          роль здесь играет предоставленная доказательная база.</p>
        <p>Юрист, в&nbsp;первую очередь, должен позаботиться о&nbsp;поиске документации и&nbsp;других доказательств,
          которые смогут гарантировать успешный результат.</p>
        <p>Конечно, результат того или иного экономического спора зависит не&nbsp;только от&nbsp;документации, но&nbsp;и&nbsp;от&nbsp;опыта
          и&nbsp;квалификации юриста, которые помогут построить рациональную стратегию использования определенных
          аргументов.</p>
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
        'Консультирование по&nbsp;арбитражным делам;',
        'Досудебное урегулирование арбитражных споров;',
        'Взыскание дебиторской задолженности;',
        'Возмещение убытков;',
        'Споры по&nbsp;договорам (подряда, перевозки, аренды, субаренды, купли-продажи, лизинга, комиссии, страхования, займа, кредитным договорам и&nbsp;др.);',
        'Оспаривание правовых актов;',
        'Корпоративные споры;',
        'Исполнительное производство;',
        'И&nbsp;иная защита.',
      ],
    }
  }
}
</script>
