import { Sequence } from "remotion"

import { config } from "./config"

export const ExplainerVideo: React.FC<{}> = () => {
  return (
    <div className="video-layout bg-black text-white">
      {config.sequences.map((sequence) => {
        const SequenceComponent = sequence.component
        return (
          <Sequence
            from={sequence.from ?? 0}
            durationInFrames={sequence.durationInFrames}
          >
            <SequenceComponent />
          </Sequence>
        )
      })}
    </div>
  )
}

export { config }
