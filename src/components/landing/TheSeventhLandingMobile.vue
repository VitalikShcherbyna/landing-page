<template>
  <div
    class="py-8 text-center"
  >
    <h2
      v-scrollanimation
      class="font-weight-medium my-10"
    >
      <span
        style="border-bottom: 3px solid #8bc34a"
      >
        {{ $t("LandingPage.section6a") }}
      </span>
    </h2>

    <img
      v-for="(company, i) in companiesLanding"
      :key="i"
      v-scrollanimation
      class="ma-4"
      style="width: 120px; height: 120px; border-radius: 50%;"
      contain
      :alt="company.name"
      :src="company.logo"
    >
  </div>
</template>

<script>
export default {
  name: "TheSeventhLandingMobile",
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
