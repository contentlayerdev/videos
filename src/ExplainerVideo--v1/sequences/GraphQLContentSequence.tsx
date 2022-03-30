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
  title: "GraphQL Content System",
  logos: [logos.GatsbyLogo],
  items: [
    { text: "Extensive plugin system", positive: true },
    { text: "Component frameworks not included", positive: false },
    { text: "Serves simple use cases", positive: true },
    { text: "No content validations or data types", positive: false },
    {},
    {
      text: "Complex content relationships are difficult",
      positive: false,
    },
  ],
}

export const GraphQLContentSequence = () => {
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
      <div className="grid grid-cols-2 px-12 gap-12">
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
