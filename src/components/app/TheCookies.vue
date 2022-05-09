<template>
  <div>
    <v-snackbar
      v-if="isPhone"
      color="black"
      tile
      :value="showDownload"
      :timeout="-1"
      width="100%"
      @click="closeDownload"
    >
      <v-row
        class="justify-center"
        align="center"
      >
        <v-btn
          icon
          class="py-1"
          @click="closeDownload"
        >
          <v-icon>
            {{ mdiClose }}
          </v-icon>
        </v-btn>

        <span class="ma-4">{{ $t('DownloadBanner.title') }}</span>

        <v-btn
          target="_blank"
          rel="noopener noreferrer"
          class="py-1"
          color="#75C402"
          style="text-transform: none !important;"
          @click="closeCookiesAndRedirectDownload"
        >
          {{ $t('DownloadBanner.btn') }}
        </v-btn>
      </v-row>
    </v-snackbar>

    <v-snackbar
      color="black"
      :value="showCookies"
      :timeout="-1"
    >
      <v-row
        class="justify-center"
      >
        <span class="ma-4">{{ $t('cookies') }}</span>
      </v-row>

      <v-row
        class="justify-center"
      >
        <v-btn
          class="py-1"
          text
          style="text-transform: none !important;"
          @click="closeCookiesAndRedirect"
        >
          {{ $t('more') }}
        </v-btn>

        <v-btn
          class="py-1"
          color="#75C402"
          style="text-transform: none !important;"
          @click="closeCookies"
        >
          {{ $t('cookies2') }}
        </v-btn>
      </v-row>
    </v-snackbar>
  </div>
</template>

<script>
import {computed, onMounted, ref} from "@vue/composition-api"
import {mdiClose} from "@mdi/js"

export default {
  name: "TheCookies",
  setup (props, context) {
    const isPhone = computed(() => {
      const {name} = context.root.$vuetify.breakpoint
      return name === "xs" || name === "sm"
    })

    const showDownload = ref(false)

    const closeDownload = () => {
      showDownload.value = false
      localStorage.download = JSON.stringify(true)
    }

    const showCookies = ref(false)

    const closeCookies = () => {
      showCookies.value = false
      showDownload.value = true
      localStorage.cookies = JSON.stringify(true)
    }

    const closeCookiesAndRedirect = () => {
      closeCookies()
      window.location.href = "/cookies"
    }

    const closeCookiesAndRedirectDownload = () => {
      showDownload.value = false
      window.location.href = "https://kanapkamanapp.page.link/LandingPageMobile"
    }

    onMounted(() => {
      showCookies.value = !(localStorage?.cookies && JSON.parse(localStorage?.cookies))
      showDownload.value = (localStorage?.download && !JSON.parse(localStorage?.download))
    })

    return {
      mdiClose,
      isPhone,

      showDownload,
      closeDownload,
      closeCookiesAndRedirectDownload,

      showCookies,
      closeCookies,
      closeCookiesAndRedirect
    }
  }

}
</script>

<style>
.v-btn {
  text-transform: none !important;
}

a {
  text-decoration: none;
}
</style>
