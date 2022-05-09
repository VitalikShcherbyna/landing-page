import {FieldValue} from "../firebaseFirestore"

export const onCreate = (userDataReference) => ({
  createdByUser: userDataReference,
  lastUpdateByUser: userDataReference,
  lastUpdateTime: FieldValue.serverTimestamp()
})

export const onUpdate = (userDataReference) => ({
  lastUpdateByUser: userDataReference,
  lastUpdateTime: FieldValue.serverTimestamp()
})
