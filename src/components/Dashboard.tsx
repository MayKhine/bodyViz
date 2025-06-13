import { getAQuote, getTotalMuscleFatLbs } from "../helpers/HelperFunc"
import type { BodyMeasurement } from "../types/bodyMeasurementTypes"
import { BarChartDiv } from "./DataCharts/BarChart"
// import { LineChartGraph } from "./DataCharts/LineChart"
type DashboardProps = {
  data: Array<BodyMeasurement>
}

export const Dashboard = ({ data }: DashboardProps) => {
  console.log("Data: ", data)
  // const lineGraphDataLine = ["weight", "skeletalMuscleMass", "bodyFatPercent"]
  const TotalMuscleFatLbs = getTotalMuscleFatLbs(data)
  console.log("TEST Data : ", TotalMuscleFatLbs)
  return (
    <div className="self-center grow flex flex-col bg-amber-300 box-border w-full max-w-7xl h-full border-2 rounded p-5">
      <div className="bg-pink-200 box-border flex-col flex-none">
        <div className="justify-self-end text-end font-bold text-xl">
          <div> May's journery </div>
          <div>
            From {data[0].date} to {data[data.length - 1].date}
          </div>
        </div>
        <div> {getAQuote()}</div>
      </div>
      <div className="bg-green-200 h-full grow flex flex-col">
        <div className="flex w-full bg-pink-300 flex-wrap md:flex-nowrap">
          <div className="bg-amber-200 w-full md:w-2/4 min-h-50">
            Another big bar graph
          </div>
          <div className="bg-yellow-300 w-full md:w-1/4 min-h-50">
            Another graph
          </div>
          <div className="bg-yellow-100 w-full md:w-1/4 min-h-50 md:h-80 p-10">
            <BarChartDiv data={TotalMuscleFatLbs} />
          </div>
        </div>
        <div className="bg-pink-200 grow"> Another big div</div>
        <div className="bg-pink-100 grow h-40"> Another big div</div>
      </div>
    </div>
  )
}
