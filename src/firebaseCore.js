/* eslint-disable no-process-env */
import firebase from "firebase/compat/app"
const getConfig = () => {
  return {
    apiKey: process.env.VUE_APP_STAGING_API_KEY,
    appId: process.env.VUE_APP_STAGING_APP_ID,
    authDomain: process.env.VUE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_STAGING_DATABASE_URL,
    measurementId: process.env.VUE_APP_STAGING_MEASUREMENT_ID,
    messagingSenderId: process.env.VUE_APP_STAGING_MESSAGING_SEND_ID,
    projectId: process.env.VUE_APP_STAGING_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STAGING_STORAGE_BUCKET
  }
}

export const config = getConfig()

export default firebase.initializeApp(config)

