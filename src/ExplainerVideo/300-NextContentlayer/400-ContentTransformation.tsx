import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
import { Arrow, Logo } from "../../assets"
import {
  useSequenceFade,
  useTimeline,
  useTimelineObjectFade,
} from "../../hooks"
import {
  CurrentTimelineItem,
  SequenceComponent,
  TimelineObjectState,
} from "../../types"
import { contentTreeSnippet } from "../200-NextMarkdown/200-ContentFiles"
import { interpolate } from "remotion"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Code Snippets ----- */

const generatedFileTree = `
.contentlayer/generated/
├── Post/
│   ├── _index.json
│   ├── _index.mjs
│   ├── introducing-contentlayer.md.json
│   ├── what-is-contentlayer.md.json
│   └── why-contentlayer.md.json
├── index.d.ts
├── index.mjs
└── types.d.ts
`.trim()

const postDataPreviewSnippet = `
{
  "title": "What is Contentlayer?",
  "date": "2022-02-22T00:00:00.000Z",
  "body": {
    "raw": "\\n**Contentlayer makes working ...",
    "html": "<p><strong>Contentlayer makes working ..."
  },
  "_id": "what-is-contentlayer.md",
  "_raw": {
    "flattenedPath": "what-is-contentlayer",
    // ...
  },
  "type": "Post"
}
`.trim()

const postsDataExportPreviewSnippet = `
import allPosts from './Post/_index.json'

export { allPosts }

export const allDocuments = [...allPosts]
`.trim()

const typeDefsPreviewSnippet = `
export type Post = {
  /** File path relative to \`contentDirPath\` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  /** The title of the post */
  title: string
  /** The date of the post */
  date: string
  /** Markdown file body */
  body: Markdown
}

// ...
`.trim()

/* ----- Shared Components ----- */

