import {ref} from "@vue/composition-api"

export default {
  setup () {
    const refreshing = ref(false)
    const registration = ref(null)
    const updateExists = ref(false)

    /*
     * Store the SW registration so we can send it a message
     * We use `updateExists` to control whatever alert, toast, dialog,
     * etc we want to use
     * To alert the user there is an update they need to refresh for
     */
    const updateAvailable = (event) => {
      registration.value = event.detail
      updateExists.value = true

      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!registration.value || !registration.value.waiting) {
        return
      }
      // send message to SW to skip the waiting and activate the new SW
      updateExists.value = false

      registration.value.waiting.postMessage({type: "SKIP_WAITING"})
    }

    // Called when the user accepts the update
    // eslint-disable-next-line no-unused-vars
    const refreshApp = () => {
      updateExists.value = false
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!registration.value || !registration.value.waiting) {
        return
      }
      // send message to SW to skip the waiting and activate the new SW
      registration.value.waiting.postMessage({type: "SKIP_WAITING"})
    }

    // Listen for our custom event from the SW registration
    if (document) {
      document.addEventListener(
        "swUpdated",
        updateAvailable,
        {once: true}
      )
    }

    if (navigator?.serviceWorker) {
      // Prevent multiple refreshes
      navigator.serviceWorker.addEventListener(
        "controllerchange",
        () => {
          if (refreshing.value) {
            return
          }
          refreshing.value = true
          // Here the actual reload of the page occurs
          window.location.reload()
        }
      )
    }

    return {
      refreshing,
      registration,
      updateExists
    }
  }
}
