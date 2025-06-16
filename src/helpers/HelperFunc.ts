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

export const roundNumberTo2Deci = (number: number) => {
  return Math.round(number * 100) / 100
}

// export const getTotalMuscleFatLbs = (data: Array<BodyMeasurement>) => {
//   return {
//     data: [
//       {
//         dateRange: "From " + data[0].date + " to " + data[data.length - 1].date,
//         muscle: roundNumberTo2Deci(
//           data[data.length - 1].skeletalMuscleMass - data[0].skeletalMuscleMass
//         ),
//         fat: roundNumberTo2Deci(
//           data[data.length - 1].bodyFatPercent - data[0].bodyFatPercent
//         ),
//       },
//     ],
//     dataCol: ["muscle", "fat"],
//   }
// }

export const getTotalMuscleFatLbs = (data: Array<BodyMeasurement>) => {
  return [
    {
      colName: "muscle",
      value: roundNumberTo2Deci(
        data[data.length - 1].skeletalMuscleMass - data[0].skeletalMuscleMass
      ),
    },
    {
      colName: "fat",
      value: roundNumberTo2Deci(
        data[data.length - 1].bodyFatPercent - data[0].bodyFatPercent
      ),
    },
  ]

  // return {
  //   data: [
  //     {
  //       colName: "muscle",
  //       value: roundNumberTo2Deci(
  //         data[data.length - 1].skeletalMuscleMass - data[0].skeletalMuscleMass
  //       ),
  //     },
  //     {
  //       colName: "fat",
  //       value: roundNumberTo2Deci(
  //         data[data.length - 1].bodyFatPercent - data[0].bodyFatPercent
  //       ),
  //     },
  //   ],
  //   title: "From " + data[0].date + " to " + data[data.length - 1].date,
  // }
}

export const getTotalMuscleLbs = (data: Array<BodyMeasurement>) => {
  return {
    data: [
      {
        dateRange: "From " + data[0].date + " to " + data[data.length - 1].date,
        rightArm: roundNumberTo2Deci(
          data[data.length - 1].rightArm - data[0].rightArm
        ),
        leftArm: roundNumberTo2Deci(
          data[data.length - 1].leftArm - data[0].leftArm
        ),
        trunk: roundNumberTo2Deci(data[data.length - 1].trunk - data[0].trunk),
        rightLeg: roundNumberTo2Deci(
          data[data.length - 1].rightLeg - data[0].rightLeg
        ),
        leftLeg: roundNumberTo2Deci(
          data[data.length - 1].leftLeg - data[0].leftLeg
        ),
      },
    ],
    dataCol: ["rightArm", "leftArm", "trunk", "rightLeg", "leftLeg"],
  }
}
