import { Blank } from "../components"
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
    durationInFrames: 23 * 30,
    audioSrc: Intro.Audio.ContentFlow,
    timeline: [
      { frame: 0 * 30, component: Blank },
      { frame: 1 * 30, component: Intro.ContentFlow.Timeline.HighlightNext },
      { frame: 2.5 * 30, component: Intro.ContentFlow.Timeline.HighlightRemix },
      { frame: 4 * 30, component: Intro.ContentFlow.Timeline.HighlightSvelte },
      {
        frame: 5.25 * 30,
        component: Intro.ContentFlow.Timeline.HighlightAstro,
      },
      { frame: 10 * 30, component: Blank },
      { frame: 11 * 30, component: Intro.ContentFlow.Timeline.ShowBoxes },
      { frame: 12 * 30, component: Intro.ContentFlow.Timeline.ShowPages },
      { frame: 15 * 30, component: Intro.ContentFlow.Timeline.ShowContent },
      { frame: 18 * 30, component: Intro.ContentFlow.Timeline.ShowProcessor },
    ],
  },
  // Markdown
  {
    name: "[200-100] Title",
    component: Markdown.Title.Sequence,
    durationInFrames: 11.5 * 30,
    audioSrc: Markdown.Audio.Title,
    timeline: [
      { frame: 0 * 30, component: Blank },
      { frame: 1 * 30, component: Markdown.Title.Timeline.ShowDIY },
      { frame: 1.5 * 30, component: Markdown.Title.Timeline.ShowContent },
      { frame: 2.5 * 30, component: Markdown.Title.Timeline.ShowSucks },
      { frame: 3.5 * 30, component: Markdown.Title.Timeline.ShowSeriously },
      { frame: 6 * 30, component: Markdown.Title.Timeline.ShowDemoTime },
      { frame: 8.5 * 30, component: Markdown.Title.Timeline.ShowNext },
      { frame: 9 * 30, component: Markdown.Title.Timeline.ShowPlus },
      { frame: 9.25 * 30, component: Markdown.Title.Timeline.ShowMarkdown },
    ],
  },
  {
    name: "[200-200] Demo",
    component: Markdown.Demo.Sequence,
    durationInFrames: 64 * 30,
  },
  {
    name: "[200-300] Challenges",
    component: Markdown.Challenges.Sequence,
    durationInFrames: 30 * 30,
    audioSrc: Markdown.Audio.Challenges,
    timeline: [
      { frame: 0 * 30, component: Blank },
      { frame: 7 * 30, component: Markdown.Challenges.Timeline.EmptyPoints },
      { frame: 9 * 30, component: Markdown.Challenges.Timeline.Point01 },
      { frame: 13 * 30, component: Markdown.Challenges.Timeline.Point02 },
      { frame: 16 * 30, component: Markdown.Challenges.Timeline.Point03 },
      { frame: 21 * 30, component: Markdown.Challenges.Timeline.Point04 },
      { frame: 25 * 30, component: Markdown.Challenges.Timeline.Point05 },
    ],
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
    timeline: [
      {
        frame: 0 * 30,
        component: Contentlayer.ContentFlow.Timeline.ShowBoxes,
      },
      {
        frame: 2 * 30,
        component: Contentlayer.ContentFlow.Timeline.ShowContent,
      },
      {
        frame: 3 * 30,
        component: Contentlayer.ContentFlow.Timeline.ShowPages,
      },
      {
        frame: 4 * 30,
        component: Contentlayer.ContentFlow.Timeline.ShowProcessor,
      },
      {
        frame: 6 * 30,
        component: Contentlayer.ContentFlow.Timeline.ReplaceQuestion,
      },
    ],
  },
  {
    name: "[300-300] Demo",
    component: Contentlayer.Demo.Sequence,
    durationInFrames: 104.5 * 30,
  },
  {
    name: "[300-400] Benefits",
    component: Contentlayer.Benefits.Sequence,
    durationInFrames: 28 * 30,
    audioSrc: Contentlayer.Audio.Benefits,
    timeline: [
      { frame: 0 * 30, component: Blank },
      { frame: 2 * 30, component: Contentlayer.Benefits.Timeline.EmptyPoints },
      { frame: 3.5 * 30, component: Contentlayer.Benefits.Timeline.Point01 },
      { frame: 8 * 30, component: Contentlayer.Benefits.Timeline.Point02 },
      { frame: 12.5 * 30, component: Contentlayer.Benefits.Timeline.Point03 },
      { frame: 16 * 30, component: Contentlayer.Benefits.Timeline.Point04 },
      { frame: 19.5 * 30, component: Contentlayer.Benefits.Timeline.Point05 },
      { frame: 23.5 * 30, component: Contentlayer.Benefits.Timeline.Point06 },
    ],
  },
  {
    name: "[300-500] Performance",
    component: Contentlayer.Performance.Sequence,
    durationInFrames: 25 * 30,
    audioSrc: Contentlayer.Audio.Performance,
    timeline: [
      { frame: 0 * 30, component: Blank },
      {
        frame: 4 * 30,
        component: Contentlayer.Performance.Timeline.Stage00,
      }, // show background: ;
      { frame: 6 * 30, component: Contentlayer.Performance.Timeline.Stage01 }, // show empty table
      { frame: 8 * 30, component: Contentlayer.Performance.Timeline.Stage02 }, // DIY CL labels
      { frame: 10 * 30, component: Contentlayer.Performance.Timeline.Stage03 }, // add 1k label
      { frame: 12 * 30, component: Contentlayer.Performance.Timeline.Stage04 }, // DIY v CL score
      { frame: 14 * 30, component: Contentlayer.Performance.Timeline.Stage05 }, // gatsby label
      { frame: 16 * 30, component: Contentlayer.Performance.Timeline.Stage06 }, // gatsby score
      { frame: 20 * 30, component: Contentlayer.Performance.Timeline.Stage07 }, // show warm build label
      { frame: 22 * 30, component: Contentlayer.Performance.Timeline.Stage08 }, // show warm build scores
    ],
  },
  {
    name: "[300-600] Outro",
    component: Contentlayer.Outro.Sequence,
    durationInFrames: 25 * 30,
    audioSrc: Contentlayer.Audio.Outro,
    timeline: [
      {
        frame: 0 * 30,
        component: Blank,
      },
      {
        frame: 2 * 30,
        component: Contentlayer.Outro.Timeline.BlankSlate,
      },
      {
        frame: 6 * 30,
        component: Contentlayer.Outro.Timeline.ShowTutorialImage,
      },
      {
        frame: 9 * 30,
        component: Contentlayer.Outro.Timeline.ShowExamplesImage,
      },
      {
        frame: 12 * 30,
        component: Contentlayer.Outro.Timeline.ShowGettingStartedImage,
      },
      {
        frame: 18 * 30,
        component: Contentlayer.Outro.Timeline.ShowCommunityImage,
      },
      {
        frame: 23 * 30,
        component: Contentlayer.Outro.Timeline.ShowFinalScreen,
      },
    ],
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
