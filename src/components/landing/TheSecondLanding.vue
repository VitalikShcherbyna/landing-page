<template>
  <!-- eslint-disable vue/no-bare-strings-in-template vue/no-template-target-blank -->
  <div v-scrollanimation>
    <v-col>
      <div class="text-center">
        <h1
          v-scrollanimation
        >
          <span
            style="border-bottom: 3px solid #8bc34a"
          >
            {{ $t("LandingPage.section2title") }}
          </span>
        </h1>
      </div>

      <v-row
        v-if="isPhone"
        style="max-width: 1920px; margin: 0 auto; height: 100%"
        class="align-center justify-center pb-8"
      >
        <v-col>
          <p
            v-scrollanimation
            style="font-size: 1.5rem"
          >
            {{ $t("LandingPage.section2a") }}
          </p>
          <h2
            v-scrollanimation
            class="font-weight-medium pb-6"
            style="font-size: 2rem"
          >
            {{ $t("LandingPage.section2b") }}
          </h2>
          <p
            v-scrollanimation
            style="font-size: 1.5rem"
          >
            {{ $t("LandingPage.section2c") }}
          </p>
          <v-row
            v-scrollanimation
            :style="`max-width: 1920px; margin: 0 auto; height: ${heightData * 0.6}px`"
            class="justify-center"
          >
            <img
              v-scrollanimation
              v-prlx.mobile="{
                'custom': true,
                'limit': {'min': 0,
                          'max': 100}
              }"
              alt="menu item"
              :height="heightData * 0.10"
              :style="`position: absolute;
                  transform: translateY(calc(var(--parallax-value) * ${heightData / 350}px )) translateX(-${heightData / 7}px);
                  transition: transform 0.1s ease-out 0s;
                  -webkit-transform: translateY(calc(var(--parallax-value) * ${heightData / 350}px )) translateX(-${heightData / 7}px);
                  -webkit-transition: transform 0.1s ease-out 0s;
                `"
              contain
              src="img/new/1.webp"
            >

            <img
              v-scrollanimation
              v-prlx.mobile="{
                'custom': true,
                'limit': {'min': 0,
                          'max': 100}
              }"
              alt="menu item"
              :style="`position: absolute;
                  transform: translateY(calc(var(--parallax-value) * ${heightData / 320}px + 60px )) translateX(-${heightData / 9}px);
                  transition: transform 0.1s ease-out 0s;
                -webkit-transform: translateY(calc(var(--parallax-value) * ${heightData / 320}px + 60px )) translateX(-${heightData / 9}px);
                  -webkit-transition: transform 0.1s ease-out 0s;
                `"
              :height="heightData * 0.16"
              contain
              src="img/new/3.webp"
            >

            <img
              v-scrollanimation
              v-prlx.mobile="{
                'custom': true,
                'limit': {'min': 0,
                          'max': 90}
              }"
              :style="`position: absolute;
                  transform: translateY(calc(var(--parallax-value) * ${heightData / 290}px + 170px )) translateX(-${heightData / 13}px);
                  transition: transform 0.1s ease-out 0s;
              -webkit-transform: translateY(calc(var(--parallax-value) * ${heightData / 290}px + 170px )) translateX(-${heightData / 13}px);
                  -webkit-transition: transform 0.1s ease-out 0s;
                `"
              :height="heightData * 0.10"
              alt="menu item"
              src="img/new/2.webp"
            >
            <img
              v-scrollanimation
              v-prlx.mobile="{
                'custom': true,
                'limit': {'min': 0,
                          'max': 90}
              }"
              alt="phone"
              :height="heightData * 0.4"
              :style="`
                  transform: translateY(calc(var(--parallax-value) * ${heightData / 400}px )) translateX(${heightData / 16}px);
                  transition: transform 0.1s ease-out 0s;
                  -webkit-transform: translateY(calc(var(--parallax-value) * ${heightData / 400}px )) translateX(${heightData / 16}px);
                  -webkit-transition: transform 0.1s ease-out 0s;
                `"
              contain
              src="img/new/phone2.webp"
            >
          </v-row>
        </v-col>
      </v-row>
      <v-row
        v-else
        :style="`max-width: 1920px; margin: 0 auto; height: ${
          heightData * 0.7
        }px`"
        class="justify-center"
      >
        <v-col
          v-scrollanimation
          cols="5"
        >
          <v-row
            v-prlx="{
              'preserveInitialPosition': false,
              'limit': {'min': -100,
                        'max': 100}
            }"
            v-scrollanimation
            class="align-center"
            :style="`
              width: 100%;
              height: ${heightData * 0.8}px;
              max-height: 1300px;
              position: relative;
              right: 0;
              justify-content: right;
              `"
          >
            <KinesisContainer style="width: 100%">
              <KinesisElement
                :strength="3"
                type="depth"
                style="width: 100%; text-align: right"
              >
                <img
                  alt="phone"
                  :style="`
                  height: ${heightData / 2.5}px;
                  xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(
                    heightData / 300
                  )}px ))`"
                  contain
                  src="img/new/phone2.webp"
                >
              </KinesisElement>

              <KinesisElement
                :strength="6"
                type="depth"
                :style="`
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    position: absolute;
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(
                      heightData / 300
                )}px ));
                  `"
              >
                <img
                  v-prlx="{
                    'preserveInitialPosition': false,
                    'limit': {'min': -100,
                              'max': 100}
                  }"
                  alt="menu item"
                  :style="`
                      position: absolute;
                      height: ${heightData / 5.5}px;
                      top: ${heightData / 0}px;
                      right: ${heightData / 3.2}px;
                    `"
                  contain
                  src="img/new/1.webp"
                >
              </KinesisElement>

              <KinesisElement
                :strength="8"
                type="depth"
                :style="`
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    position: absolute;
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(
                      heightData / 300
                )}px ));
                  `"
              >
                <img
                  v-prlx="{
                    'preserveInitialPosition': false,
                    'limit': {'min': -100,
                              'max': 100}
                  }"
                  alt="menu item"
                  :style="`
                      position: absolute;
                      height: ${heightData / 5}px;
                      top: ${heightData / 5.3}px;
                      right: ${heightData / 2.5}px;
                    `"
                  contain
                  src="img/new/2.webp"
                >
              </KinesisElement>

              <KinesisElement
                :strength="12"
                type="depth"
                :style="`
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    position: absolute;
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(
                      heightData / 300
                )}px ));
                  `"
              >
                <img
                  v-prlx="{
                    'preserveInitialPosition': false,
                    'limit': {'min': -100,
                              'max': 100}
                  }"
                  alt="menu item"
                  :style="`
                      position: absolute;
                      height: ${heightData / 6}px;
                      top: ${heightData / 7.5}px;
                      right: ${heightData / 4}px;
                    `"
                  contain
                  src="img/new/3.webp"
                >
              </KinesisElement>
            </KinesisContainer>
          </v-row>
        </v-col>
        <v-col
          class="grow transition"
          style="max-width: 700px; align-self: center"
          cols="7"
        >
          <p
            v-scrollanimation
            style="font-size: 1.5rem"
          >
            {{ $t("LandingPage.section2a") }}
          </p>
          <h2
            v-scrollanimation
            class="font-weight-medium"
            style="font-size: 2rem"
          >
            {{ $t("LandingPage.section2b") }}
          </h2>
          <p
            v-scrollanimation
            style="font-size: 1.5rem"
          >
            {{ $t("LandingPage.section2c") }}
          </p>
        </v-col>
      </v-row>

      <v-row
        v-if="isPhone"
        style="margin: 0 auto; height: 100%"
        class="align-center justify-center"
      >
        <v-col v-scrollanimation>
          <h2
            v-scrollanimation
          >
            {{ $t("LandingPage.section2d") }}
          </h2>

          <br>

          <h1
            v-scrollanimation
          >
            {{ $t("LandingPage.section2e") }}
          </h1>

          <v-row
            v-scrollanimation
            :style="`margin: 0 auto; height: ${heightData * 0.6}px`"
            class="justify-center"
          >
            <img
              v-scrollanimation
              v-prlx.mobile="{
                'custom': true,
                'limit': {'min': 0,
                          'max': 100}
              }"
              alt="map"
              :height="heightData * 0.14"
              :style="`position: absolute; transform: translateY(calc(var(--parallax-value) * ${heightData / 300}px + 50px ))`"
              contain
              src="img/new/4.webp"
            >

            <img
              v-scrollanimation
              v-prlx.mobile="{
                'custom': true,
                'limit': {'min': 0,
                          'max': 100}
              }"
              alt="phone"
              :height="heightData * 0.4"
              :style="`position: absolute; transform: translateY(calc(var(--parallax-value) * ${
                heightData / 500
              }px ))`"
              contain
              src="img/new/phone3.webp"
            >

            <img
              v-scrollanimation
              v-prlx.mobile="{
                'custom': true,
                'limit': {'min': 0,
                          'max': 100}
              }"
              :style="`position: absolute;
                transform: translateY(calc(var(--parallax-value) * ${
                heightData / 600
              }px + ${heightData / 2.8}px )) translateX(20px)`"
              height="80px"
              contain
              alt="arrow"
              src="img/new/arrow.webp"
            >
          </v-row>
        </v-col>
      </v-row>

      <v-row
        v-else
        :style="`max-width: 1920px; margin: 0 auto; height: ${
          heightData * 0.7
        }px`"
        class="justify-center"
      >
        <v-col
          v-scrollanimation
          cols="8"
          class="grow transition"
          style="max-width: 700px; align-self: center"
        >
          <p
            v-scrollanimation
            style="font-size: 1.5rem"
          >
            {{ $t("LandingPage.section2d") }}
          </p>
          <h2
            v-scrollanimation
            class="font-weight-medium"
            style="font-size: 2rem"
          >
            {{ $t("LandingPage.section2e") }}
          </h2>
        </v-col>

        <v-col
          v-scrollanimation
          v-prlx="{
            'preserveInitialPosition': false,
            'limit': {'min': -100,
                      'max': 100}
          }"
          cols="4"
        >
          <v-row
            v-scrollanimation
            class="align-center justify-center"
            :style="`
              height: ${heightData * 0.6}px;
              max-height: 1300px;
              position: relative;
              left: 100px;
              `"
          >
            <KinesisContainer
              :style="`
              height: ${heightData * 0.5}px;
              width: 100%;`"
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
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(
                      heightData / 280
                )}px ));
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
                      height: ${heightData / 7}px;
                      top: ${heightData / 6}px;
                      left: 0px;
                    `"
                  contain
                  alt="map"
                  src="img/new/4.webp"
                >
              </KinesisElement>

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
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(
                      heightData / 280
                )}px ));
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
                      left: ${heightData / 18}px;
                    `"
                  contain
                  alt="phone"
                  src="img/new/phone4.webp"
                >
              </KinesisElement>

              <KinesisElement
                :strength="8"
                type="depth"
                :style="`
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    position: absolute;
                    xtransform: translateY(calc(var(--parallax-value) * ${Math.floor(
                      heightData / 270
                )}px ));
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
                      bottom: ${heightData / 20}px;
                      left: ${heightData / 3.8}px;
                    `"
                  contain
                  alt="arrow"
                  src="img/new/arrow.webp"
                >
              </KinesisElement>
            </KinesisContainer>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
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
</style>
