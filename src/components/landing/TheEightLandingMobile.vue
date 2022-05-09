<template>
  <!-- eslint-disable vue/no-bare-strings-in-template -->
  <v-container class="align-center fill-height justify-center text-center">
    <div>
      <h1
        v-scrollanimation
        class="font-weight-medium"
        style="font-size: 2rem; color: white;"
      >
        {{ $t("LandingPage.section7a") }}
      </h1>

      <h1
        v-scrollanimation
        class="font-weight-medium"
        style="font-size: 2rem; color: white;"
      >
        {{ $t("LandingPage.section7b") }}
      </h1>

      <v-btn
        v-scrollanimation
        class="my-4 rounded-lg"
        color="#75C402"
        large
        to="/contact"
      >
        <span
          v-scrollanimation
          class="font-weight-medium white--text"
        >
          {{ $t("LandingPage.section7c") }}
        </span>
      </v-btn>

      <div
        v-scrollanimation
        class="mt-4"
        style="
          background: center;
          background-repeat: no-repeat;
          background-image: url(img/new/Path10.webp);
          background-size: contain;
        "
      >
        <img
          v-scrollanimation
          class="pt-1"
          contain
          width="320px"
          height="295px"
          alt="burger"
          src="img/new/footerimg.webp"
        >
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "TheEightLandingMobile"
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
