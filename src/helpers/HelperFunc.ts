import quotes from "../assets/quotes.json"
import type { BodyMeasurement } from "../types/bodyMeasurementTypes"
export const getLabelColor = (label: string) => {
  if (label === "weight") {
    return "red"
  }
  return "green"
}

export const getAQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

export const getTotalMuscleFatLbs = (data: Array<BodyMeasurement>) => {
  return [
    {
      dateRange: "From " + data[0].date + " to " + data[data.length - 1].date,
      muscle:
        Math.round(
          (data[data.length - 1].skeletalMuscleMass -
            data[0].skeletalMuscleMass) *
            100
        ) / 100,
      fat: data[data.length - 1].bodyFatPercent - data[0].bodyFatPercent,
    },
  ]
}
