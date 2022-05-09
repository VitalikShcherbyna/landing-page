require("intersection-observer")
/* eslint-disable no-process-env */
process.env.VUE_APP_VERSION = require("./package.json").version

/*
 * const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")
 * new BundleAnalyzerPlugin()
 */

// http://localhost:61116

const plugins = []
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefetch")
    config.plugins.delete("preload")
    config.plugin("VuetifyLoaderPlugin").tap(() => [
      {
        progressiveImages: true,
        // eslint-disable-next-line consistent-return
        match(originalTag, { kebabTag, camelTag }) {
          if (kebabTag.startsWith("core-")) {
            return [
              camelTag,
              `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`
            ]
          }
        }
      }
    ])
  },
  configureWebpack: {
    plugins
  },
  css: {
    extract: { ignoreOrder: true }
  },
  pluginOptions: {
    i18n: {
      enableInSFC: true,
      fallbackLocale: "pl",
      locale: "pl",
      localeDir: "locales"
    },
    sitemap: {
      urls: [
        {
          loc: "https://kanapkaman.pl/",
          priority: 1.0
        },
      ]
    }
  },
  pwa: {
    manifestOptions: {
      display: "fullscreen",
      name: "KanapkaMan",
      short_name: "Kanapka Man",
      start_url: ".",
      theme_color: "#8bc34a"
    },
    msTileColor: "#8bc34a",
    name: "KanapkaMan",
    themeColor: "#8bc34a",
    theme_color: "#8bc34a",

    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "src/service-worker.js"
      // ...other Workbox options...
    }

    /*
     * workboxOptions: {
     *   skipWaiting: true
     * }
     */
  },
  transpileDependencies: [
    "vuetify",
    "intersection-observer"
  ]
}
