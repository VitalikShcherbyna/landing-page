<template>
  <div>
    <!-- eslint-disable vue/no-bare-strings-in-template vue/no-template-target-blank -->
    <v-container
      v-if="isPhone"
      class="align-center justify-center my-16"
    >
      <h1
        v-scrollanimation
      >
        {{ $t("LandingPage.section1a") }}
      </h1>

      <br>

      <h2
        v-scrollanimation
      >
        {{ $t("LandingPage.section1b") }}
      </h2>

      <br>

      <div
        v-scrollanimation
        v-prlx.mobile
        alt="image background"
        style="
          background: center;
          background-repeat: no-repeat;
          background-image: url(img/new/bgsec-2.webp);
          background-size: contain;
        "
        class="mb-12 mt-4 text-center"
      >
        <img
          v-scrollanimation
          class="pt-1"
          contain
          alt="image burger"
          width="310px"
          height="286px"
          src="img/new/person1.webp"
        >
      </div>
    </v-container>

    <div
      v-else
      alt="background"
      :height="heightData * 0.7"
      class="justify-center pb-8 text-center"
      :style="getBackground"
    >
      <v-col
        class="align-center justify-center text-center"
        :style="`height: ${heightData * 0.7}px`"
      >
        <v-row
          class="align-center justify-center text-center"
          :style="`max-width: 1920px; margin: 0 auto; height: ${
            heightData * 0.8
          }px`"
        >
          <v-col
            lg="5"
            md="6"
            :style="`height: ${
              heightData * 0.6
            }px; max-height: 1300px; position: relative; right: 0px;`"
          >
            <v-row
              v-scrollanimation
              :style="`max-width: 650px; height: ${heightData * 0.7}px`"
              class="justify-end"
            >
              <img
                v-prlx="{
                  'custom': true,
                  'limit': {'min': 0,
                            'max': 100}
                }"
                contain
                :style="`
                  position: absolute;
                  right: 0px;
                  height: 60%;
                  max-height: 1300px;
                  transform: translateY(calc(var(--parallax-value) * ${
                  heightData / 800
                }px ));
                  transition: transform 0.1s ease-out 0s;
                `"
                alt="background"
                src="img/new/bgsec-2.webp"
              >
              <img
                v-prlx="{
                  'custom': true,
                  'limit': {'min': 0,
                            'max': 110}
                }"
                contain
                alt="person"
                :style="`
                  position: absolute;
                  right: 0px;
                  height: 50%;
                  transform: translateY(calc(var(--parallax-value) * ${
                  heightData / 700
                }px )) translateX(-50px);
                  transition: transform 0.1s ease-out 0s;
                `"
                src="img/new/person1.webp"
              >
            </v-row>
          </v-col>

          <v-col
            class="grow pb-16 transition"
            style="max-width: 700px; align-self: center"
            lg="7"
            md="6"
          >
            <h2
              v-scrollanimation
              class="font-weight-medium text-left"
              style="font-size: 2rem"
            >
              {{ $t("LandingPage.section1a") }}
            </h2>

            <p
              v-scrollanimation
              class="text-left"
              style="font-size: 1.5rem"
            >
              {{ $t("LandingPage.section1b") }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </div>
    <div
      v-if="!isPhone"
      :id="isDark ? 'rounded1' : 'rounded2'"
    />
  </div>
</template>

<script>
import {computed} from "@vue/composition-api"

export default {
  name: "TheFirstLanding",

  props: {
    heightData: {
      type: Number,
      required: true
    },

    isPhone: Boolean
  },

  setup (props, context) {
    const getBackground = computed(() => (context.root.$vuetify.theme.isDark
      ? "background-color: #1E1E1E;"
      : "background-color: #EFF3FF;"))
    const isDark = computed(() => (context.root.$vuetify.theme.isDark))

    return {
      getBackground,
      isDark
    }
  }
}
</script>

<style scoped>
.before-enter {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 1s cubic-bezier(0.41, 0.01, 0, 0);
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

#rounded1 {
  position: relative;
  top: 50%;
  left: 50%;
  width: 120%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  display: block;
  border-top: 60px #121212 solid;
  border-bottom: 80px transparent solid;
  top: 20px;
  overflow: hidden;
  height:60px;
}
#rounded2 {
  position: relative;
  top: 50%;
  left: 50%;
  width: 120%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  display: block;
  border-top: 60px white solid;
  border-bottom: 80px transparent solid;
  top: 20px;
  overflow: hidden;
  height:60px;
}
</style>
