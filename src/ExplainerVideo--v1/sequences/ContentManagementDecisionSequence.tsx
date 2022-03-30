// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import * as logos from "../../assets"
// import type { LogoName } from "../../assets"

type LogoColumn = {
  heading: string
  logos: React.FC[]
}

const data: {
  title: string
  columns: LogoColumn[]
} = {
  title: "Identifying the Right CMS",
  columns: [
    {
      heading: "Git (Local)",
      logos: [logos.MarkdownLogo, logos.MdxLogo],
    },
    {
      heading: "Headless (Remote)",
      logos: [logos.ContentfulLogo, logos.SanityLogo],
    },
  ],
}

export const ContentManagementDecisionSequence = () => {
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
      <div className="py-24 px-48 grid grid-cols-2 gap-16">
        {data.columns.map((column, idx) => {
          return (
            <div key={idx} className="border rounded-lg py-12 px-32">
              <h2 className="text-5xl text-center mb-16 font-bold">
                {column.heading}
              </h2>
              <div className="grid grid-cols-2 gap-24">
                {column.logos.map((Logo, idx) => (
                  <span className="h-24">
                    <Logo />
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
