import {
  Bar,
  BarChart,
  Label,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts"
import type { TotalMuscleFatLbs } from "../../types/bodyMeasurementTypes"

type BarChartDivProps = {
  data: Array<TotalMuscleFatLbs>
}
export const BarChartDiv = ({ data }: BarChartDivProps) => {
  // const data = [
  //   {
  //     dateRange: "From jan 1 to Jun 1",
  //     muscle: 10,
  //     fatLoss: -5,
  //     amt: 2181,
  //   },
  // ]

  return (
    <div className="bg-white w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="dateRange" tick={false}>
            <Label value="tes" offset={0} position="insideBottom" />
          </XAxis>
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="muscle" fill="#8884d8" />
          <Bar dataKey="fat" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
