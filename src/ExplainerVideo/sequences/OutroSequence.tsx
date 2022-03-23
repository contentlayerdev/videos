// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
import { ContentlayerLogo } from "../../assets"

const data: {
  title: string
} = {
  title: "Contentlayer",
}

export const OutroSequence = () => {
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
