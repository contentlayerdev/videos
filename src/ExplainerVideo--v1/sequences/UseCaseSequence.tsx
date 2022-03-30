// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import { ContentlayerLogo, PositiveIcon, NegativeIcon } from "../../assets"

const data: {
  title: string
  items: Array<{
    text?: string
    positive?: boolean
  }>
} = {
  title: "Built to Scale",
  items: [
    { text: "Hobby projects", positive: true },
    { text: "Personal blogs", positive: true },
    { text: "Documentation sites", positive: true },
    { text: "Enterprise content sites", positive: true },
    { text: "Dynamic applications", positive: true },
    { text: "Anything Next.js can handle", positive: true },
  ],
}

export const UseCaseSequence = () => {
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
      <div className="px-36 grid grid-cols-2 gap-12">
        {data.items.map((item, idx) => {
          if (!item.text) return <span />
          const Icon = item.positive ? PositiveIcon : NegativeIcon
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
