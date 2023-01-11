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
      <div class="container">
        <h3 class="app-section__title">Cертификаты</h3>
      </div>

      <Certificates />
    </div>

    <div class="app-section">
      <div class="container">
        <h3 class="app-section__title">Контакты</h3>
      </div>

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
import Certificates from "~/components/Certificates";

export default {
  name: 'IndexPage',
  components: {
    AppHead,
    MyMission,
    Statistic,
    Services,
    QuestionForm,
    ContactsBlock,
    Certificates,
  }
}
</script>
