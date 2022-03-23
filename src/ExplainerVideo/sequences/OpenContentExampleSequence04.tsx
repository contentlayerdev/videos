// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import * as logos from "../../assets"

const data: {
  title: string
  logos: React.FC[]
  items: Array<{
    text?: string
    positive?: boolean
  }>
} = {
  title: "Next.js + Local Markdown",
  logos: [logos.NextLogo],
  items: [
    { text: "Lots of dependencies", positive: false },
    { text: "Builds are slow", positive: false },
    { text: "Caching is hard", positive: false },
    { text: "No content validation", positive: false },
    { text: "Live reloading is tricky", positive: false },
    { text: "Content isn't relatable", positive: false },
  ],
}

export const OpenContentExampleSequence04 = () => {
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
        <div className="flex max-w-2xl mx-auto h-20 items-center justify-between mb-12">
          <span />
          {data.logos.map((Logo, idx) => (
            <span key={idx} className="block">
              <Logo />
            </span>
          ))}
          <span />
        </div>
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
