import {getError, getErrorEmail} from "./errorsHandling"
import i18n from "@/i18n"

export const savedDefault = {
  color: "primary",
  text: i18n.t("FormView.saved")
}

export const errorDefault = (error) => ({
  color: "error",
  text: getError(error)
})

export const errorEmail = (error) => ({
  color: "error",
  text: getErrorEmail(error)
})
