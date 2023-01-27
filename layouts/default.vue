<!-- Default app layout -->

<template>
  <div id="app">
    <Header/>

    <Nuxt />

    <Footer/>

    <LoadingIndicator />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingIndicator from "@/components/LoadingIndicator";

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    LoadingIndicator
  }
}
</script>
