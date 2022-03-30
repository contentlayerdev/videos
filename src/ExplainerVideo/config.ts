import { FC } from "react"

import * as Intro from "./100-Intro"
import * as NextMarkdown from "./200-NextMarkdown"
import * as NextContentlayer from "./300-NextContentlayer"

/* ----- Type Definitions ----- */

type SequenceConfig = {
  component: FC
  durationInFrames: number
  from?: number
}

type VideoConfig = {
  sequences: SequenceConfig[]
  totalDurationInFrames: number
  fps: number
  width: number
  height: number
}

/* ----- Sequences ----- */

const staticSequenceConfig: SequenceConfig[] = [
  // Intro
  { component: Intro.Intro, durationInFrames: 10 },
  { component: Intro.ModernWebStack, durationInFrames: 10 },
  // Next.js + Markdown
  { component: NextMarkdown.Intro, durationInFrames: 10 },
  { component: NextMarkdown.ContentFiles, durationInFrames: 10 },
  { component: NextMarkdown.GenerateRoutes, durationInFrames: 10 },
  { component: NextMarkdown.ParsingUtility, durationInFrames: 10 },
  { component: NextMarkdown.Challenges, durationInFrames: 10 },
  // Next.js + Contentlayer
  { component: NextContentlayer.Intro, durationInFrames: 10 },
  { component: NextContentlayer.ModernStack, durationInFrames: 10 },
  { component: NextContentlayer.Configuration, durationInFrames: 10 },
  { component: NextContentlayer.ContentTransformation, durationInFrames: 10 },
  { component: NextContentlayer.GetStaticPaths, durationInFrames: 10 },
  { component: NextContentlayer.GetStaticProps, durationInFrames: 10 },
  { component: NextContentlayer.Benefits, durationInFrames: 10 },
  { component: NextContentlayer.Outro, durationInFrames: 10 },
]

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
