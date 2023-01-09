<template>
  <main id="main">
    <div class="app-section">
      <AppHead/>
    </div>

    <div class="app-section">
      <Statistic/>
    </div>

    <div class="app-section">
      <MyMission/>
    </div>

    <div class="app-section">
      <div class="container">
        <h3 class="app-section__title">Предоставляемые услуги</h3>

        <Services/>
      </div>
    </div>

    <div class="app-section">
      <QuestionForm />
    </div>

    <div class="app-section">
      <ContactsBlock />
    </div>
  </main>
</template>

<script>
import AppHead from "~/components/AppHead";
import MyMission from "@/components/MyMission";
import Statistic from "@/components/Statistic";
import Services from "@/components/Services";
import QuestionForm from "@/components/QuestionForm";
import ContactsBlock from "~/components/ContactsBlock";

export default {
  name: 'IndexPage',
  components: {
    AppHead,
    MyMission,
    Statistic,
    Services,
    QuestionForm,
    ContactsBlock,
  }
}
</script>
