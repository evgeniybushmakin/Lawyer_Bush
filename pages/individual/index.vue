<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="individual.jpg"
        title="Защита физических лиц"
      />
    </div>

    <div class="app-section">
      <div class="container">
        <ServicesCards :cards="individual"/>
      </div>
    </div>

    <div class="app-section">
      <QuestionForm />
    </div>
  </main>
</template>

<script>
import PageHead from "~/components/PageHead";
import ServicesCards from "@/components/ServicesCards";
import QuestionForm from "~/components/QuestionForm";

export default {
  components: {
    PageHead,
    ServicesCards,
    QuestionForm,
  },
  data() {
    return {
      individual: [
        {
          to: '/individual/personal-lawyer',
          title: 'Личный адвокат',
          icon: 'hands',
        },
        {
          to: '/individual/family-disputes',
          title: 'Семейные споры',
          icon: 'parents',
        },
        {
          to: '/individual/inheritance-disputes',
          title: 'Наследственные споры',
          icon: 'family',
        },
        {
          to: '/individual/housing-disputes',
          title: 'Жилищные споры',
          icon: 'house',
        },
        {
          to: '/individual/tax-disputes',
          title: 'Налоговые споры',
          icon: 'coins',
        },
        {
          to: '/individual/labor-disputes',
          title: 'Трудовые споры',
          icon: 'mans',
        },
        {
          to: '/individual/administrative-matters',
          title: 'Административные дела',
          icon: 'docs',
        },
        {
          to: '/individual/other-civil-cases',
          title: 'Иные гражданские дела',
          icon: 'mans-on-table',
        },
      ],
    }
  }
}
</script>
