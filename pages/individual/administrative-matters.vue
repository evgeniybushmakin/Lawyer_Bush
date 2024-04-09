<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="administrative-matters.jpg"
        title="Защита по административным делам"
      />
    </div>

    <div class="app-section">
      <TextBlock>
        <p>Каждый человек хоть в&nbsp;раз жизни совершал административное правонарушение. Никто не&nbsp;застрахован от&nbsp;того,
          что в&nbsp;любой момент можно стать свидетелем или потерпевшим административного правонарушения.</p>
        <p>Адекватно и&nbsp;правильно оценить сложившуюся ситуацию поможет юрист по&nbsp;административным делам, который
          познакомится с&nbsp;Вашими документами, проанализирует ситуацию, доказательства и&nbsp;выработает
          соответствующую правовую позицию по&nbsp;делу.</p>
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
        'Консультирование по&nbsp;административным делам;',
        'Подготовка письменных возражений;',
        'Оказание защиты в&nbsp;суде первой, апелляционной, кассационной, надзорной инстанций;',
        'Подготовка ходатайств, жалоб;',
        'Жалобы на&nbsp;действия государственного органа;',
        'И&nbsp;защита по&nbsp;другим конфликтным ситуациям.',
      ],
    }
  }
}
</script>
