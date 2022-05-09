<template>
  <!-- eslint-disable vuetify/grid-unknown-attributes -->
  <div>
    <div>
      <v-parallax
        v-if="isPhone"
        class="align-center justify-center text-center"
        src="img/new/bg.webp"
      >
        <v-row
          align="center"
          justify="center"
          class="align-center justify-center text-center"
        >
          <v-col
            class="align-center justify-center text-center"
            :height="heightData * 0.3"
          >
            <h2
              v-scrollanimation
              style="font-size: 2rem"
              class="font-weight-medium pb-8 white--text"
            >
              {{ $t("LandingPage.section3a") }}
            </h2>

            <v-btn
              v-scrollanimation
              large
              class="grow rounded-lg transition"
              color="#75C402"
              href="https://kanapkamanapp.page.link/LandingPageMobile"
            >
              <span
                class="font-weight-medium white--text"
              >
                {{ $t("LandingPage.section3b") }}
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>
      <v-parallax
        v-else
        class="align-center justify-center mb-12 text-center"
        :height="heightData * 0.3"
        src="img/new/bg.webp"
      >
        <v-row
          align="center"
          justify="center"
          class="align-center justify-center text-center"
        >
          <v-col
            class="align-center eslint-disable-next-line grid-unknown-attributes justify-center text-center vuetify"
            :height="heightData * 0.3"
          >
            <h2
              v-scrollanimation
              style="font-size: 2rem"
              class="font-weight-medium pb-8 white--text"
            >
              {{ $t("LandingPage.section3a") }}
            </h2>

            <v-btn
              v-scrollanimation
              x-large
              color="#75C402"
              class="rounded-lg"
              @click="toTop"
            >
              <h4
                class="font-weight-medium white--text"
              >
                {{ $t("LandingPage.section3b") }}
              </h4>
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSecondLanding",

  props: {
    heightData: {
      type: Number,
      required: true
    },

    isPhone: Boolean
  },

  setup () {
    return {
      toTop: () => window.scrollTo(
        0,
        0
      )
    }
  }

}
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}

a {
  text-decoration: none;
}

  .before-enter {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s cubic-bezier(.41,.01,0,0);
  }

  .enter {
    opacity: 1;
    transform: translateX(0px);
  }

  .grow:hover {
  transform: scale(1.1);
}
.transition {
  transition: all 0.3s ease-in-out;
}
</style>
