<template>
  <!-- eslint-disable vue/no-bare-strings-in-template -->
  <div
    class="fill-height"
  >
    <v-container :class="isPhone ? `py-6` : `fill-height`">
      <img
        style="position: absolute; right: 100px;"
        src="img/login/1.webp"
        alt="background"
      >
      <img
        style="position: absolute; left: 50px; right: 50px; top: 200px;"
        src="img/login/2.webp"
        alt="background"
      >
      <img
        style="position: absolute; left: 0px; top: 100px;"
        src="img/login/3.webp"
        alt="background"
      >
      <img
        v-if="!isPhone"
        style="position: absolute; left: 50px; bottom: 200px;"
        src="img/login/4.webp"
        alt="background"
      >
      <img
        v-if="!isPhone"
        style="position: absolute; right: 0px; bottom: 200px;"
        src="img/login/5.webp"
        alt="background"
      >
      <img
        style="position: absolute; right: 50px; top: 200px;"
        src="img/login/6.webp"
        alt="background"
      >
      <img
        v-if="!isPhone"
        style="position: absolute; left: 250px; top: 400px;"
        src="img/login/7.webp"
        alt="background"
      >
      <img
        style="position: absolute; right: 300px; top: 200px;"
        src="img/login/8.webp"
        alt="background"
      >


      <v-row
        class="mt-10"
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="8"
          lg="6"
          xl="4"
        >
          <v-card
            class="elevation-2 px-4 py-2 rounded-xl text-center"
            :loading="loading"
            :disabled="loading"
          >
            <h1
              class="font-weight-medium pt-4"
              style="font-size: 2rem;"
            >
              {{ $t("ContactForm.title") }}
            </h1>


            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="onSent"
              >
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
                        outlined
                        class="rounded-lg"
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
                        outlined
                        class="rounded-lg"
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
                        outlined
                        class="rounded-lg"
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
                        outlined
                        class="rounded-lg"
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
                      outlined
                      class="rounded-lg"
                      :rules="[requiredRule]"
                      :label="$t('FormView.message')"
                      auto-grow
                      dense
                      rows="3"
                      maxlength="1000"
                      @keydown.enter.exact.prevent
                    />
                  </v-row>
                  <v-row class="justify-center">
                    <span>
                      {{ $t("ContactForm.info1") }}
                      <v-btn
                        id="btn"
                        href="/pdf/privacy3.pdf"
                        text
                        class="ma-0 pa-1 rounded-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ $t("ContactForm.info2") }}
                      </v-btn>

                    </span>
                  </v-row>
                </v-card-text>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    class="rounded-lg"
                    width="180"
                    color="primary"
                    type="submit"
                  >
                    {{ $t("FormView.send") }}
                  </v-btn>
                  <v-spacer />
                </v-card-actions>

                <v-alert
                  v-if="success"
                  class="ma-2 rounded-lg"
                  dense
                  type="success"
                >
                  {{ $t("FormView.sendConfirmation") }}
                </v-alert>

                <v-alert
                  v-if="!success && error"
                  class="ma-2 rounded-lg"
                  dense
                  type="error"
                >
                  {{ $t("FormView.sendError") }}
                </v-alert>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <landing-footer
      v-if="isPhone"
      :is-phone="isPhone"
    />
    <landing-footer
      v-else
      style="position: absolute; bottom: 0px; width: 100%"
      :is-phone="isPhone"
    />
  </div>
</template>

<script>
import {computed, onBeforeMount, onBeforeUnmount, onMounted, ref, watch} from "@vue/composition-api"
import {
  emailRule,
  phoneMask,
  phoneNotRequiredRule,
  requiredRule,
  requiredSelectRule
} from "../helpers/rules"
import {categories} from "../helpers/consts"
import {mapDateToFirebaseFormat} from "../helpers/timeFirebase"
import {mask} from "vue-the-mask"

export default {
  name: "TheNewContactView",
  components: {
    "landing-footer": () => import("../components/landing/Footer")
  },

  directives: {
    mask
  },

  setup (props, context) {
    const name = ref(null)
    const email = ref(null)
    const phone = ref("+48 ")
    const category = ref(null)
    const message = ref(null)
    const valid = ref(true)

    const form = ref(null)

    const loading = computed(() => context.root.$store.state.messages.messagesLoading)
    const error = computed(() => context.root.$store.state.messages.messagesError)
    const success = computed(() => context.root.$store.state.messages.messagesSuccess)

    const height = ref(null)
    const heightData = ref(null)

    const handleResize = () => {
      height.value = document.documentElement.clientHeight
    }

    onBeforeMount(() => {
      height.value = document.documentElement.clientHeight
    })


    onMounted(() => {
      window.scrollTo(
        0,
        0
      )

      height.value = document.documentElement.clientHeight
      window.addEventListener(
        "resize",
        handleResize
      )
    })

    onBeforeUnmount(() => {
      window.removeEventListener(
        "resize",
        handleResize
      )
    })

    watch(
      height,
      (heightNew) => {
        if (!heightData.value || !(document.documentElement.clientWidth < 600)) {
          heightData.value = heightNew
        }
      }
    )
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
        context.root.$store.dispatch(
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

    const isPL = computed(() => context.root.$i18n.locale === "pl")

    const isPhone = computed(() => {
      const {name: newName} = context.root.$vuetify.breakpoint
      const result = newName === "xs" || newName === "sm"
      return result
    })


    return {
      name,
      email,
      phone,
      category,
      message,
      valid,
      form,
      loading,
      error,
      success,
      phoneMask,
      categories,
      requiredRule,
      emailRule,
      requiredSelectRule,
      phoneNotRequiredRule,
      onSent,

      isPL,
      height,
      heightData,
      isPhone
    }
  }
}
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}

a {
  text-decoration: none;
}

  .before-enter {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s cubic-bezier(.41,.01,0,0);
  }

  .enter {
    opacity: 1;
    transform: translateX(0px);
  }

  #btn {
  text-decoration: none;
}
</style>

