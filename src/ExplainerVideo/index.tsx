import { Audio, Sequence } from "remotion"

import { config } from "./config"

export const ExplainerVideo: React.FC<{}> = () => {
  return (
    <div className="video-layout bg-black text-white">
      {config.sequences.map((sequence, idx) => {
        const SequenceComponent = sequence.component
        return (
          <Sequence
            from={sequence.from!}
            durationInFrames={sequence.durationInFrames}
            key={idx}
            name={sequence.name}
          >
            <SequenceComponent timeline={sequence.timeline ?? []} />
            {sequence.audioSrc && <Audio src={sequence.audioSrc} />}
          </Sequence>
        )
      })}
    </div>
  )
}

export { config }
