import {config} from "./firebaseCore"
import firebase from "firebase/compat/app"

const secondaryFirebaseApp = firebase.initializeApp(
  config,
  "primary"
)

export default secondaryFirebaseApp
