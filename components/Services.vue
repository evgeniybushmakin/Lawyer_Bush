<template>
  <div class="services">
    <div class="services__tabs">
      <div
        class="services__tab"
        @click="individualTab"
        :class="{active: firstTab}"
      >Физическим лицам</div>

      <div
        class="services__tab"
        @click="entityTab"
        :class="{active: !firstTab}"
      >Юридическим лицам</div>
    </div>

    <div v-if="firstTab" class="services__tab-content">
      <ServicesCards :cards="individual"/>
    </div>

    <div v-else class="services__tab-content">
      <ServicesCards :cards="entity"/>
    </div>
  </div>
</template>

<script>
import ServicesCards from "@/components/ServicesCards";

export default {
  name: 'Services',
  components: {
    ServicesCards
  },
  data() {
    return {
      firstTab: true,
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
          to: '/individual/criminal-proceedings',
          title: 'Уголовные дела',
          icon: 'handcuffs',
        },
        {
          to: '/individual/other-civil-cases',
          title: 'Иные гражданские дела',
          icon: 'mans-on-table',
        },
      ],
      entity: [
        {
          to: '/entity/personal-lawyer',
          title: 'Личный адвокат',
          icon: 'hands',
        },
        {
          to: '/entity/economic-affairs',
          title: 'Экономические дела',
          icon: 'graph',
        },
        {
          to: '/entity/law-enforcement-checks',
          title: 'Правоохранительные проверки',
          icon: 'police',
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
  },
  methods: {
    individualTab() {
      this.firstTab = true
    },
    entityTab() {
      this.firstTab = false
    },
  },
}
</script>

<style lang="scss" scoped>
.services {
  &__tabs {
    display: flex;
  }

  &__tab-content {
    padding-top: 4rem;

    @include --tablet {
      padding-top: 2rem;
    }
  }

  &__tab {
    padding: 0 4rem 0.8rem 4rem;
    border-bottom: 1px solid var(--text-color);
    font-weight: 600;
    opacity: 0.4;
    transition: opacity $trTime $easeDefault;

    @include hover {
      cursor: pointer;
      opacity: 0.7;
    }

    &.active {
      opacity: 1;
      pointer-events: none;
      border-bottom: 2px solid var(--text-color);
    }

    @include --mobile {
      padding: 0 0.8rem 0.5rem 0.8rem;
    }
  }
}
</style>
