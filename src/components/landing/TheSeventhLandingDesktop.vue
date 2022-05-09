<template>
  <div
    style="max-width: 1920px; margin: 0 auto;"
    class="py-16 text-center"
  >
    <h1
      v-scrollanimation
      class="font-weight-medium py-10"
    >
      <span
        class="pb-2"
        style="border-bottom: 3px solid #8bc34a;"
      >
        {{ $t("LandingPage.section6a") }}
      </span>
    </h1>

    <img
      v-for="(company, i) in companiesLanding"
      :key="i"
      v-scrollanimation
      style="width: 200px; height: 200px; border-radius: 50%;"
      class="ma-8"
      contain
      :alt="company.name"
      :src="company.logo"
    >
  </div>
</template>

<script>
export default {
  name: "TheSeventhLandingDesktop",
  props: {
    companiesLanding: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .before-enter {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s cubic-bezier(.41,.01,0,0);
  }

  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
</style>
