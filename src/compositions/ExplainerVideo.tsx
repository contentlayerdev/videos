import { Sequence } from "remotion"

import { IntroSequence } from "../sequences/IntroSequence"

export const ExplainerVideo: React.FC<{}> = () => {
  return (
    <div className="video-layout bg-black text-white">
      <Sequence from={0} durationInFrames={60}>
        <IntroSequence />
      </Sequence>
    </div>
  )
}
