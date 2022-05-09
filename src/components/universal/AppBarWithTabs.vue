<template>
  <v-app-bar app>
    <toggle-drawer />

    <v-toolbar-title>
      {{ title }}
    </v-toolbar-title>

    <v-spacer />

    <template #extension>
      <v-tabs
        :value="selectedTab"
        show-arrows="mobile"
        fixed-tabs
        @change="onChangeTab"
      >
        <v-tab
          v-for="({value, key}) in tabs"
          :key="key"
        >
          {{ value }}
        </v-tab>
      </v-tabs>
    </template>

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
  name: "AppBarWithTabs",
  components: {
    "toggle-drawer": () => import("./ToggleDrawer")
  },

  props: {
    loading: Boolean,
    title: {
      type: String,
      required: true
    },

    selectedTab: {
      type: Number,
      required: true
    },

    onChangeTab: {
      type: Function,
      required: true
    },

    tabs: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
