import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"
import type { BodyMeasurement } from "../../types/bodyMeasurementTypes"
import { getLabelColor } from "../../helpers/HelperFunc"

type LineChartGraphProps = {
  data: Array<BodyMeasurement>
  dataLine: Array<string>
}
export const LineChartGraph = ({ data, dataLine }: LineChartGraphProps) => {
  console.log("data: ", data)

  return (
    <div className="box-border w-full h-100 bg-amber-100">
      <div> Line Chart</div>
      <div className="bg-white w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 50,
              left: 50,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="date" />
            <YAxis
              height={500}
              domain={[0, "dataMax "]}
              padding={{ top: 20 }}
            />
            <Tooltip />
            <Legend />

            {dataLine.map((each) => {
              return (
                <Line
                  type="monotone"
                  dataKey={each}
                  stroke={getLabelColor(each)}
                />
              )
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
