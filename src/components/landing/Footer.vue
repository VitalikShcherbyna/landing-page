<template>
  <!-- eslint-disable -->
  <div style="background: black;">
    <div
      v-if="isPhone"
      class="text-center py-4"
    >
      <div class="align-center justify-center text-center my-4">
        <a
          class="ma-2 pa-2"
          
          aria-label="facebook"
          href="https://www.facebook.com/KanapkaMan-103451241175540/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon color="white" large>{{ mdiFacebook }}</v-icon>
        </a>

        <a
          class="ma-2 pa-2"
          aria-label="instagram"
          href="https://www.instagram.com/kanapkaman/?hl=pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon color="white" large>{{ mdiInstagram }}</v-icon>
        </a>

        <a
          class="ma-2 pa-2"
          aria-label="linkedin"
          href="https://www.linkedin.com/showcase/kanapkaman/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon color="white" large>{{ mdiLinkedin }}</v-icon>
        </a>
      </div>

      <a
        href="/pdf/regulation4.pdf"
        class="pa-2 ma-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t("LandingPage.regulations") }}
      </a>

      <br />
      <br />

      <a
        href="/pdf/privacy3.pdf"
        class="pa-2 ma-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t("LandingPage.privacyPolicy") }}
      </a>

      <br />
      <br />

      <a
        href="/pdf/cookies.pdf"
        class="ma-2 pa-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t("LandingPage.cookies") }}
      </a>

      <br />
      <br />

      <span class="pt-4 white--text">
        {{ $t("LandingPage.copyRight") }}
      </span>
    </div>

    <div
      v-else
      class="justify-center text-center py-4"
    >
        <span class="pt-4 white--text">
          {{ $t("LandingPage.copyRight") }}
        </span>

        <a
          href="/pdf/regulation4.pdf"
          class="ma-2 pa-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t("LandingPage.regulations") }}
        </a>

        <span class="white--text">|</span>

        <a
          href="/pdf/privacy3.pdf"
          class="ma-2 pa-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t("LandingPage.privacyPolicy") }}
        </a>

        <span class="white--text">|</span>

        <a
          href="/pdf/cookies.pdf"
          class="pa-2 ma-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t("LandingPage.cookies") }}
        </a>

        <a
          aria-label="facebook"
          href="https://www.facebook.com/KanapkaMan-103451241175540/"
          target="_blank"
          rel="noopener noreferrer"
          class="pa-2"
        >  
            <v-icon color="white" large>{{ mdiFacebook }}</v-icon>
        </a>

        <a
          class="pa-2"
          aria-label="instagram"
          href="https://www.instagram.com/kanapkaman/?hl=pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon color="white" large>{{ mdiInstagram }}</v-icon>
        </a>

        <a
          class="pa-2"
          aria-label="linkedin"
          href="https://www.linkedin.com/showcase/kanapkaman/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon color="white" large>{{ mdiLinkedin }}</v-icon>
        </a>
    </div>
  </div>
</template>

<script>
import {mdiFacebook, mdiInstagram, mdiLinkedin} from "@mdi/js"

export default {
  name: "LandingFooter",
  props: {
    isPhone: Boolean
  },

  setup () {
    return {
      mdiFacebook,
      mdiInstagram,
      mdiLinkedin
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
