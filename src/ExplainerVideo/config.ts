import { Blank, TBD } from "../components"
import type { SequenceConfig, VideoConfig } from "../types"

import * as Intro from "./100-Intro"
import * as Markdown from "./200-Markdown"
import * as Contentlayer from "./300-Contentlayer"

/* ----- Sequences ----- */

const staticSequenceConfig: SequenceConfig[] = [
  // Intro
  {
    name: "[100-100] Title",
    component: Intro.Title.Sequence,
    durationInFrames: 6 * 30,
    audioSrc: Intro.Audio.Title,
  },
  {
    name: "[100-200] ContentFlow",
    component: Intro.ContentFlow.Sequence,
    durationInFrames: 24 * 30,
    audioSrc: Intro.Audio.ContentFlow,
    timeline: [
      { frame: 0 * 30, component: Blank },
      { frame: 1 * 30, component: Intro.ContentFlow.Timeline.HighlightNext },
      { frame: 2.5 * 30, component: Intro.ContentFlow.Timeline.HighlightRemix },
      { frame: 4 * 30, component: Intro.ContentFlow.Timeline.HighlightSvelte },
      {
        frame: 5.5 * 30,
        component: Intro.ContentFlow.Timeline.HighlightAstro,
      },
      { frame: 7 * 30, component: TBD },
    ],
  },
  // Markdown
  {
    name: "[200-100] Title",
    component: Markdown.Title.Sequence,
    durationInFrames: 11 * 30,
    audioSrc: Markdown.Audio.Title,
  },
  {
    name: "[200-200] Demo",
    component: Markdown.Demo.Sequence,
    durationInFrames: 64 * 30,
    // audioSrc: Markdown.Audio.Demo,
  },
  {
    name: "[200-300] Challenges",
    component: Markdown.Challenges.Sequence,
    durationInFrames: 30 * 30,
    audioSrc: Markdown.Audio.Challenges,
  },
  // Contentlayer
  {
    name: "[300-100] Title",
    component: Contentlayer.Title.Sequence,
    durationInFrames: 3 * 30,
    audioSrc: Contentlayer.Audio.Title,
  },
  {
    name: "[300-200] ContentFlow",
    component: Contentlayer.ContentFlow.Sequence,
    durationInFrames: 11 * 30,
    audioSrc: Contentlayer.Audio.ContentFlow,
  },
  {
    name: "[300-300] Demo",
    component: Contentlayer.Demo.Sequence,
    durationInFrames: 109 * 30,
    // audioSrc: Contentlayer.Audio.Demo,
  },
  {
    name: "[300-400] Benefits",
    component: Contentlayer.Benefits.Sequence,
    durationInFrames: 28 * 30,
    audioSrc: Contentlayer.Audio.Benefits,
  },
  {
    name: "[300-500] Performance",
    component: Contentlayer.Performance.Sequence,
    durationInFrames: 25 * 30,
    audioSrc: Contentlayer.Audio.Performance,
  },
  {
    name: "[300-600] Outro",
    component: Contentlayer.Outro.Sequence,
    durationInFrames: 25 * 30,
    audioSrc: Contentlayer.Audio.Outro,
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
