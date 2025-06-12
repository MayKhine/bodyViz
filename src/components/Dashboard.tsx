import type { BodyMeasurement } from "../types/bodyMeasurementTypes"
import { LineChartGraph } from "./DataCharts/LineChart"

type DashboardProps = {
  data: Array<BodyMeasurement>
}

export const Dashboard = ({ data }: DashboardProps) => {
  console.log("Data: ", data)
  return (
    <div className="flex-1 bg-amber-300 box-border w-full h-full">
      Dashboard
      <LineChartGraph data={data} />
    </div>
  )
}
