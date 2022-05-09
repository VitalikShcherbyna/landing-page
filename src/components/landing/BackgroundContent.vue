<template>
  <v-row
    id="background"
    class="align-center justify-center text-center"
  >
    <slot />
  </v-row>
</template>

<script>
export default {
  name: "BackgroundContent"
}
</script>

<style scoped>
#background {
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
