<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="labor-disputes.jpg"
        title="Защита по трудовым спорам"
      />
    </div>

    <div class="app-section">
      <TextBlock>
        <p>В&nbsp;настоящее время сложно найти человека, который не&nbsp;был&nbsp;бы связан трудовыми правоотношениями с&nbsp;организацией.
          Поэтому вопросы трудового законодательства интересует большинство.</p>
        <p>В&nbsp;результате разногласий между работниками и&nbsp;работодателями появляются трудовые споры. Учитывая
          особые процессуальные сроки давности, работа юриста должна быть выполнена максимально оперативно.</p>
        <p>В&nbsp;практике, часто возникают случаи, когда работник не&nbsp;может повлиять на&nbsp;ситуацию под угрозой
          увольнения. Однако, существует множество примеров, когда пострадавшим оказывается работодатель.</p>
        <p>С&nbsp;целью минимизации возможных трудовых споров, работнику и&nbsp;работнику необходимо знать не&nbsp;только
          свои права, но&nbsp;и&nbsp;обязанности.</p>
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
        'Консультирование по&nbsp;вопросам трудового законодательства;',
        'Досудебное урегулирование трудовых споров;',
        'Юридическое сопровождение при проведении проверки;',
        'Признание увольнение незаконным;',
        'Споры об&nbsp;увольнении работника в&nbsp;связи с&nbsp;сокращением штата;',
        'Взыскание задолженности по&nbsp;заработной плате;',
        'Признание незаконным перевода работника на&nbsp;другую работу;',
        'Взыскание с&nbsp;работника причиненного организации вреда;',
        'Оспаривание дисциплинарного взыскания;',
        'И&nbsp;иная защита.',
      ],
    }
  }
}
</script>
