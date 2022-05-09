<template>
  <div
    v-if="!isPhone"
    :style="`height: ${heightData * 0.95}px;`"
  >
    <v-carousel
      cycle
      :style="`height:${heightData * 0.95}px`"
      :height="heightData * 0.95"
      show-arrows-on-hove
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item
        :height="`${heightData * 0.95}px`"
        :style="`height:${heightData * 0.95}px`"
      >
        <div :style="`height: ${heightData * 0.95}px;`">
          <div
            :style="`
            height: ${heightData * 0.95}px;
            background-image: url(img/new/bg-section2.webp);
            background-size: cover;
            min-height: 750px;
            `"
          >
            <v-row

              style="height: 100%;"
              class="align-center justify-center text-center"
            >
              <v-col
                cols="7"
                style="position: absolute; top:50px; left: 100px;"
              >
                <h2
                  v-scrollanimation
                  style="font-size: 3rem"
                  class="font-weight-medium white--text"
                >
                  {{ $t("LandingPage.section5a") }}
                </h2>
                <h2
                  v-scrollanimation
                  style="font-size: 3rem"
                  class="font-weight-medium white--text"
                >
                  {{ $t("LandingPage.section5b") }}
                </h2>
                <h2
                  v-scrollanimation
                  style="font-size: 3rem"
                  class="font-weight-medium white--text"
                >
                  {{ $t("LandingPage.section5c") }}
                </h2>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-carousel-item>

      <v-carousel-item
        :height="`${heightData * 0.95}`"
        :style="`height: ${heightData * 0.95}px`"
      >
        <div :style="`height: ${heightData * 0.95}px;`">
          <div
            :style="`
            height: ${heightData * 0.95}px;
            background-image: url(img/new/bg-section2a.webp);
            background-size: cover;
            min-height: 750px;
            `"
          >
            <v-row
              style="height: 100%"
              class="align-center justify-center text-center"
            >
              <v-col
                cols="7"
                style="position: absolute; top:50px; left: 100px;"
              >
                <h2
                  style="font-size: 3rem"
                  class="font-weight-medium white--text"
                >
                  {{ $t("LandingPage.section5d") }}
                </h2>
                <h2
                  style="font-size: 3rem"
                  class="font-weight-medium white--text"
                >
                  {{ $t("LandingPage.section5e") }}
                </h2>
                <h2
                  style="font-size: 3rem"
                  class="font-weight-medium primary--text"
                >
                  {{ $t("LandingPage.section5f") }}
                </h2>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
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
  }

}
</script>

<style scoped>
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
</style>
