<template>
  <!-- eslint-disable vue/no-bare-strings-in-template vue/no-template-target-blank -->
  <background-image
    :height-data="heightData"
    img-mobile="img/new/bg2.webp"
    img-desktop="img/new/bg.webp"
    :is-phone="isPhone"
  >
    <top-landing-mobile v-if="isPhone" />
    <top-landing-desktop v-else />
  </background-image>
</template>

<script>
import BackgroundImage from "./BackgroundImage"
import TheTopLandingDesktop from "./TheTopLandingDesktop"
import TheTopLandingMobile from "./TheTopLandingMobile"

export default {
  name: "TheTopLanding",
  components: {
    "top-landing-mobile": TheTopLandingMobile,
    "top-landing-desktop": TheTopLandingDesktop,
    "background-image": BackgroundImage
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
