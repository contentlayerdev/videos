import type { SequenceConfig, VideoConfig } from "../types"

import * as Intro from "./100-Intro"
import * as IntroAudio from "./100-Intro/audio"

import * as NextMarkdown from "./200-NextMarkdown"
import * as NextMarkdownAudio from "./200-NextMarkdown/audio"

import * as NextContentlayer from "./300-NextContentlayer"
import * as NextContentlayerAudio from "./300-NextContentlayer/audio"

/* ----- Sequences ----- */

const staticSequenceConfig: SequenceConfig[] = [
  // Intro
  {
    component: Intro.Intro.Sequence,
    durationInFrames: 4 * 30,
    audioSrc: IntroAudio.Intro,
  },
  {
    component: Intro.ModernWebStack.Sequence,
    durationInFrames: 30 * 30,
    audioSrc: IntroAudio.ModernWebStack,
    timeline: [
      {
        frame: 0,
        component: Intro.ModernWebStack.Timeline.Base,
      },
      {
        frame: 1 * 30,
        component: Intro.ModernWebStack.Timeline.HighlightNext,
      },
      {
        frame: 2 * 30,
        component: Intro.ModernWebStack.Timeline.HighlightRemix,
      },
      {
        frame: 3 * 30,
        component: Intro.ModernWebStack.Timeline.HighlightSvelte,
      },
      {
        frame: 4 * 30,
        component: Intro.ModernWebStack.Timeline.HighlightAstro,
      },
    ],
  },
  // Next.js + Markdown
  // {
  //   component: NextMarkdown.Intro,
  //   durationInFrames: 7 * 30,
  //   audioSrc: NextMarkdownAudio.Intro,
  // },
  // {
  //   component: NextMarkdown.ContentFiles,
  //   durationInFrames: 14 * 30,
  //   audioSrc: NextMarkdownAudio.ContentFiles,
  // },
  // {
  //   component: NextMarkdown.GenerateRoutes,
  //   durationInFrames: 19 * 30,
  //   audioSrc: NextMarkdownAudio.GenerateRoutes,
  // },
  // {
  //   component: NextMarkdown.ParsingUtility,
  //   durationInFrames: 18 * 30,
  //   audioSrc: NextMarkdownAudio.ParsingUtility,
  // },
  // {
  //   component: NextMarkdown.Challenges,
  //   durationInFrames: 56 * 30,
  //   audioSrc: NextMarkdownAudio.Challenges,
  // },
  // Next.js + Contentlayer
  // {
  //   component: NextContentlayer.Intro,
  //   durationInFrames: 3 * 30,
  //   audioSrc: NextContentlayerAudio.Intro,
  // },
  // {
  //   component: NextContentlayer.ModernStack,
  //   durationInFrames: 10 * 30,
  //   audioSrc: NextContentlayerAudio.ModernStack,
  // },
  // {
  //   component: NextContentlayer.Configuration,
  //   durationInFrames: 32 * 30,
  //   audioSrc: NextContentlayerAudio.Configuration,
  // },
  // {
  //   component: NextContentlayer.ContentTransformation,
  //   durationInFrames: 21 * 30,
  //   audioSrc: NextContentlayerAudio.ContentTransformation,
  // },
  // {
  //   component: NextContentlayer.GetStaticPaths,
  //   durationInFrames: 8 * 30,
  //   audioSrc: NextContentlayerAudio.GetStaticPaths,
  // },
  // {
  //   component: NextContentlayer.GetStaticProps,
  //   durationInFrames: 11 * 30,
  //   audioSrc: NextContentlayerAudio.GetStaticProps,
  // },
  // {
  //   component: NextContentlayer.Benefits,
  //   durationInFrames: 54 * 30,
  //   audioSrc: NextContentlayerAudio.Benefits,
  // },
  // {
  //   component: NextContentlayer.Outro,
  //   durationInFrames: 5 * 30,
  //   audioSrc: NextContentlayerAudio.Outro,
  // },
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
