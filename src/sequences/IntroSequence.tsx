import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
import { ContentlayerLogo } from "../assets/ContentlayerLogo"

export const IntroSequence: React.FC<{}> = () => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()
  const opacity = interpolate(
    frame,
    [0, 20, durationInFrames - 10, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" }
  )

  return (
    <div
      style={{ opacity }}
      className="h-full w-full flex justify-center items-center"
    >
      <div className="w-56 text-primary">
        <ContentlayerLogo />
      </div>
    </div>
  )
}
