// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import { ContentlayerLogo, PositiveIcon, NegativeIcon } from "../../assets"

const data: {
  title: string
  items: Array<{
    text: string
    positive: boolean
  }>
} = {
  title: "Contentlayer is Fast",
  items: [
    {
      text: "Quick server boot, incremental regeneration",
      positive: true,
    },
    { text: "Fast builds, CI finishes faster", positive: true },
    {
      text: "Minimal bundle size, maximum performance",
      positive: true,
    },
  ],
}

export const PerformanceSequence = () => {
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
        <div className="h-24 text-primary mb-8">
          <ContentlayerLogo />
        </div>
        <h2 className="text-8xl text-center font-bold">{data.title}</h2>
      </div>
      <div className="py-12 px-64 flex flex-col h-full">
        {data.items.map((item, idx) => {
          const Icon = item.positive ? PositiveIcon : NegativeIcon
          return (
            <div key={idx} className="inline-flex items-center mb-16">
              <span
                className={`block mr-8 ${
                  item.positive ? "text-green" : "text-red"
                }`}
              >
                <Icon />
              </span>
              <span className="text-6xl">{item.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
