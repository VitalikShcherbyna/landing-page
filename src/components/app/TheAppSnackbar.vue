<template>
  <v-snackbar
    :value="visible"
    :color="color"
    :timeout="timeout"
  >
    <v-row class="justify-center">
      <h3 class="font-weight-medium ml-5">
        {{ text }}
      </h3>

      <v-progress-linear
        v-if="timeout === 0"
        :width="2"
        indeterminate
        color="primary"
      />
    </v-row>
  </v-snackbar>
</template>

<script>
import {computed, onBeforeUnmount, onMounted} from "@vue/composition-api"
import i18n from "@/i18n"

export default {
  name: "TheAppSnackbar",
  setup (props, context) {
    const visible = computed(() => context.root.$store.state.snackbar.visible || false)
    const color = computed(() => context.root.$store.state.snackbar.color || "primary")
    const timeout = computed(() => context.root.$store.state.snackbar.timeout || 600)
    const text = computed(() => context.root.$store.state.snackbar.text)

    onMounted(() => {
      const hideSnackbar = () => {
        context.root.$store.dispatch("snackbar/hideSnackbar")
      }

      const showSnackbarInfinity = () => {
        context.root.$store.dispatch(
          "snackbar/showSnackbarInfinity",
          {
            color: "primary",
            text: i18n.t("OfflineMode.offline")
          }
        )
      }

      window.addEventListener(
        "online",
        hideSnackbar
      )
      window.addEventListener(
        "offline",
        showSnackbarInfinity
      )
    })

    onBeforeUnmount(() => {
      window.removeEventListener("online")
      window.removeEventListener("offline")
    })

    return {
      visible,
      color,
      timeout,
      text
    }
  }
}
</script>
