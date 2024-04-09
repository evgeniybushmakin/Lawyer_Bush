<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="inheritance-disputes.jpg"
        title="Защита по наследственным спорам"
      />
    </div>

    <div class="app-section">
      <TextBlock>
        <p>Юридическая помощь по&nbsp;наследственным спорам актуальна в&nbsp;самое тяжелое для человека время, связанное
          с&nbsp;утрой близкого человека.</p>
        <p>Не&nbsp;осведомленность о&nbsp;действующих нормах права вкупе с&nbsp;психологической травмой могут
          существенно затянуть и&nbsp;усложнить процесс разрешения наследственных вопросов.</p>
        <p>Своевременное обращение к&nbsp;юристу, поможет не&nbsp;только избежать и&nbsp;минимизировать последствия
          спорных ситуаций, но&nbsp;и&nbsp;защитить и&nbsp;восстановить нарушенное право в&nbsp;установленном законом
          порядке.</p>
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
        'Консультирование по&nbsp;наследственным делам;',
        'Досудебное урегулирование наследственных споров;',
        'Признание завещания недействительным;',
        'Признание недостойным наследником;',
        'Включение в&nbsp;наследственную массу;',
        'Восстановление срока принятия наследства;',
        'Выделение обязательной доли наследства;',
        'Оспаривание свидетельства о&nbsp;права на&nbsp;наследство;',
        'Оспаривание действий нотариуса;',
        'Установление факта принятия наследства;',
        'Наследование выморочного имущества;',
        'И&nbsp;иная защита.',
      ],
    }
  }
}
</script>
