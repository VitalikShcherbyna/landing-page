<template>
  <v-app-bar
    collapse-on-scroll
    app
  >
    <toggle-drawer />

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-progress-linear
      :active="loading"
      indeterminate
      bottom
      absolute
    />
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBarDefault",
  components: {
    "toggle-drawer": () => import("./ToggleDrawer")
  },

  props: {
    loading: Boolean,
    title: {
      type: String,
      required: true
    }
  }
}
</script>
