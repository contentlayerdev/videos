import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
import { ContentlayerLogo } from "../../assets/ContentlayerLogo"

const data: {
  title: string
  steps: string[]
} = {
  title: "The First 3 Decisions",
  steps: ["Front-end Framework", "Content Management", "Content Delivery"],
}

export const ThreeDecisionsSequence = () => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

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
      <div className="py-24 px-48 flex flex-col h-full">
        {data.steps.map((step, idx) => {
          return (
            <div key={idx} className="inline-flex items-center mb-16">
              <span className="border-4 border-primary mr-12 w-24 h-24 rounded-full text-primary text-5xl flex items-center justify-center">
                {idx + 1}
              </span>
              <span className="text-6xl">{step}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}