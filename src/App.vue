<template>
  <v-app>
    <router-view />

    <TheCookies />

    <TheAppSnackbar />
  </v-app>
</template>

<script>
import TheAppSnackbar from "./components/app/TheAppSnackbar"
import TheCookies from "./components/app/TheCookies"

export default {
  name: "App",
  components: {
    TheAppSnackbar,
    TheCookies
  },
}
</script>

<style>
  .v-application {
    font-family: "Poppins", sans-serif !important;
  }
</style>
