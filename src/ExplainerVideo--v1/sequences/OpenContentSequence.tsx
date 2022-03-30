// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import {
  RemixLogo,
  NextLogo,
  SvelteLogo,
  QuestionMarkIcon,
  DatabaseIcon,
  PagesIcon,
  Arrow,
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
      <div className="py-32 px-24 flex items-center justify-between relative">
        <div className="relative">
          <div
            className="text-4xl uppercase py-6 px-12 border transform -rotate-12 absolute rounded-xl"
            style={{ top: "-5rem", left: "-2rem" }}
          >
            Sources
          </div>
          <div className="bg-gray flex items-center justify-between py-16 px-32 rounded-2xl">
            <span className="h-32 block">
              <DatabaseIcon />
            </span>
          </div>
        </div>
        <div>
          <span
            className="block absolute text-gray transform"
            style={{
              left: "24rem",
              top: "-2rem",
              width: "30rem",
              transform: "rotate(-8deg)",
            }}
          >
            <Arrow.RightDownArrow />
          </span>

          <span className="block h-56">
            <QuestionMarkIcon />
          </span>
          <span
            className="block absolute text-gray transform"
            style={{
              left: "60rem",
              bottom: "3rem",
              width: "28rem",
              transform: "rotate(-10deg)",
            }}
          >
            <Arrow.RightLoopArrow />
          </span>
        </div>
        <div className="relative">
          <div
            className="text-4xl uppercase py-6 px-12 border transform rotate-12 absolute rounded-xl"
            style={{ top: "-5rem", right: "-2rem" }}
          >
            Pages
          </div>
          <div className="bg-gray flex items-center justify-between py-16 px-32 rounded-2xl">
            <span className="h-32 block">
              <PagesIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
