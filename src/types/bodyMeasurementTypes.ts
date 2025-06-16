export interface BodyMeasurement {
  date: string
  weight: number
  skeletalMuscleMass: number
  bodyFatMass: number
  bodyFatPercent: number
  bodyWaterRatio: number
  BMI: number
  rightArm: number
  leftArm: number
  trunk: number
  rightLeg: number
  leftLeg: number
  metabolicRate: number
}

export type BarchartDataType = {
  colName: string
  value: number
}
export interface TotalBarChartData {
  data: Array<BarchartDataType>
  title: string
}
