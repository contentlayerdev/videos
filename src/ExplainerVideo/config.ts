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
    name: "[Intro] Title",
    component: Intro.Intro.Sequence,
    durationInFrames: 4 * 30,
    audioSrc: IntroAudio.Intro,
  },
  {
    name: "[Intro] Modern Web Stack",
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
      {
        frame: 5 * 30,
        component: Intro.ModernWebStack.Timeline.Base,
      },
      {
        frame: 6 * 30,
        component: Intro.ModernWebStack.Timeline.ShowPages,
      },
      {
        frame: 8 * 30,
        component: Intro.ModernWebStack.Timeline.ShowContent,
      },
      {
        frame: 10 * 30,
        component: Intro.ModernWebStack.Timeline.ShowProcessor,
      },
      {
        frame: 12 * 30,
        component: Intro.ModernWebStack.Timeline.ShowEverything,
      },
    ],
  },
  // Next.js + Markdown
  {
    name: "[Next + MD] Intro",
    component: NextMarkdown.Intro.Sequence,
    durationInFrames: 7 * 30,
    audioSrc: NextMarkdownAudio.Intro,
  },
  {
    name: "[Next + MD] Content Files",
    component: NextMarkdown.ContentFiles.Sequence,
    durationInFrames: 14 * 30,
    audioSrc: NextMarkdownAudio.ContentFiles,
    timeline: [
      {
        frame: 0 * 30,
        component: NextMarkdown.ContentFiles.Timeline.EmptyFileTree,
      },
      {
        frame: 2 * 30,
        component: NextMarkdown.ContentFiles.Timeline.FileTreeWithFiles,
      },
      {
        frame: 4 * 30,
        component: NextMarkdown.ContentFiles.Timeline.SlideFileTree,
      },
      {
        frame: 5 * 30,
        component: NextMarkdown.ContentFiles.Timeline.EmptyPost,
      },
      {
        frame: 5.5 * 30,
        component: NextMarkdown.ContentFiles.Timeline.AddPostFrontmatter,
      },
      {
        frame: 7.5 * 30,
        component: NextMarkdown.ContentFiles.Timeline.AddPostBody,
      },
    ],
  },
  {
    name: "[Next + MD] Generate Routes",
    component: NextMarkdown.GenerateRoutes.Sequence,
    durationInFrames: 19 * 30,
    audioSrc: NextMarkdownAudio.GenerateRoutes,
    timeline: [
      {
        frame: 0 * 30,
        component: NextMarkdown.GenerateRoutes.Timeline.BlankSlate,
      },
      {
        frame: 2 * 30,
        component: NextMarkdown.GenerateRoutes.Timeline.ShowFilename,
      },
      {
        frame: 4 * 30,
        component: NextMarkdown.GenerateRoutes.Timeline.ShowCodeSnippet,
      },
      {
        frame: 6 * 30,
        component: NextMarkdown.GenerateRoutes.Timeline.HighlightGetStaticPaths,
      },
      {
        frame: 8 * 30,
        component: NextMarkdown.GenerateRoutes.Timeline.HighlightFilePaths,
      },
      {
        frame: 10 * 30,
        component: NextMarkdown.GenerateRoutes.Timeline.HighlightPageUrlPaths,
      },
    ],
  },
  {
    name: "[Next + MD] Parsing Utility",
    component: NextMarkdown.ParsingUtility.Sequence,
    durationInFrames: 18 * 30,
    audioSrc: NextMarkdownAudio.ParsingUtility,
    timeline: [
      {
        frame: 0 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.BlankSlate,
      },
      {
        frame: 2 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.ShowGetStaticProps,
      },
      {
        frame: 4 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.RetrieveSourceFile,
      },
      {
        frame: 6 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.AddDependencies,
      },
      {
        frame: 8 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.AddTransformCode,
      },
      {
        frame: 10 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.AddReturnStatement,
      },
    ],
  },
  {
    name: "[Next + MD] Challenges",
    component: NextMarkdown.Challenges.Sequence,
    durationInFrames: 56 * 30,
    audioSrc: NextMarkdownAudio.Challenges,
    timeline: [
      {
        frame: 0 * 30,
        component: NextMarkdown.Challenges.Timeline.EmptyPoints,
      },
      {
        frame: 2 * 30,
        component: NextMarkdown.Challenges.Timeline.Point01,
      },
      {
        frame: 4 * 30,
        component: NextMarkdown.Challenges.Timeline.Point02,
      },
      {
        frame: 6 * 30,
        component: NextMarkdown.Challenges.Timeline.Point03,
      },
      {
        frame: 8 * 30,
        component: NextMarkdown.Challenges.Timeline.Point04,
      },
      {
        frame: 10 * 30,
        component: NextMarkdown.Challenges.Timeline.Point05,
      },
      {
        frame: 12 * 30,
        component: NextMarkdown.Challenges.Timeline.Point06,
      },
    ],
  },
  // Next.js + Contentlayer
  {
    name: "[CL + MD] Intro",
    component: NextContentlayer.Intro.Sequence,
    durationInFrames: 3 * 30,
    audioSrc: NextContentlayerAudio.Intro,
  },
  {
    name: "[CL + MD] Modern Stack",
    component: NextContentlayer.ModernWebStack.Sequence,
    durationInFrames: 10 * 30,
    audioSrc: NextContentlayerAudio.ModernWebStack,
    timeline: [
      {
        frame: 0 * 30,
        component: NextContentlayer.ModernWebStack.Timeline.EmptyBody,
      },
      {
        frame: 2 * 30,
        component: NextContentlayer.ModernWebStack.Timeline.ShowProcessor,
      },
      {
        frame: 4 * 30,
        component: NextContentlayer.ModernWebStack.Timeline.ShowContent,
      },
      {
        frame: 6 * 30,
        component: NextContentlayer.ModernWebStack.Timeline.ShowPages,
      },
      {
        frame: 8 * 30,
        component: NextContentlayer.ModernWebStack.Timeline.ShowEverything,
      },
    ],
  },
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