const ContentBuildFlow: React.FC<{
  timelineItem: TimelineComponentProps
  contentState: TimelineObjectState
  processorState: TimelineObjectState
  generatedState: TimelineObjectState
}> = (props) => {
  const getOpacity = (state: TimelineObjectState) => {
    return useTimelineObjectFade(props.timelineItem, { state })
  }

  return (
    <div className="flex items-start justify-between">
      <div
        className="p-12 rounded-xl bg-gray leading-normal"
        style={{ fontSize: "1.65rem", opacity: getOpacity(props.contentState) }}
      >
        <SyntaxHighlighter language="text">
          {contentTreeSnippet}
        </SyntaxHighlighter>
      </div>
      <div
        className="w-64"
        style={{ opacity: getOpacity(props.processorState) }}
      >
        <div className="h-32 text-primary mb-12">
          <Logo.ContentlayerLogo />
        </div>
        <div className="opacity-75">
          <Arrow.RightArrow />
        </div>
      </div>
      <div
        className="p-12 rounded-xl bg-gray leading-normal"
        style={{
          fontSize: "1.65rem",
          opacity: getOpacity(props.generatedState),
        }}
      >
        <SyntaxHighlighter language="text">
          {generatedFileTree}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

const ContentPreview: React.FC<{
  highlightedFileLine?: number[]
  previewSnippet?: string
  previewOpacity?: number
  previewLanguage?: string
}> = (props) => {
  return (
    <div className="flex items-start justify-between">
      <div className="p-12 rounded-xl bg-gray leading-normal text-2xl">
        <SyntaxHighlighter
          language="text"
          highlightLines={props.highlightedFileLine ?? []}
        >
          {generatedFileTree}
        </SyntaxHighlighter>
      </div>
      <div
        className="px-12 py-10 rounded-xl bg-gray text-2xl leading-normal overflow-hidden"
        style={{ height: "600px", width: "950px" }}
      >
        <span className="block" style={{ opacity: props.previewOpacity ?? 1 }}>
          <SyntaxHighlighter
            language={props.previewLanguage ?? "text"}
            wrapText={false}
          >
            {props.previewSnippet ?? ""}
          </SyntaxHighlighter>
        </span>
      </div>
    </div>
  )
}

/* ----- Timeline Components ----- */

const ShowContentFiles: TimelineComponent = (props) => {
  return (
    <ContentBuildFlow
      timelineItem={props}
      contentState="visible"
      processorState="hidden"
      generatedState="hidden"
    />
  )
}

const ShowBuildArrow: TimelineComponent = (props) => {
  return (
    <ContentBuildFlow
      timelineItem={props}
      contentState="visible"
      processorState="active"
      generatedState="hidden"
    />
  )
}

const ShowGeneratedFiles: TimelineComponent = (props) => {
  return (
    <ContentBuildFlow
      timelineItem={props}
      contentState="visible"
      processorState="visible"
      generatedState="active"
    />
  )
}

const MoveGeneratedFiles: TimelineComponent = (props) => {
  const fadeOutOpacity = interpolate(
    props.currentFrame,
    [props.startingFrame, props.startingFrame + props.fps * 0.5],
    [1, 0],
    { extrapolateRight: "clamp" }
  )

  const delayTime = props.fps * 0.25
  const moveTransitionFrames = [
    props.startingFrame + delayTime,
    props.startingFrame + delayTime + props.fps * 0.5,
  ]
  const fontSize = interpolate(
    props.currentFrame,
    moveTransitionFrames,
    [1.65, 1.5],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  )
  const x = interpolate(props.currentFrame, moveTransitionFrames, [0, -1030], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  })

  return (
    <div className="flex items-start justify-between">
      <div
        className="p-12 rounded-xl bg-gray leading-normal"
        style={{ fontSize: "1.65rem", opacity: fadeOutOpacity }}
      >
        <SyntaxHighlighter language="text">
          {contentTreeSnippet}
        </SyntaxHighlighter>
      </div>
      <div className="w-64" style={{ opacity: fadeOutOpacity }}>
        <div className="h-32 text-primary mb-12">
          <Logo.ContentlayerLogo />
        </div>
        <div className="opacity-75">
          <Arrow.RightArrow />
        </div>
      </div>
      <div
        className="p-12 rounded-xl bg-gray leading-normal"
        style={{ fontSize: `${fontSize}rem`, transform: `translateX(${x}px)` }}
      >
        <SyntaxHighlighter language="text">
          {generatedFileTree}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

const ShowEmptyPreview: TimelineComponent = (props) => {
  return <ContentPreview />
}

const ShowDataPreview: TimelineComponent = (props) => {
  const opacity = useTimelineObjectFade(props, { defaultOpacity: 0 })

  return (
    <ContentPreview
      highlightedFileLine={[6]}
      previewSnippet={postDataPreviewSnippet}
      previewLanguage="json"
      previewOpacity={opacity}
    />
  )
}

const ShowDataExportPreview: TimelineComponent = (props) => {
  const opacity = useTimelineObjectFade(props, { defaultOpacity: 0 })

  return (
    <ContentPreview
      highlightedFileLine={[9]}
      previewSnippet={postsDataExportPreviewSnippet}
      previewLanguage="javascript"
      previewOpacity={opacity}
    />
  )
}

const ShowTypeDefinitionExample: TimelineComponent = (props) => {
  const opacity = useTimelineObjectFade(props)

  return (
    <ContentPreview
      highlightedFileLine={[10]}
      previewSnippet={typeDefsPreviewSnippet}
      previewLanguage="typescript"
      previewOpacity={opacity}
    />
  )
}

export const Timeline = {
  ShowContentFiles,
  ShowBuildArrow,
  ShowGeneratedFiles,
  MoveGeneratedFiles,
  ShowEmptyPreview,
  ShowDataPreview,
  ShowDataExportPreview,
  ShowTypeDefinitionExample,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  const opacity = useSequenceFade()

  return (
    <div className="w-full h-full">
      <div className="pt-12">
        <span className="block mb-8 h-16 text-primary">
          <Logo.ContentlayerLogo />
        </span>
        <h2 className="text-7xl text-center font-bold mb-8" style={{ opacity }}>
          Generated Files
        </h2>
        <h3 className="block text-center text-4xl" style={{ opacity }}>
          Contentlayer Transforms Content into Data
        </h3>
      </div>
      <div className="py-24 px-24 relative" style={{ opacity }}>
        <Component
          startingFrame={startingFrame}
          currentFrame={currentFrame}
          lastFrame={lastFrame}
          fps={fps}
        />
      </div>
    </div>
  )
}
