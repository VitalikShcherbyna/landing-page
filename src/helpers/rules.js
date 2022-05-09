import i18n from "@/i18n"

// eslint-disable-next-line max-len, vue/max-len
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phonePattern = /^\+48[ ]\d{3}[-]\d{3}[-]\d{3}$/
const postCodePattern = /^[0-9]{2}-[0-9]{3}$/
const digitsPattern = /^[0-9]+$/
const realDigitsPattern = /^([0-9]+(\.[0-9]+)?)$/

export const phoneMask = "+## ###-###-###"

export const requiredRule = (
  value,
  textError = i18n.t("Rules.requiredField")
) => Boolean(value) || textError

export const lengthRule = (
  value,
  textError = i18n.t("Rules.lengthRule")
) => Boolean(value?.length <= 65) || textError

export const lengthRuleShort = (
  value,
  textError = i18n.t("Rules.lengthRuleShort")
) => Boolean(value?.length > 2) || textError

export const requiredMultiSelectRule = (
  value,
  textError = i18n.t("Rules.requiredField")
) => Boolean(value?.length) || textError

export const requiredSelectRule = (
  value,
  textError = i18n.t("Rules.requiredField")
) => value === 0 || Boolean(value) || textError

export const requiredMultiItemsRule = (
  value,
  textError = i18n.t("Rules.requiredField")
) => value && value?.length > 0 || textError

export const emailRule = (
  value,
  textError = i18n.t("Rules.wrongEmailFormat")
) => emailPattern.test(value) || textError

export const phoneRule = (
  value,
  textError = i18n.t("Rules.wrongPhoneFormat")
) => phonePattern.test(value) || textError

export const phoneNotRequiredRule = (value) => value === "+48 " || value === "+48" || !value || phoneRule(value)

export const postCodeRule = (
  value,
  textError = i18n.t("Rules.wrongPostCode")
) => postCodePattern.test(value) || textError

export const digitsRule = (value, textError = i18n.t("Rules.onlyNumbers")) => digitsPattern.test(value) || textError

export const realDigitsRule = (
  value,
  textError = i18n.t("Rules.wrongDigitNumber")
) => realDigitsPattern.test(value) || textError

export const realDigitsRuleNotRequired = (
  value,
  textError = i18n.t("Rules.wrongDigitNumber")
) => realDigitsPattern.test(value) || value === "" || value === null || textError

export const noZeroDigitRule = (
  value,
  textError = i18n.t("Rules.noZeroDigitRule")
) => value > 0 || textError

export const passwordRule = (
  value,
  textError = "Min. 8 znaków z co najmniej jedną wielką literą, cyfrą i znakiem specjalnym."
) => {
  // eslint-disable-next-line no-useless-escape
  const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  return (
    patternPassword.test(value) || textError

  )
}

export const textFiledRequiredRules = [requiredRule]
export const selectRequiredRules = [requiredSelectRule]
