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
    durationInFrames: 6 * 30,
    audioSrc: IntroAudio.Intro,
  },
  {
    name: "[Intro] Modern Web Stack",
    component: Intro.ModernWebStack.Sequence,
    durationInFrames: 29 * 30,
    audioSrc: IntroAudio.ModernWebStack,
    timeline: [
      {
        frame: 0,
        component: Intro.ModernWebStack.Timeline.Base,
      },
      {
        frame: 10 * 30,
        component: Intro.ModernWebStack.Timeline.HighlightNext,
      },
      {
        frame: 11 * 30,
        component: Intro.ModernWebStack.Timeline.HighlightRemix,
      },
      {
        frame: 12 * 30,
        component: Intro.ModernWebStack.Timeline.HighlightSvelte,
      },
      {
        frame: 13 * 30,
        component: Intro.ModernWebStack.Timeline.HighlightAstro,
      },
      {
        frame: 14 * 30,
        component: Intro.ModernWebStack.Timeline.Base,
      },
      {
        frame: 15 * 30,
        component: Intro.ModernWebStack.Timeline.ShowPages,
      },
      {
        frame: 20.5 * 30,
        component: Intro.ModernWebStack.Timeline.ShowContent,
      },
      {
        frame: 25 * 30,
        component: Intro.ModernWebStack.Timeline.ShowProcessor,
      },
    ],
  },
  // Next.js + Markdown
  {
    name: "[Next + MD] Intro",
    component: NextMarkdown.Intro.Sequence,
    durationInFrames: 8 * 30,
    audioSrc: NextMarkdownAudio.Intro,
  },
  {
    name: "[Next + MD] Content Files",
    component: NextMarkdown.ContentFiles.Sequence,
    durationInFrames: 15 * 30,
    audioSrc: NextMarkdownAudio.ContentFiles,
    timeline: [
      {
        frame: 0 * 30,
        component: NextMarkdown.ContentFiles.Timeline.EmptyFileTree,
      },
      {
        frame: 4 * 30,
        component: NextMarkdown.ContentFiles.Timeline.FileTreeWithFiles,
      },
      {
        frame: 7 * 30,
        component: NextMarkdown.ContentFiles.Timeline.SlideFileTree,
      },
      {
        frame: 8 * 30,
        component: NextMarkdown.ContentFiles.Timeline.EmptyPost,
      },
      {
        frame: 9 * 30,
        component: NextMarkdown.ContentFiles.Timeline.AddPostFrontmatter,
      },
      {
        frame: 12 * 30,
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
        frame: 3 * 30,
        component: NextMarkdown.GenerateRoutes.Timeline.ShowFilename,
      },
      {
        frame: 5 * 30,
        component: NextMarkdown.GenerateRoutes.Timeline.ShowCodeSnippet,
      },
      {
        frame: 12 * 30,
        component: NextMarkdown.GenerateRoutes.Timeline.HighlightFilePaths,
      },
      {
        frame: 15 * 30,
        component: NextMarkdown.GenerateRoutes.Timeline.HighlightPageUrlPaths,
      },
    ],
  },
  {
    name: "[Next + MD] Parsing Utility",
    component: NextMarkdown.ParsingUtility.Sequence,
    durationInFrames: 19 * 30,
    audioSrc: NextMarkdownAudio.ParsingUtility,
    timeline: [
      {
        frame: 0 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.BlankSlate,
      },
      {
        frame: 2.5 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.ShowGetStaticProps,
      },
      {
        frame: 7 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.RetrieveSourceFile,
      },
      {
        frame: 12 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.AddDependencies,
      },
      {
        frame: 14 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.AddTransformCode,
      },
      {
        frame: 17 * 30,
        component: NextMarkdown.ParsingUtility.Timeline.AddReturnStatement,
      },
    ],
  },
  {
    name: "[Next + MD] Challenges",
    component: NextMarkdown.Challenges.Sequence,
    durationInFrames: 50 * 30,
    audioSrc: NextMarkdownAudio.Challenges,
    timeline: [
      {
        frame: 0 * 30,
        component: NextMarkdown.Challenges.Timeline.EmptyPoints,
      },
      {
        frame: 16 * 30,
        component: NextMarkdown.Challenges.Timeline.Point01,
      },
      {
        frame: 20 * 30,
        component: NextMarkdown.Challenges.Timeline.Point02,
      },
      {
        frame: 24 * 30,
        component: NextMarkdown.Challenges.Timeline.Point03,
      },
      {
        frame: 33 * 30,
        component: NextMarkdown.Challenges.Timeline.Point04,
      },
      {
        frame: 40 * 30,
        component: NextMarkdown.Challenges.Timeline.Point05,
      },
      {
        frame: 45 * 30,
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
    durationInFrames: 11 * 30,
    audioSrc: NextContentlayerAudio.ModernWebStack,
    timeline: [
      {
        frame: 0 * 30,
        component: NextContentlayer.ModernWebStack.Timeline.EmptyBody,
      },
      {
        frame: 0.5 * 30,
        component: NextContentlayer.ModernWebStack.Timeline.ShowProcessor,
      },
      {
        frame: 4 * 30,
        component: NextContentlayer.ModernWebStack.Timeline.ShowContent,
      },
      {
        frame: 5.5 * 30,
        component: NextContentlayer.ModernWebStack.Timeline.ShowPages,
      },
      {
        frame: 9 * 30,
        component: NextContentlayer.ModernWebStack.Timeline.ShowEverything,
      },
    ],
  },
  {
    name: "[CL + MD] Configuration",
    component: NextContentlayer.Configuration.Sequence,
    durationInFrames: 32 * 30,
    audioSrc: NextContentlayerAudio.Configuration,
    timeline: [
      {
        frame: 0 * 30,
        component: NextContentlayer.Configuration.Timeline.BlankSlate,
      },
      {
        frame: 3.5 * 30,
        component:
          NextContentlayer.Configuration.Timeline.ShowContentlayerConfig,
      },
      {
        frame: 11 * 30,
        component: NextContentlayer.Configuration.Timeline.HighlightPost,
      },
      {
        frame: 13 * 30,
        component: NextContentlayer.Configuration.Timeline.HighlightTitleField,
      },
      {
        frame: 13.75 * 30,
        component: NextContentlayer.Configuration.Timeline.HighlightDateField,
      },
      {
        frame: 16 * 30,
        component: NextContentlayer.Configuration.Timeline.HighlightFilePath,
      },
      {
        frame: 23 * 30,
        component: NextContentlayer.Configuration.Timeline.HighlightExport,
      },
      {
        frame: 26 * 30,
        component:
          NextContentlayer.Configuration.Timeline.HideContentlayerConfig,
      },
      {
        frame: 28 * 30,
        component: NextContentlayer.Configuration.Timeline.ShowNextConfig,
      },
    ],
  },
  {
    component: NextContentlayer.ContentTransformation.Sequence,
    durationInFrames: 20 * 30,
    audioSrc: NextContentlayerAudio.ContentTransformation,
    timeline: [
      {
        frame: 0 * 30,
        component:
          NextContentlayer.ContentTransformation.Timeline.ShowContentFiles,
      },
      {
        frame: 3 * 30,
        component:
          NextContentlayer.ContentTransformation.Timeline.ShowBuildArrow,
      },
      {
        frame: 5.5 * 30,
        component:
          NextContentlayer.ContentTransformation.Timeline.ShowGeneratedFiles,
      },
      {
        frame: 8 * 30,
        component:
          NextContentlayer.ContentTransformation.Timeline.MoveGeneratedFiles,
      },
      {
        frame: 9 * 30,
        component:
          NextContentlayer.ContentTransformation.Timeline.ShowEmptyPreview,
      },
      {
        frame: 10 * 30,
        component:
          NextContentlayer.ContentTransformation.Timeline.ShowDataPreview,
      },
      {
        frame: 12 * 30,
        component:
          NextContentlayer.ContentTransformation.Timeline.ShowDataExportPreview,
      },
      {
        frame: 15 * 30,
        component:
          NextContentlayer.ContentTransformation.Timeline
            .ShowTypeDefinitionExample,
      },
    ],
  },
  {
    name: "[CL + MD] Generate Post Paths",
    component: NextContentlayer.GetStaticPaths.Sequence,
    durationInFrames: 8.5 * 30,
    audioSrc: NextContentlayerAudio.GetStaticPaths,
    timeline: [
      {
        frame: 0 * 30,
        component: NextContentlayer.GetStaticPaths.Timeline.ShowExistingCode,
      },
      {
        frame: 2 * 30,
        component: NextContentlayer.GetStaticPaths.Timeline.ShowDataImport,
      },
      {
        frame: 5.5 * 30,
        component: NextContentlayer.GetStaticPaths.Timeline.HighlightPostsMap,
      },
    ],
  },
  {
    name: "[CL + MD] Retrieve Page Data",
    component: NextContentlayer.GetStaticProps.Sequence,
    durationInFrames: 11.5 * 30,
    audioSrc: NextContentlayerAudio.GetStaticProps,
    timeline: [
      {
        frame: 0 * 30,
        component: NextContentlayer.GetStaticProps.Timeline.ShowExistingCode,
      },
      {
        frame: 3 * 30,
        component:
          NextContentlayer.GetStaticProps.Timeline.ReplaceGetStaticProps,
      },
      {
        frame: 6 * 30,
        component:
          NextContentlayer.GetStaticProps.Timeline.HighlightDataRetrieval,
      },
      {
        frame: 9 * 30,
        component:
          NextContentlayer.GetStaticProps.Timeline.HighlightReturnStatement,
      },
    ],
  },
  {
    component: NextContentlayer.Demo.Sequence,
    durationInFrames: 112 * 30,
    timeline: [
      {
        frame: 0,
        component: NextContentlayer.Demo.Timeline.DemoTitle,
      },
      {
        frame: 124,
        component: NextContentlayer.Demo.Timeline.DemoVideo,
      },
    ],
  },
  {
    component: NextContentlayer.Benefits.Sequence,
    durationInFrames: 25 * 30,
    audioSrc: NextContentlayerAudio.Benefits,
    timeline: [
      {
        frame: 0 * 30,
        component: NextContentlayer.Benefits.Timeline.EmptyPoints,
      },
      {
        frame: 6 * 30,
        component: NextContentlayer.Benefits.Timeline.Point01,
      },
      {
        frame: 11 * 30,
        component: NextContentlayer.Benefits.Timeline.Point02,
      },
      {
        frame: 14 * 30,
        component: NextContentlayer.Benefits.Timeline.Point03,
      },
      {
        frame: 18 * 30,
        component: NextContentlayer.Benefits.Timeline.Point04,
      },
      {
        frame: 21 * 30,
        component: NextContentlayer.Benefits.Timeline.Point05,
      },
    ],
  },
  {
    component: NextContentlayer.Outro.Sequence,
    durationInFrames: 27 * 30,
    audioSrc: NextContentlayerAudio.Outro,
    timeline: [
      {
        frame: 0 * 30,
        component: NextContentlayer.Outro.Timeline.BlankSlate,
      },
      {
        frame: 6 * 30,
        component: NextContentlayer.Outro.Timeline.ShowTutorialImage,
      },
      {
        frame: 9 * 30,
        component: NextContentlayer.Outro.Timeline.ShowExamplesImage,
      },
      {
        frame: 12 * 30,
        component: NextContentlayer.Outro.Timeline.ShowGettingStartedImage,
      },
      {
        frame: 18 * 30,
        component: NextContentlayer.Outro.Timeline.ShowCommunityImage,
      },
      {
        frame: 23 * 30,
        component: NextContentlayer.Outro.Timeline.ShowFinalScreen,
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
