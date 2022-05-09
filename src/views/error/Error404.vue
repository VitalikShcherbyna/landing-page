<template>
  <v-container class="mt-12 pa-10">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="error">
            {{ $t("Error404.title") }}
          </v-card-title>

          <v-card-text class="pa-2">
            {{ $t("error") }}
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-btn
              rounded
              text
              color="error"
              to="/"
            >
              {{ $t("close") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Error404View"
}
</script>
