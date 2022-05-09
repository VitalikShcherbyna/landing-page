<template>
  <div>
    <TheSeventhLandingMobileVue
      v-if="isPhone"
      :companies-landing="companiesLanding"
    />
    <TheSeventhLandingDesktopVue
      v-else
      :companies-landing="companiesLanding"
    />
  </div>
</template>

<script>
import {computed, onMounted} from "@vue/composition-api"
import TheSeventhLandingDesktopVue from "./TheSeventhLandingDesktop.vue"
import TheSeventhLandingMobileVue from "./TheSeventhLandingMobile.vue"

const byLogo = (comapny) => comapny?.logo
const byName = (comapny) => ![
  "Śniadaniowcy Ostrowiec",
  "Śniadaniowcy Kielce",
  "Śniadaniowcy Opole"
].includes(comapny?.name)

export default {
  name: "TheSeventhLanding",
  components: {
    TheSeventhLandingMobileVue,
    TheSeventhLandingDesktopVue
  },

  props: {
    isPhone: Boolean
  },

  setup (props, context) {
    const isInverted = computed(() => (context.root.$vuetify.theme.isDark
      ? "filter: invert(100%)"
      : ""))
    const companiesLanding = computed(() => context.root.$store.state.companies.companiesLanding?.filter(byLogo).filter(byName) || [])

    onMounted(() => {
      context.root.$store.dispatch("companies/getCompaniesLanding")
    })

    return {
      isInverted,
      companiesLanding
    }
  }
}
</script>

