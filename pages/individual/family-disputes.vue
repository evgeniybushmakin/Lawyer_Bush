<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="family-disputes.jpg"
        title="Защита по семейным спорам"
      />
    </div>

    <div class="app-section">
      <TextBlock>
        <p>Каждый семейный спор уникален. В&nbsp;первую очередь, необходимо попытаться урегулировать конфликт в&nbsp;досудебном
          порядке, а&nbsp;если найти вариант мирного решения вопроса не&nbsp;получится, то&nbsp;только потом осуществить
          подготовку процессуальных документов для обращения в&nbsp;суд.</p>
        <p>Отмечу, что семейные споры относят к&nbsp;категории судебных дел высокой сложности, поскольку неразрывно
          связаны с&nbsp;тяжелыми моральными испытаниями как взрослых людей, так и&nbsp;их&nbsp;детей.</p>
        <p>В&nbsp;семейных спорах, правильный выбор юриста, на&nbsp;80% определяет исход дела.</p>
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
        'Консультирование по&nbsp;семейным спорам;',
        'Досудебное урегулирование семейных споров;',
        'Расторжение брака;',
        'Признание брака недействительным;',
        'Раздел общего имущества супругов;',
        'Выделение супружеской доли;',
        'Споры о&nbsp;месте жительства ребенка;',
        'Установление отцовства;',
        'Оспаривание отцовства;',
        'Ограничение родительских прав;',
        'Лишение родительских прав;',
        'Усыновление (удочерение) ребенка;',
        'Отмена ограничения родительских прав;',
        'Взыскание алиментов на&nbsp;содержание детей;',
        'Взыскание алиментов на&nbsp;содержание супруги/супруга;',
        'Взыскание неустойки за&nbsp;несвоевременную уплату алиментов;',
      ],
    }
  }
}
</script>
