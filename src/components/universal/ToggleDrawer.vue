<template>
  <!-- eslint-disable vue/no-bare-strings-in-template -->
  <div>
    <v-app-bar-nav-icon
      aria-label="Menu"
      :dark="dark"
      @click="toggleDrawer"
    />
  </div>
</template>

<script>
import {computed} from "@vue/composition-api"
export default {
  name: "ToggleDrawer",
  props: {
    dark: {
      type: Boolean
    }
  },

  setup (props, {root}) {
    const drawer = computed(() => root.$store.state.drawer.visible)
    const toggleDrawer = () => {
      if (drawer.value) {
        root.$store.dispatch("drawer/hideDrawer")
      } else {
        root.$store.dispatch("drawer/showDrawer")
      }
    }
    return {
      toggleDrawer
    }
  }
}
</script>
