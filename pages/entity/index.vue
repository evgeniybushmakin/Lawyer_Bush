<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="legal-entities.jpg"
        title="Защита юридических лиц"
      />
    </div>

    <div class="app-section">
      <div class="container">
        <ServicesCards :cards="entity"/>
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
      entity: [
        {
          to: '/entity/personal-lawyer',
          title: 'Личный юрист',
          icon: 'hands',
        },
        {
          to: '/entity/arbitration-cases',
          title: 'Арбитражные дела',
          icon: 'scales',
        },
        {
          to: '/entity/tax-disputes',
          title: 'Налоговые споры',
          icon: 'coins',
        },
        {
          to: '/entity/administrative-matters',
          title: 'Административные дела',
          icon: 'docs',
        },
      ]
    }
  }
}
</script>
