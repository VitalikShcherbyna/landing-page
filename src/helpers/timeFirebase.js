import "dayjs/locale/pl"
import {Timestamp} from "../firebaseFirestore"
import dayjs from "dayjs"

const divider = ":"

export const mapTimeToFirebaseFormat = (time) => {
  if (!time) {
    return null
  }

  const [
    hours,
    minutes
  ] = time.split(divider)
  const date = dayjs().hour(hours).
    minute(minutes).
    toDate()
  return Timestamp.fromDate(date)
}

export const now = Timestamp.now()

export const mapDateToFirebaseFormat = (date) => Timestamp.fromDate(date)

export const mapDateAndTimeFromFirebaseFormat = (date, time) => Timestamp.fromDate(dayjs(`${date} ${time}`).toDate())

export const getFirstDayOfMonth = (selectedDate) => mapDateToFirebaseFormat(selectedDate.date(1).
  hour(0).
  minute(0).
  second(0).
  millisecond(0).
  toDate())

export const getFirstDayOfNextMonth = (selectedDate) => mapDateToFirebaseFormat(selectedDate.add(
  1,
  "month"
).date(1).
  hour(0).
  minute(0).
  second(0).
  millisecond(0).
  toDate())
