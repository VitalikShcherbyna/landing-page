<template>
  <v-speed-dial
    bottom
    right
    fixed
  >
    <template #activator>
      <v-btn
        height="50"
        class="rounded-lg secondary"
        @click="onClick"
      >
        <v-icon>{{ icon }}</v-icon>
        <span>{{ text }}</span>
      </v-btn>
    </template>
  </v-speed-dial>
</template>

<script>
export default {
  name: "SpeedDialButton",
  props: {
    onClick: {
      type: Function,
      required: true
    },

    icon: {
      type: String,
      required: true
    },

    text: {
      type: String,
      required: true
    }
  }
}
</script>
