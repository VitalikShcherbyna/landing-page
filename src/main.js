/* eslint-disable no-process-env */
import "babel-polyfill"
import "intersection-observer"
import "./registerServiceWorker"
import App from "./App"
import Vue from "vue"
import VueCompositionAPI from "@vue/composition-api"
import auth from "./firebaseAuth"
import i18n from "./i18n"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"

Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

let app

const onUserChange = (user) => {
  if (!app) {
    app = new Vue({
      name: "VueApp",
      vuetify,
      store,
      router,
      i18n,
      render: (func) => func(App)
    }).$mount("#app")
  }
}

auth.onAuthStateChanged(onUserChange)


