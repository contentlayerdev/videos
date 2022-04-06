import { interpolate } from "remotion"
import type {
  CurrentTimelineItem,
  SequenceComponent,
  TimelineObjectState,
} from "../../types"
import {
  useTimeline,
  useTimelineObjectFade,
  useSequenceFade,
} from "../../hooks"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
import { NextPlusMarkdown } from "./components/NextPlusMarkdown"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Code Snippets ----- */

const contentTreeSnippet = `
posts/
├── introducing-contentlayer.md
├── what-is-contentlayer.md
└── why-contentlayer.md
`.trim()

const postFrontmatterSnippet = `
---
title: What is Contentlayer?
date: 2022-02-22
---
`.trim()

const postBodySnippet = `
**Contentlayer makes working with content easy.** It is a content preprocessor that validates and transforms your content into type-safe JSON you can easily import into your application.
`.trim()

/* ----- Shared Components ----- */

const PostPreview: React.FC<{
  timelineItem: TimelineComponentProps
  frontmatterState: TimelineObjectState
  bodyState: TimelineObjectState
}> = (props) => {
  const fadeOptions = {}
  const frontmatterOpacity = useTimelineObjectFade(props.timelineItem, {
    ...fadeOptions,
    state: props.frontmatterState,
  })
  const bodyOpacity = useTimelineObjectFade(props.timelineItem, {
    ...fadeOptions,
    state: props.bodyState,
  })

  return (
    <div
      className="grid grid-cols-2 gap-8"
      style={{ gridTemplateColumns: "auto minmax(0, 1fr)" }}
    >
      <div>
        <div
          className={codeSnippetWrapperClasses.replace("text-3xl", "text-2xl")}
        >
          <SyntaxHighlighter language="text" highlightLines={[4]}>
            {contentTreeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className={codeSnippetWrapperClasses}>
        <span className="block" style={{ opacity: frontmatterOpacity }}>
          <SyntaxHighlighter language="yaml">
            {postFrontmatterSnippet}
          </SyntaxHighlighter>
        </span>
        <span className="block" style={{ opacity: bodyOpacity }}>
          <SyntaxHighlighter language="markdown">
            {postBodySnippet}
          </SyntaxHighlighter>
        </span>
      </div>
    </div>
  )
}

/* ----- Timeline Components ----- */

const contentWrapperClasses = "flex items-center justify-center"
const codeSnippetWrapperClasses =
  "p-12 rounded-xl bg-gray text-3xl leading-normal shadow-lg"

const EmptyFileTree: TimelineComponent = () => {
  return (
    <div className={contentWrapperClasses}>
      <div className={codeSnippetWrapperClasses}>
        <div className="opacity-0">
          <SyntaxHighlighter language="text">
            {contentTreeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}

const FileTreeWithFiles: TimelineComponent = (props) => {
  const opacity = interpolate(
    props.currentFrame,
    [props.startingFrame, props.startingFrame + props.fps / 2],
    [0, 1],
    { extrapolateRight: "clamp" }
  )
  return (
    <div className={contentWrapperClasses}>
      <div className={codeSnippetWrapperClasses}>
        <div style={{ opacity }}>
          <SyntaxHighlighter language="text">
            {contentTreeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}

const SlideFileTree: TimelineComponent = (props) => {
  return <p>SLIDE ME!</p>
}

const EmptyPost: TimelineComponent = (props) => {
  return (
    <PostPreview
      timelineItem={props}
      frontmatterState="hidden"
      bodyState="hidden"
    />
  )
}

const AddPostFrontmatter: TimelineComponent = (props) => {
  return (
    <PostPreview
      timelineItem={props}
      frontmatterState="active"
      bodyState="hidden"
    />
  )
}

const AddPostBody: TimelineComponent = (props) => {
  return (
    <PostPreview
      timelineItem={props}
      frontmatterState="visible"
      bodyState="active"
    />
  )
}

export const Timeline = {
  EmptyFileTree,
  FileTreeWithFiles,
  SlideFileTree,
  EmptyPost,
  AddPostFrontmatter,
  AddPostBody,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  const opacity = useSequenceFade()

  return (
    <div className="w-full h-full relative" style={{ opacity }}>
      <div className="pt-12 pb-24">
        <span className="block mb-10">
          <NextPlusMarkdown />
        </span>
        <h2 className="text-7xl text-center font-bold">Content Source Files</h2>
      </div>
      <div className="py-24 px-24 relative">
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
