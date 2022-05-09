<template>
  <background-image
    :height-data="isPhone
      ? (heightData + 56)
      : heightData"
    img-mobile="img/new/footerbg.webp"
    img-desktop="img/new/footerbg.webp"
    :is-phone="isPhone"
  >
    <TheEightLandingMobile v-if="isPhone" />

    <TheEightLandingDesktop v-else />
  </background-image>
</template>

<script>
import BackgroundImageVue from "./BackgroundImage.vue"
import TheEightLandingDesktop from "./TheEightLandingDesktop.vue"
import TheEightLandingMobile from "./TheEightLandingMobile.vue"

export default {
  name: "TheEightLanding",
  components: {
    TheEightLandingMobile,
    TheEightLandingDesktop,
    "background-image": BackgroundImageVue

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

