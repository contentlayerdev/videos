// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import {
  RemixLogo,
  NextLogo,
  SvelteLogo,
  QuestionMarkIcon,
  DatabaseIcon,
  PagesIcon,
} from "../../assets"

const data: {
  title: string
  logos: React.FC[]
  // items: Array<{
  //   text: string
  //   positive: boolean
  // }>
} = {
  title: "Open Content Model",
  logos: [RemixLogo, NextLogo, SvelteLogo],
  // TODO: how to abstract this part?
}

export const OpenContentSequence = () => {
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
          {data.logos.map((Logo, idx) => (
            <span key={idx} className="block">
              <Logo />
            </span>
          ))}
        </div>
        <h2 className="text-7xl text-center font-bold">{data.title}</h2>
      </div>
      <div className="py-24 px-24 flex items-center justify-between">
        <div>
          <div>Sources</div>
          <div>
            <DatabaseIcon />
          </div>
        </div>
        <div>
          <QuestionMarkIcon />
        </div>
        <div>
          <div>Pages</div>
          <div>
            <PagesIcon />
          </div>
        </div>
        {/* {data.items.map((item, idx) => {
          const Icon = item.positive ? logos.PositiveIcon : logos.NegativeIcon
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
        })} */}
      </div>
    </div>
  )
}
