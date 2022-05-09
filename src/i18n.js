/* eslint-disable no-process-env */
import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n)

const loadLocaleMessages = () => {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
  const messages = {}
  const regExp = /([A-Za-z0-9-_]+)\./i

  const mapKeys = (key) => {
    const matched = key.match(regExp)
    if (matched && matched.length > 1) {
      const [, locale] = matched
      messages[locale] = locales(key)
    }
  }
  locales.keys().forEach(mapKeys)
  return messages
}

export default new VueI18n({
  fallbackLocale: "en",
  locale: "pl",
  messages: loadLocaleMessages()
})
