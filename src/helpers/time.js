import "dayjs/locale/pl"
import dayjs from "dayjs"
import i18n from "@/i18n"

export const getNow = () => dayjs()

const localePL = "pl"
export const timeFormat = "HH:mm"
export const fullDateFormat = "MMMM DD YYYY, HH:mm"
export const plDateFormat = "DD MMMM"
export const dateFormat = "YYYY-MM-DD"
export const dateSimpleFormat = "DD-MM"
export const dayFormat = "DD"
const smsFormat = "MM-YYYY"
export const monthFormat = "YYYY-MM"

export const toDayjsDate = (date) => dayjs(date.toDate())

export const toDateDayJs = (date) => dayjs(date)

export const dateToDateFormat = (date) => dayjs(
  date,
  dateFormat
)

export const mapTimeFromFirebaseFormat = (time) => (time
  ? dayjs(time.toDate()).format(timeFormat)
  : null)

export const mapMonthFromFirebaseFormat = (date) => (date
  ? dayjs(date.toDate()).format(monthFormat)
  : null)

export const mapToSimpleDateFromFirebase = (time) => (time
  ? dayjs(time.toDate()).format(dateFormat)
  : null)

export const mapToSimpleDayFromFirebase = (time) => (time
  ? dayjs(time.toDate()).format(dayFormat)
  : null)

export const mapToDateFromFirebase = (time) => (time
  ? dayjs(time.toDate()).format(dateSimpleFormat)
  : null)

export const mapDateFromFirebaseFormat = (time) => (time
  ? dayjs(time.toDate()).locale(localePL).
    format(fullDateFormat)
  : null)

export const getTimeAndDate = (date) => {
  const formatteDate = dayjs(date.toDate())
  return [
    formatteDate.format(dateFormat),
    formatteDate.format(timeFormat)
  ]
}

export const dateToDayJS = (date) => dayjs(date)

export const createSMSDate = () => dayjs().format(smsFormat).
  toString()

export const days = [
  {
    text: i18n.t("MenuView.monday"),
    value: "monday"
  },
  {
    text: i18n.t("MenuView.tuesday"),
    value: "tuesday"
  },
  {
    text: i18n.t("MenuView.wednesday"),
    value: "wednesday"
  },
  {
    text: i18n.t("MenuView.thursday"),
    value: "thursday"
  },
  {
    text: i18n.t("MenuView.friday"),
    value: "friday"
  }
]

export const getMaxMonth = () => dayjs().format(monthFormat)
export const getMaxPrevMonth = () => dayjs().subtract(
  1,
  "month"
).
  format(monthFormat)

export const formatTomorrowOrderTIme = (tomorrowOrderTime) => dayjs(tomorrowOrderTime?.toDate()).hour() || 17
