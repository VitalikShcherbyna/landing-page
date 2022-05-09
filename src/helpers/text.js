const threeDots = "..."

export const truncate = (input, length = 40) => (input?.length > length
  ? input.substring(
    0,
    length
  ) + threeDots
  : input)

export const phoneNumberFormat = (phone) => `${phone.substring(
  0,
  3
)} ${phone.substring(
  3,
  6
)} ${phone.substring(
  6,
  9
)} ${phone.substring(9)}`

const polishLetters = [
  "ą",
  "ć",
  "ę",
  "ł",
  "ń",
  "ó",
  "ś",
  "ź",
  "ż"
]
const normalLetters = [
  "a",
  "c",
  "e",
  "l",
  "n",
  "o",
  "s",
  "z",
  "z"
]
export const removePolishLetters = (tag) => {
  let tmp = tag
  for (let index = 0; index < polishLetters.length; index++) {
    tmp = tmp.replaceAll(
      polishLetters[index],
      normalLetters[index]
    )
  }
  return tmp
}
