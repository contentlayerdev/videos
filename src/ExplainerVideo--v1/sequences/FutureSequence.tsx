// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import {
  ContentlayerLogo,
  DatabaseIcon,
  PagesIcon,
  Arrow,
  MarkdownLogo,
  MdxLogo,
  NotionLogo,
  ContentfulLogo,
  NextLogo,
  RemixLogo,
  ViteLogo,
  AstroLogo,
} from "../../assets"

const data: {
  title: string
  subtitle: string
  sourceLogos: Array<{ active: boolean; icon: React.FC }>
  frameworkLogos: Array<{ active: boolean; icon: React.FC }>
} = {
  title: "Contentlayer",
  subtitle: "The Future of",
  sourceLogos: [
    { icon: MarkdownLogo, active: true },
    { icon: ContentfulLogo, active: false },
    { icon: MdxLogo, active: true },
    { icon: NotionLogo, active: false },
  ],
  frameworkLogos: [
    { icon: NextLogo, active: true },
    { icon: RemixLogo, active: false },
    { icon: ViteLogo, active: false },
    { icon: AstroLogo, active: false },
  ],
}

export const FutureSequence = () => {
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
        <h3 className="text-3xl text-center uppercase mb-6">{data.subtitle}</h3>
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
          <div className="bg-gray flex items-center justify-between pt-16 px-16 pb-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-8">
              {data.sourceLogos.map((logo, idx) => {
                const Component = logo.icon
                return (
                  <div key={idx} className="h-20 mb-8">
                    <span
                      className={logo.active ? "opacity-100" : "opacity-30"}
                    >
                      <Component />
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <span
            className="block absolute text-gray transform"
            style={{
              left: "28rem",
              top: "-2rem",
              width: "34rem",
              transform: "rotate(2deg)",
            }}
          >
            <Arrow.RightDownArrow />
          </span>

          <span className="block h-56 text-primary">
            <ContentlayerLogo />
          </span>
          <span
            className="block absolute text-gray transform"
            style={{
              left: "68rem",
              bottom: "6rem",
              width: "22rem",
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
            Frameworks
          </div>
          <div className="bg-gray flex items-center justify-between py-16 px-16 rounded-2xl">
            <div className="grid grid-cols-2 gap-16">
              {data.frameworkLogos.map((logo, idx) => {
                const Component = logo.icon
                return (
                  <div key={idx} className="h-20">
                    <span
                      className={logo.active ? "opacity-100" : "opacity-30"}
                    >
                      <Component />
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
