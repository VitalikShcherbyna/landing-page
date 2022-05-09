<template>
  <v-row
    class="justify-center py-6 text-center"
    style="width: 100%"
  >
    <v-btn
      v-scrollanimation
      x-large
      width="70%"
      class="rounded-lg"
      color="primary"
      :href="href"
    >
      {{ text }}
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "ButtonMobile",
  props: {
    href: {
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
