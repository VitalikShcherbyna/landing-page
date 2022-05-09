<template>
  <div>
    <the-top-landing
      :height-data="heightData"
      :is-phone="isPhone"
    />
    <the-first-landing
      :height-data="heightData"
      :is-phone="isPhone"
    />
    <the-second-landing
      :height-data="heightData"
      :is-phone="isPhone"
    />
    <the-third-landing
      :height-data="heightData"
      :is-phone="isPhone"
    />

    <the-fourth-landing
      :height-data="heightData"
      :is-phone="isPhone"
    />
    <the-fifth-landing
      :height-data="heightData"
      :is-phone="isPhone"
    />
    <the-seventh-landing
      :height-data="heightData"
      :is-phone="isPhone"
    />
    <the-eight-landing
      :height-data="heightData"
      :is-phone="isPhone"
    />
    <landing-footer
      :is-phone="isPhone"
    />
  </div>
</template>

<script>
import {computed, onBeforeMount, onBeforeUnmount, onMounted, ref, watch} from "@vue/composition-api"
import TheFirstLandingVue from "../components/landing/TheFirstLanding.vue"
import TheTopLandingVue from "../components/landing/TheTopLanding.vue"
import Vue from "vue"
import VueKinesis from "vue-kinesis"
import {VuePrlxDirective} from "vue-prlx"
// eslint-disable-next-line sort-imports, no-duplicate-imports
import VuePrlx from "vue-prlx"
import scrollanimation from "../directives/scrollanimation"

Vue.use(VueKinesis)

Vue.use(VuePrlx)
Vue.directive(
  "scrollanimation",
  scrollanimation
)
Vue.directive(
  "prlx",
  VuePrlxDirective
)

export default {
  name: "LandingView",
  components: {
    "the-top-landing": TheTopLandingVue,
    "the-first-landing": TheFirstLandingVue,
    "the-second-landing": () => import("../components/landing/TheSecondLanding"),
    "the-third-landing": () => import("../components/landing/TheThirdLanding"),
    "the-fourth-landing": () => import("../components/landing/TheFourthLanding"),
    "the-fifth-landing": () => import("../components/landing/TheFifthLanding"),
    "the-seventh-landing": () => import("../components/landing/TheSeventhLanding"),
    "the-eight-landing": () => import("../components/landing/TheEightLanding"),
    "landing-footer": () => import("../components/landing/Footer")
  },

  setup (props, context) {
    const height = ref(null)
    const heightData = ref(0)

    const handleResize = () => {
      height.value = document.documentElement.clientHeight
    }

    onBeforeMount(() => handleResize())

    onMounted(() => {
      window.scrollTo(
        0,
        0
      )

      handleResize()
      window.addEventListener(
        "resize",
        handleResize
      )
      window.addEventListener(
        "orientationchange",
        handleResize
      )
    })

    onBeforeUnmount(() => {
      window.removeEventListener(
        "resize",
        handleResize
      )
      window.removeEventListener(
        "orientationchange",
        handleResize
      )
    })

    watch(
      height,
      (heightNew) => {
        if (!heightData.value || !(document.documentElement.clientWidth < 600)) {
          heightData.value = heightNew
        }
      }
    )

    const isPhone = computed(() => {
      const {name} = context.root.$vuetify.breakpoint
      return name === "xs" || name === "sm"
    })

    return {
      heightData,
      isPhone
    }
  }
}
</script>

