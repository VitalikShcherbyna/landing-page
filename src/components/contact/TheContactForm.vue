<template>
  <v-row class="align-center justify-center ma-2">
    <v-col
      class="align-center align-center justify-center"
      cols="12"
      sm="10"
      md="9"
      lg="6"
    >
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="onSent"
      >
        <v-row class="align-center justify-center">
          <v-card
            :loading="loading"
            :disabled="loading"
            class="align-center justify-center"
          >
            <v-card-title class="justify-center">
              <span v-text="$t('ContactForm.title')" />
            </v-card-title>

            <v-card-text>
              <v-row dense>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <!-- FirstName -->
                  <v-text-field
                    v-model="name"
                    :rules="[requiredRule]"
                    :label="$t('FormView.firstName')"
                    dense
                  />
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <!-- Email -->
                  <v-text-field
                    v-model="email"
                    :rules="[requiredRule, emailRule]"
                    :label="$t('FormView.email')"
                    dense
                  />
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <!-- PHONE -->
                  <v-text-field
                    v-model="phone"
                    v-mask="phoneMask"
                    :rules="[phoneNotRequiredRule]"
                    :label="$t('FormView.phone')"
                    dense
                  />
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <!-- Category -->
                  <v-select
                    v-model="category"
                    :items="categories"
                    :label="$t('FormView.category')"
                    :rules="[requiredSelectRule]"
                    return-object
                    single-line
                    dense
                  />
                </v-col>

                <v-textarea
                  v-model="message"
                  :rules="[requiredRule]"
                  :label="$t('FormView.message')"
                  auto-grow
                  dense
                  rows="3"
                  maxlength="1000"
                  @keydown.enter.exact.prevent
                />
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-subheader>{{ $t("requiredFields") }}</v-subheader>

              <v-spacer />

              <v-btn
                rounded
                width="180"
                color="primary"
                type="submit"
              >
                {{ $t("FormView.send") }}
              </v-btn>
            </v-card-actions>

            <v-alert
              v-if="success"
              class="ma-2"
              dense
              type="success"
            >
              {{ $t("FormView.sendConfirmation") }}
            </v-alert>

            <v-alert
              v-if="!success && error"
              class="ma-2"
              dense
              type="error"
            >
              {{ $t("FormView.sendError") }}
            </v-alert>
          </v-card>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import {computed, ref, watch} from "@vue/composition-api"
import {
  emailRule,
  phoneMask,
  phoneNotRequiredRule,
  requiredRule,
  requiredSelectRule
} from "../../helpers/rules"
import {categories} from "../../helpers/consts"
import {mapDateToFirebaseFormat} from "../../helpers/timeFirebase"
import {mask} from "vue-the-mask"

export default {
  name: "ContactForm",
  directives: {
    mask
  },

  setup (props, {root}) {
    const name = ref(null)
    const email = ref(null)
    const phone = ref("+48 ")
    const category = ref(null)
    const message = ref(null)
    const valid = ref(true)

    const form = ref(null)

    const loading = computed(() => root.$store.state.messages.messagesLoading)
    const error = computed(() => root.$store.state.messages.messagesError)
    const success = computed(() => root.$store.state.messages.messagesSuccess)

    watch(
      loading,
      (newLoading, oldLoading) => {
        if (!newLoading && oldLoading && !error.value) {
          name.value = null
          email.value = null
          phone.value = "+48 "
          category.value = null
          message.value = null
          form.value.reset()
        }
      }
    )

    const onSent = () => {
      valid.value = form.value.validate()
      if (valid.value) {
        root.$store.dispatch(
          "messages/sendContactForm",
          {
            data: {
              name: name.value,
              email: email.value,
              phone: phone.value,
              category: category.value.value,
              message: message.value,
              date: mapDateToFirebaseFormat(new Date())
            }
          }
        )
      }
    }
    return {
      name,
      email,
      phone,
      category,
      message,
      valid,
      // refs
      form,
      // store data
      loading,
      error,
      success,
      // static data
      phoneMask,
      categories,
      // methods
      requiredRule,
      emailRule,
      requiredSelectRule,
      phoneNotRequiredRule,

      onSent
    }
  }
}
</script>
