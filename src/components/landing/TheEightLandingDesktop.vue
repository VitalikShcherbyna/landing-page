<template>
  <!-- eslint-disable vue/no-bare-strings-in-template vue/no-template-target-blank -->
  <background-content>
    <v-col
      style="max-width: 700px;"
      cols="7"
    >
      <h1
        v-scrollanimation
        class="font-weight-medium"
        style="font-size: 4rem; color: white;"
      >
        {{ $t("LandingPage.section7a") }}
      </h1>

      <h1
        v-scrollanimation
        class="font-weight-medium"
        style="font-size: 4rem; color: white;"
      >
        {{ $t("LandingPage.section7b") }}
      </h1>

      <v-btn
        v-scrollanimation
        class="mt-8 rounded-lg"
        color="#75C402"
        large
        to="/contact"
      >
        <h3
          class="font-weight-medium white--text"
        >
          {{ $t("LandingPage.section7c") }}
        </h3>
      </v-btn>
    </v-col>

    <v-col
      cols="4"
    >
      <kinesis-rotate
        bg-img="img/new/Path10.webp"
        img="img/new/footerimg.webp"
        details="img/new/arrow.webp"
      />
    </v-col>
  </background-content>
</template>

<script>
import BackgroundContentVue from "./BackgroundContent.vue"
import KinesisRotateVue from "./KinesisRotate.vue"

export default {
  name: "TheEightLandingDesktop",
  components: {
    "background-content": BackgroundContentVue,
    "kinesis-rotate": KinesisRotateVue
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
