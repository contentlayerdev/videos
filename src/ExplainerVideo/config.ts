import type { SequenceConfig, VideoConfig } from "../types"

import * as Intro from "./100-Intro"
// import * as NextMarkdown from "./200-NextMarkdown"
// import * as NextContentlayer from "./300-NextContentlayer"

/* ----- Sequences ----- */

const staticSequenceConfig: SequenceConfig[] = [
  // Intro
  {
    name: "[Intro] Title",
    component: Intro.Intro.Sequence,
    durationInFrames: 6 * 30,
    audioSrc: Intro.Audio.Intro,
  },
]

// Add from prop by finding the total duration passed in previous sequences.
const sequences = staticSequenceConfig.map((sequence, idx) => {
  sequence.from = staticSequenceConfig
    .slice(0, idx)
    .map((s) => s.durationInFrames)
    .reduce((prev, curr) => (prev ?? 0) + (curr ?? 0), 0)

  return sequence
})

/* ----- Exported Config ----- */

const totalDurationInFrames = sequences
  .map((s) => s.durationInFrames)
  .reduce((prev, curr) => prev + curr, 0)

export const config: VideoConfig = {
  sequences,
  totalDurationInFrames,
  fps: 30,
  width: 1920,
  height: 1080,
}
