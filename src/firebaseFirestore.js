import "firebase/compat/firestore"
import firebase from "firebase/compat/app"
import firebaseCore from "./firebaseCore"

export const firestore = firebaseCore.firestore()

export const {Timestamp, GeoPoint, FieldValue} = firebase.firestore
