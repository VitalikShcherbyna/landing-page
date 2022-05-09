<template>
  <v-row
    v-if="loading"
    justify="center"
  >
    <v-col cols="6">
      <v-progress-linear
        indeterminate
        rounded
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LoadingTable",
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>
