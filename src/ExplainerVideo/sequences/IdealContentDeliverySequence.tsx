// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import * as logos from "../../assets"

const data: {
  title: string
  items: Array<{
    text?: string
    positive?: boolean
  }>
} = {
  title: "Ideal Content Delivery Technique",
  items: [
    { text: "Type-safe content schema", positive: true },
    { text: "Built-in validations", positive: true },
    { text: "Live reloading after content update", positive: true },
    { text: "Caching and incremental regeneration", positive: true },
    { text: "Scale to complex content relationships", positive: true },
    { text: "Adjust content source without rework", positive: true },
  ],
}

export const IdealContentDeliverySequence = () => {
  // const frame = useCurrentFrame()
  // const { durationInFrames } = useVideoConfig()

  // const fadeControls = {
  //   title: interpolate(
  //     frame,
  //     [0, 20, durationInFrames - 10, durationInFrames],
  //     [0, 1, 1, 0],
  //     { extrapolateRight: "clamp" }
  //   ),
  // }

  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h2 className="text-7xl text-center font-bold">{data.title}</h2>
      </div>
      <div className="px-36 grid grid-cols-2 gap-12">
        {data.items.map((item, idx) => {
          if (!item.text) return <span />
          const Icon = item.positive ? logos.PositiveIcon : logos.NegativeIcon
          return (
            <div key={idx} className="inline-flex items-start">
              <span
                className={`block mr-8 mt-2 ${
                  item.positive ? "text-green" : "text-red"
                }`}
              >
                <Icon />
              </span>
              <span className="text-5xl leading-normal">{item.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
