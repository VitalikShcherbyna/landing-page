import {OpenStreetMapProvider} from "leaflet-geosearch"

export const latLng = (lat, lng) => ({
  lat,
  lng
})

export const LODZ = latLng(
  51.760769,
  19.455349
)


export const mapItems = (item, index) => {
  const {
    label,
    raw: {
      address: {house_number, road, town, city, village, address29}
    }
  } = item
  return {
    text:
        house_number && road && (town || city || village)
          ? `${road} ${house_number} ${town || city || village} ${
            address29 || ""
          }`
          : label,

    value: index
  }
}

export const geosearchOptions = () => ({
  provider: new OpenStreetMapProvider({
    params: {
      countrycodes: "pl",
      "accept-language": "pl",
      addressdetails: 1
    }
  })
})
