<template>
  <!-- eslint-disable vue/no-bare-strings-in-template vue/no-template-target-blank -->
  <v-container class="align-center fill-height justify-center text-center">
    <div>
      <h1
        v-scrollanimation
        class="pb-6 white--text"
      >
        {{ $t("LandingPage.title1") }}
      </h1>

      <button-mobile
        v-bind="{
          'href': 'https://kanapkamanapp.page.link/LandingPageMobile',
          'text': `${$t('LandingPage.download')}`
        }"
      />

      <div
        v-scrollanimation
        v-prlx.mobile
        contain
        alt="image background"
        style="
          background: center;
          background-repeat: no-repeat;
          background-image: url(img/new/Path10.webp);
          background-size: contain;
        "
        class="mt-8 pt-1"
      >
        <img
          v-scrollanimation
          contain
          alt="image burger"
          width="340px"
          height="315px"
          src="img/new/main1.webp"
        >
      </div>
    </div>
  </v-container>
</template>

<script>
import ButtonMobile from "../ui/ButtonMobile"

export default {
  name: "TheTopLanding",
  components: {
    "button-mobile": ButtonMobile
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
</style>
