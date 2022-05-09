<template>
  <!-- eslint-disable vue/no-bare-strings-in-template -->
  <v-app-bar-nav-icon
    aria-label="Menu"
    :dark="dark"
    @click="toggleDrawer"
  />
</template>

<script>
import {computed} from "@vue/composition-api"
export default {
  name: "ToggleDrawerLanding",
  props: {
    dark: {
      type: Boolean
    }
  },

  setup (props, {root}) {
    const drawer = computed(() => root.$store.state.drawer.visibleLanding)
    const toggleDrawer = () => {
      if (drawer.value) {
        root.$store.dispatch("drawer/hideDrawerLanding")
      } else {
        root.$store.dispatch("drawer/showDrawerLanding")
      }
    }
    return {
      toggleDrawer
    }
  }
}
</script>
