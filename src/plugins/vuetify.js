/* eslint-disable no-process-env */
import LRU from "lru-cache"
import Vue from "vue"
import Vuetify from "vuetify/lib"
import pl from "vuetify/es5/locale/pl"

Vue.use(Vuetify)

const max = 100
const ttl = 1000

const themeCache = new LRU({
  max,
  ttl
})

const mq = window.matchMedia("(prefers-color-scheme: dark)")
const dark =
  // eslint-disable-next-line no-undefined
  localStorage.dark === undefined
    ? mq.matches
    : JSON.parse(localStorage.dark)

const vuetify = new Vuetify({
  lang: {
    locales: { pl },
    current: "pl"
  },
  theme: {
    dark,
    themes: {
      light: {
        primary: "#75C402",
        secondary: "#5c6bc0",
        accent: "#3f51b5",
        darkBlue: "#21455B",
        background: "#FFF",
        neutral: "#000000"
      },
      dark: {
        primary: "#75C402",
        secondary: "#5c6bc0",
        accent: "#3f51b5",
        darkBlue: "#21455B",
        neutral: "#ffffff"
      }
    },
    options: {
      variations: false,
      themeCache,
      minifyTheme(css) {
        return css
      }
    }
  },
  icons: {
    iconfont: "mdiSvg"
  }
})

vuetify.framework.theme.dark =
  // eslint-disable-next-line no-undefined
  localStorage.dark === undefined
    ? mq.matches
    : JSON.parse(localStorage.dark)
mq.addListener((event) => {
  vuetify.framework.theme.dark =
    // eslint-disable-next-line no-undefined
    localStorage.dark === undefined
      ? event.matches
      : JSON.parse(localStorage.dark)
})

export default vuetify
