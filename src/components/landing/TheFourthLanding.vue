<template>
  <div
    v-scrollanimation
    :height="heightData * 0.8"
  >
    <!-- eslint-disable vue/no-bare-strings-in-template -->
    <v-row
      v-if="isPhone"
      style="margin: 0 auto; height: 100%"
      class="align-center justify-center pb-8 pt-14"
    >
      <v-col>
        <p style="font-size: 1.5rem">
          {{ $t("LandingPage.section4a") }}
        </p>
        <h2
          class="font-weight-medium"
          style="font-size: 2rem"
        >
          {{ $t("LandingPage.section4b") }}
        </h2>
        <h2
          class="font-weight-medium"
          style="font-size: 2rem"
        >
          {{ $t("LandingPage.section4c") }}
        </h2>

        <v-row
          :style="`max-width: 1920px; margin: 0 auto; height: ${heightData * 0.6}px`"
          class="justify-center"
        >
          <img
            v-prlx.mobile="{
              'custom': true,
              'limit': {'min': 0,
                        'max': 100}
            }"
            :height="heightData * 0.4"

            :style="`position: absolute;
                  -webkit-transform: translateY(calc(var(--parallax-value) * ${heightData / 500}px + 50px ));
                  -webkit-transition: transform 0.1s ease-out 0s;
                `"

            contain
            alt="phone"
            src="img/new/phone6.webp"
          >

          <img
            v-prlx.mobile="{
              'custom': true,
              'limit': {'min': 0,
                        'max': 120}
            }"
            height="60px"
            :style="`position: absolute;
                  -webkit-transform: translateY(calc(var(--parallax-value) * ${heightData / 350}px )) translateX(${heightData / 7}px);
                  -webkit-transition: transform 0.1s ease-out 0s;
                `"
            contain
            alt="message icon"
            src="img/new/11.webp"
          >

          <img
            v-prlx.mobile="{
              'custom': true,
              'limit': {'min': 0,
                        'max': 120}
            }"
            :style="`position: absolute;
               -webkit-transform: translateY(calc(var(--parallax-value) * ${heightData / 380}px + 190px )) translateX(-${heightData / 7}px);
                  -webkit-transition: transform 0.1s ease-out 0s;
                `"
            height="70px"
            contain
            alt="message icon"
            src="img/new/12.webp"
          >
          <img
            v-prlx.mobile="{
              'custom': true,
              'limit': {'min': 0,
                        'max': 100}
            }"
            :style="`position: absolute;
                -webkit-transform: translateY(calc(var(--parallax-value) * ${heightData / 400}px + 240px )) translateX(${heightData / 7}px);
                  -webkit-transition: transform 0.1s ease-out 0s;
                `"
            height="80px"
            contain
            alt="message icon"
            src="img/new/13.webp"
          >
          <img
            v-prlx.mobile="{
              'custom': true,
              'limit': {'min': 0,
                        'max': 120}
            }"
            :style="`position: absolute;
                  -webkit-transform: translateY(calc(var(--parallax-value) * ${heightData / 420}px + 130px ));
                  -webkit-transition: transform 0.1s ease-out 0s;
                `"
            height="100px"
            contain
            alt="powiadomienie"
            src="img/new/14.webp"
          >
        </v-row>
      </v-col>
    </v-row>

    <v-row
      v-else
      :style="`max-width: 2220px; margin: 0 auto; height: ${heightData * 0.7}px`"
      class="align-center justify-center"
    >
      <v-col
        v-scrollanimation
        v-prlx="{
          'preserveInitialPosition': false,
          'limit': {'min': 10,
                    'max': 100}
        }"
        cols="4"
      >
        <v-row
          v-scrollanimation
          class="justify-end"
          :style="`
              max-width: 1000px;
              height: ${heightData * 0.6}px;
              max-height: 1300px;
              right: 0px;
            `"
        >
          <KinesisContainer
            class="justify-end"
            :style="`
              width: 100%;
              height: ${heightData * 0.5}px;
            `"
          >
            <KinesisElement
              :strength="6"
              type="depth"
              :style="`
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    left: 0px;
                    right: 0px;
                    position: absolute;
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(heightData / 280)}px ));
                  `"
            >
              <img
                v-prlx="{
                  'preserveInitialPosition': false,
                  'limit': {'min': -100,
                            'max': 100}
                }"

                :style="`
                      position: absolute;
                      height: ${heightData / 2.5}px;
                      top: 0px;
                      right: ${heightData / 10}px;

                    `"
                contain
                alt="phone"
                src="img/new/phone6.webp"
              >
            </KinesisElement>

            <KinesisElement
              :strength="6"
              type="depth"
              :style="`
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: ${heightData / 20}px;
                    position: absolute;
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(heightData / 280)}px ));
                  `"
            >
              <img
                v-prlx="{
                  'preserveInitialPosition': false,
                  'limit': {'min': -100,
                            'max': 100}
                }"

                :style="`
                      position: absolute;
                      height: ${heightData / 15}px;
                      top: 0px;
                      right: 0px;
                    `"
                contain
                alt="message icon"
                src="img/new/11.webp"
              >
            </KinesisElement>

            <KinesisElement
              :strength="8"
              type="depth"
              :style="`
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: ${heightData / 10}px;
                    position: absolute;
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(heightData / 270)}px ));
                  `"
            >
              <img
                v-prlx="{
                  'preserveInitialPosition': false,
                  'limit': {'min': -100,
                            'max': 100}
                }"

                :style="`
                      position: absolute;
                      height: ${heightData / 16}px;
                      top: ${heightData / 3}px;
                      right: ${heightData / 4}px;

                    `"
                contain
                alt="message icon"
                src="img/new/12.webp"
              >

              <KinesisElement
                :strength="8"
                type="depth"
                :style="`
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    position: absolute;
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(heightData / 270)}px ));
                  `"
              >
                <img
                  v-prlx="{
                    'preserveInitialPosition': false,
                    'limit': {'min': -100,
                              'max': 100}
                  }"

                  :style="`
                      position: absolute;
                      height: ${heightData / 12}px;
                      bottom: ${heightData / 14}px;
                      right: -${heightData / 25}px;
                    `"
                  contain
                  alt="message icon"
                  src="img/new/13.webp"
                >

                <KinesisElement
                  :strength="14"
                  type="depth"
                  :style="`
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    position: absolute;
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(heightData / 270)}px ));
                  `"
                >
                  <img
                    v-prlx="{
                      'preserveInitialPosition': false,
                      'limit': {'min': -100,
                                'max': 100}
                    }"

                    :style="`
                      position: absolute;
                      height: ${heightData / 9}px;
                      top: ${heightData / 8}px;
                      right: -${heightData / 30}px;
                    `"
                    contain
                    alt="powiadomienie"
                    src="img/new/14.webp"
                  >
                </KinesisElement>
              </kinesiselement>
            </kinesiselement>
          </KinesisContainer>
        </v-row>
      </v-col>
      <v-col
        style="max-width: 700px; align-self: center;"
        cols="8"
        class="grow transition"
      >
        <p
          v-scrollanimation
          style="font-size: 1.5rem"
        >
          {{ $t("LandingPage.section4a") }}
        </p>
        <h2
          v-scrollanimation
          class="font-weight-medium"
          style="font-size: 2rem"
        >
          {{ $t("LandingPage.section4b") }}
        </h2>
        <h2
          v-scrollanimation
          class="font-weight-medium"
          style="font-size: 2rem"
        >
          {{ $t("LandingPage.section4c") }}
        </h2>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {KinesisContainer, KinesisElement} from "vue-kinesis"


export default {
  name: "TheSecondLanding",
  components: {
    KinesisContainer,
    KinesisElement
  },

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

    .grow:hover {
  transform: scale(1.1);
}
.transition {
  transition: all 0.3s ease-in-out;
}
</style>
