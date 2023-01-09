<template>
  <main id="main">
    <div class="app-section">
      <PageHead
        img="page-head-1.jpg"
        title="Контакты"
      />
    </div>

    <div class="app-section">
      <ContactsBlock />
    </div>

    <div class="app-section">
      <QuestionForm />
    </div>
  </main>
</template>

<script>
import PageHead from "~/components/PageHead";
import QuestionForm from "~/components/QuestionForm";
import ContactsBlock from "~/components/ContactsBlock";

export default {
  components: {
    PageHead,
    QuestionForm,
    ContactsBlock,
  },
}
</script>
