// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
import { ContentlayerLogo } from "../../assets"

const data: {
  title: string
  subtitle: string
} = {
  title: "Contentlayer",
  subtitle: "Introducing",
}

export const ContentlayerCaseTitleSequence = () => {
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
    <div className="w-full h-full flex items-center justify-center">
      <div className="py-24">
        <h3 className="text-4xl text-center uppercase mb-10">
          {data.subtitle}
        </h3>
        <div className="inline-flex items-center">
          <div className="h-32 text-primary mr-10">
            <ContentlayerLogo />
          </div>
          <h2 className="text-9xl font-bold">{data.title}</h2>
        </div>
      </div>
    </div>
  )
}
