import { interpolate } from "remotion"
import { Logo } from "../../assets"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
import {
  useSequenceFade,
  useTimeline,
  useTimelineObjectFade,
} from "../../hooks"
import { CurrentTimelineItem, SequenceComponent } from "../../types"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Code Snippets ----- */

const contentlayerConfigSnippet: string = `
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.md',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true }
  }
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
`.trim()

const contentlayerConfigFile = `contentlayer.config.ts`

const nextConfigSnippet = `
import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({})
`.trim()

const nextConfigFile = `next.config.mjs`

/* ----- Shared Components ----- */

const SequenceTemplate: React.FC<{
  filename?: string
  filenameOpacity?: number
  codeSnippet?: string
  codeOpacity?: number
  highlightLines?: number[]
}> = (props) => {
  const fadeIn = useSequenceFade("in")
  const fadeBoth = useSequenceFade()

  return (
    <>
      <div className="pt-12">
        <span
          className="block mb-8 h-16 text-primary"
          style={{ opacity: fadeIn }}
        >
          <Logo.ContentlayerLogo />
        </span>
        <h2
          className="text-7xl text-center font-bold mb-8"
          style={{ opacity: fadeBoth }}
        >
          Configure Contentlayer
        </h2>
        {props.filename && (
          <code
            className="block text-center text-3xl text-lightGray"
            style={{
              opacity: fadeBoth !== 1 ? fadeBoth : props.filenameOpacity ?? 1,
            }}
          >
            {props.filename}
          </code>
        )}
      </div>
      {props.codeSnippet && (
        <div className="px-48 py-12 relative" style={{ opacity: fadeBoth }}>
          <div
            className="p-12 rounded-xl bg-gray text-3xl leading-normal mb-12"
            style={{ height: "670px" }}
          >
            <span className="block" style={{ opacity: props.codeOpacity ?? 1 }}>
              <SyntaxHighlighter
                language="javascript"
                highlightLines={props.highlightLines ?? []}
              >
                {props.codeSnippet}
              </SyntaxHighlighter>
            </span>
          </div>
        </div>
      )}
    </>
  )
}

const HighlightedContentlayerConfig: React.FC<{ highlightLines: number[] }> = ({
  highlightLines,
}) => {
  return (
    <SequenceTemplate
      codeSnippet={contentlayerConfigSnippet}
      filename={contentlayerConfigFile}
      highlightLines={highlightLines}
    />
  )
}

/* ----- Timeline Components ----- */

const BlankSlate: TimelineComponent = () => {
  return <SequenceTemplate />
}

const ShowContentlayerConfig: TimelineComponent = (props) => {
  const opacity = useTimelineObjectFade(props)
  return (
    <SequenceTemplate
      codeSnippet={contentlayerConfigSnippet}
      codeOpacity={opacity}
      filename={contentlayerConfigFile}
      filenameOpacity={opacity}
    />
  )
}

const HighlightExport: TimelineComponent = () => {
  return <HighlightedContentlayerConfig highlightLines={[12]} />
}

const HighlightPost: TimelineComponent = () => {
  return <HighlightedContentlayerConfig highlightLines={[4]} />
}

const HighlightTitleField: TimelineComponent = () => {
  return <HighlightedContentlayerConfig highlightLines={[7]} />
}

const HighlightDateField: TimelineComponent = () => {
  return <HighlightedContentlayerConfig highlightLines={[8]} />
}

const HighlightFilePath: TimelineComponent = () => {
  return <HighlightedContentlayerConfig highlightLines={[5]} />
}

const HideContentlayerConfig: TimelineComponent = (props) => {
  const opacity = interpolate(
    props.currentFrame,
    [props.lastFrame - props.fps * 0.5, props.lastFrame],
    [1, 0],
    { extrapolateRight: "clamp" }
  )

  return (
    <SequenceTemplate
      codeSnippet={contentlayerConfigSnippet}
      codeOpacity={opacity}
      filename={contentlayerConfigFile}
      filenameOpacity={opacity}
    />
  )
}

const ShowNextConfig: TimelineComponent = (props) => {
  const opacity = useTimelineObjectFade(props)
  return (
    <SequenceTemplate
      codeSnippet={nextConfigSnippet}
      codeOpacity={opacity}
      filename={nextConfigFile}
      filenameOpacity={opacity}
    />
  )
}

export const Timeline = {
  BlankSlate,
  ShowContentlayerConfig,
  HighlightExport,
  HighlightPost,
  HighlightTitleField,
  HighlightDateField,
  HighlightFilePath,
  HideContentlayerConfig,
  ShowNextConfig,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  return (
    <div className="w-full h-full">
      <Component
        startingFrame={startingFrame}
        currentFrame={currentFrame}
        lastFrame={lastFrame}
        fps={fps}
      />
    </div>
  )
}
