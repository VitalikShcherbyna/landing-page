<template>
  <!-- eslint-disable vue/no-bare-strings-in-template vue/no-template-target-blank -->
  <background-content>
    <div style="display: grid; grid-template-columns: 60% 40%;">
      <div
        style="max-width: 700px; align-self: center;"
      >
        <h1
          v-scrollanimation
          class="font-weight-medium white--text"
          style="font-size: 4rem"
        >
          {{ $t("LandingPage.title1") }}
        </h1>

        <div class="align-center justify-center mt-2 text-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.kanapkaman.kanapkaman"
            aria-label="google store"
            class="ma-2"
            target="_blank"
            rel="noopener"
          >
            <img
              class="grow transition"
              contain
              alt="google play download"
              :src="googlePlay"
            >
          </a>

          <a
            :href="`${isPL
              ? 'https://apps.apple.com/pl/app/kanapkaman/id1486009538?l=pl'
              : 'https://apps.apple.com/pl/app/kanapkaman/id1486009538?l=us'
            }`"
            aria-label="app store"
            class="ma-2"
            target="_blank"
            rel="noopener"
          >
            <img
              v-scrollanimation
              class="grow transition"
              alt="appstore download"
              :src="appStore"
            >
          </a>

          <a
            href="https://appgallery.huawei.com/#/app/C102923225"
            aria-label="app gallery"
            class="ma-2"
            target="_blank"
            rel="noopener"
          >
            <img
              v-scrollanimation
              class="grow transition"
              alt="appgallery download"
              :src="appGallery"
            >
          </a>
        </div>
      </div>

      <div>
        <kinesis-rotate
          bg-img="img/new/Path10.webp"
          img="img/new/main1.webp"
          details="img/suppliers/13.webp"
        />
      </div>
    </div>
  </background-content>
</template>

<script>
import BackgroundContentVue from "./BackgroundContent.vue"
import KinesisRotateVue from "./KinesisRotate.vue"
import {computed} from "@vue/composition-api"

export default {
  name: "TheTopLanding",
  components: {
    "background-content": BackgroundContentVue,
    "kinesis-rotate": KinesisRotateVue
  },

  setup (props, context) {
    const isPL = computed(() => context.root.$i18n.locale === "pl")
    const googlePlay = computed(() => {
      switch (context.root.$i18n.locale) {
      case "en":
        return "img/new/googleplay-en.webp"
      case "ua":
        return "img/new/googleplay-ua.webp"
      case "ru":
        return "img/new/googleplay-ru.webp"
      default:
        return "img/new/googleplay-pl.webp"
      }
    })
    const appStore = computed(() => {
      switch (context.root.$i18n.locale) {
      case "en":
        return "img/new/appstore-en.webp"
      case "ua":
        return "img/new/appstore-ua.webp"
      case "ru":
        return "img/new/appstore-ru.webp"
      default:
        return "img/new/appstore-pl.webp"
      }
    })
    const appGallery = computed(() => {
      switch (context.root.$i18n.locale) {
      case "en":
        return "img/new/appgallery-en.webp"
      case "ua":
        return "img/new/appgallery-ua.webp"
      case "ru":
        return "img/new/appgallery-ru.webp"
      default:
        return "img/new/appgallery-pl.webp"
      }
    })

    return {
      isPL,
      googlePlay,
      appStore,
      appGallery
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
</style>
