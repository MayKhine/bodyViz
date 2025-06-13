export interface BodyMeasurement {
  date: string
  weight: number
  skeletalMuscleMass: number
  bodyFatPercent: number
  bodyWaterRatio: number
}

export interface TotalMuscleFatLbs {
  dateRange: string
  muscle: number
  fat: number
}
