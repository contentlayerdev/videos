import { Sequence } from "remotion"

import { IntroSequence, StepsSequence } from "../sequences"

export const ExplainerVideo: React.FC<{}> = () => {
  return (
    <div className="video-layout bg-black text-white">
      <Sequence from={0} durationInFrames={60}>
        <IntroSequence />
      </Sequence>
      <Sequence from={60} durationInFrames={30}>
        <StepsSequence
          title="The First 3 Decisions"
          steps={[
            "Front-end Framework",
            "Content Management",
            "Content Deliver",
          ]}
        />
      </Sequence>
    </div>
  )
}
