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
        <p>Предпринимательская деятельность в&nbsp;Беларуси контролируется различными государственными органами, которые
          могут тем или иным образом вмешиваться в&nbsp;деятельность бизнеса.</p>
        <p>Проверки с&nbsp;истребованием документации; принятие актов, решений, распоряжений, которые затрагивают или
          нарушают права бизнеса; и&nbsp;привлечение к&nbsp;административной ответственности компаний, их&nbsp;должностных
          лиц и&nbsp;индивидуальных предпринимателей&nbsp;&mdash; это только небольшой перечень различных способов
          ограничения предпринимательской деятельности при проведении административных проверок.</p>
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
        'Подготовка исковых заявлений, ходатайств, жалоб и&nbsp;иных документов;',
        'Формирование доказательств в&nbsp;подтверждение доводов Доверителя;',
        'Оказание защиты в&nbsp;суде первой, апелляционной, кассационной, надзорной инстанций;',
        'Жалобы на&nbsp;действия государственного органа;',
        'И&nbsp;иная защита.',
      ],
    }
  }
}
</script>
