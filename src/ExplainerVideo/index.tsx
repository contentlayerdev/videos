import { Sequence } from "remotion"

import { IntroSequence, ThreeDecisionsSequence } from "./sequences"

export const ExplainerVideo: React.FC<{}> = () => {
  return (
    <div className="video-layout bg-black text-white">
      <Sequence from={0} durationInFrames={60}>
        <IntroSequence />
      </Sequence>
      <Sequence from={60} durationInFrames={10}>
        <ThreeDecisionsSequence />
      </Sequence>
    </div>
  )
}
