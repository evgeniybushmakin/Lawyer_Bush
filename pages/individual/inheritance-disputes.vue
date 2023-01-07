<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="page-head-1.jpg"
        title="Наследственные споры"
      />
    </div>

    <div class="app-section">
      <ServicesList
        title="Предоставляемые услуги"
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

export default {
  components: {
    PageHead,
    QuestionForm,
    ServicesList,
  },
  data() {
    return {
      services: [
        'Консультирование по наследственным делам;',
        'Досудебное урегулирование наследственных споров;',
        'Признание завещания недействительным;',
        'Признание недостойным наследником;',
        'Включение в наследственную массу;',
        'Восстановление срока принятия наследства;',
        'Выделение обязательной доли наследства;',
        'Оспаривание свидетельства о права на наследство;',
        'Оспаривание действий нотариуса;',
        'Установление факта принятия наследства;',
        'Наследование выморочного имущества;',
        'и иная защита.',
      ],
    }
  }
}
</script>
