export const getCitiesSet = (routes) => {
  if (!routes) {
    return []
  }
  const byCity = (result, {city}) => result.add(city)
  return Array.from(routes.reduce(
    byCity,
    new Set()
  ))
}
