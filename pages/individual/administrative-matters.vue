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
        <p>Каждый человек хоть в раз жизни совершал административное правонарушение. Никто не застрахован от того, что в любой момент можно стать свидетелем или потерпевшим административного правонарушения.</p>
        <p>Адекватно и правильно оценить сложившуюся ситуацию поможет адвокат по административным делам, который познакомится с Вашими документами, проанализирует ситуацию, доказательства и выработает соответствующую правовую позицию по делу.</p>
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
        'Консультирование по административным делам;',
        'Подготовка письменных возражений;',
        'Оказание защиты в суде первой, апелляционной, кассационной, надзорной инстанций;',
        'Подготовка ходатайств, жалоб;',
        'Жалобы на действия государственного органа;',
        'И защита по другим конфликтным ситуациям.',
      ],
    }
  }
}
</script>
