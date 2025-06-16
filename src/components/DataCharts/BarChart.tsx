import {
  Bar,
  BarChart,
  Label,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type { BarchartDataType } from "../../types/bodyMeasurementTypes"

type BarChartDivProps = {
  data: Array<BarchartDataType>
}

export const BarChartDiv = ({ data }: BarChartDivProps) => {
  console.log("bar char data: ", data)
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
          <XAxis dataKey="colName" tick={true} />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
