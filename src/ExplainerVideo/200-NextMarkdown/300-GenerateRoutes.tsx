import { useCurrentFrame, interpolate } from "remotion"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
import {
  useSequenceFade,
  useTimeline,
  useTimelineObjectFade,
} from "../../hooks"
import { CurrentTimelineItem, SequenceComponent } from "../../types"
import { NextPlusMarkdown } from "./components/NextPlusMarkdown"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Code Snippets ----- */

const generatePagePathsSnippet = `
export const getStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), "../posts");
  const allPostPaths = glob.sync(path.join(postsDir, "**/*.md"));
  allPostPaths.map((filePath) => {
    return filePath
      .replace(contentDir, "")
      .replace(/\\.md$/, "")
      .replace(/\\/index$/, "/");
  });
  return { paths, fallback: false };
};
`.trim()

/* ----- Shared Components ----- */

const SequenceHeader: React.FC<{ filenameOpacity?: number }> = ({
  filenameOpacity = 1,
}) => {
  return (
    <div className="pt-12 pb-24">
      <span className="block mb-10">
        <NextPlusMarkdown />
      </span>
      <h2 className="text-7xl text-center font-bold mb-8">
        Generate Post Routes
      </h2>
      <code
        className="block text-center text-3xl text-lightGray"
        style={{ opacity: filenameOpacity }}
      >
        pages/post/[slug].jsx
      </code>
    </div>
  )
}

const CodeSnippet: React.FC<{
  codeOpacity?: number
  opacity?: number
  highlightLines?: number[]
}> = ({ codeOpacity = 1, opacity = 1, highlightLines = [] }) => {
  return (
    <div className="px-48 relative">
      <div
        className="p-12 rounded-xl bg-gray text-3xl leading-normal mb-12 overflow-y-scroll"
        style={{ opacity }}
      >
        <span className="block" style={{ opacity: codeOpacity }}>
          <SyntaxHighlighter
            highlightLines={highlightLines}
            language="javascript"
          >
            {generatePagePathsSnippet}
          </SyntaxHighlighter>
        </span>
      </div>
    </div>
  )
}

/* ----- Timeline Components ----- */

const BlankSlate: TimelineComponent = () => {
  return <SequenceHeader filenameOpacity={0} />
}

const ShowFilename: TimelineComponent = (props) => {
  const opacity = useTimelineObjectFade(props)
  return (
    <>
      <SequenceHeader filenameOpacity={opacity} />
      <CodeSnippet opacity={opacity} codeOpacity={0} />
    </>
  )
}

const ShowCodeSnippet: TimelineComponent = (props) => {
  const opacity = useTimelineObjectFade(props)
  return (
    <>
      <SequenceHeader />
      <CodeSnippet codeOpacity={opacity} />
    </>
  )
}

const HighlightGetStaticPaths: TimelineComponent = () => {
  return (
    <>
      <SequenceHeader />
      <CodeSnippet highlightLines={[1]} />
    </>
  )
}

const HighlightFilePaths: TimelineComponent = () => {
  return (
    <>
      <SequenceHeader />
      <CodeSnippet highlightLines={[2, 3]} />
    </>
  )
}

const HighlightPageUrlPaths: TimelineComponent = () => {
  return (
    <>
      <SequenceHeader />
      <CodeSnippet highlightLines={[4, 5, 6, 7, 8, 9]} />
    </>
  )
}

export const Timeline = {
  BlankSlate,
  ShowFilename,
  ShowCodeSnippet,
  HighlightGetStaticPaths,
  HighlightFilePaths,
  HighlightPageUrlPaths,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  const opacity = useSequenceFade()

  return (
    <div className="w-full h-full" style={{ opacity }}>
      <Component
        startingFrame={startingFrame}
        currentFrame={currentFrame}
        lastFrame={lastFrame}
        fps={fps}
      />
    </div>
  )
}
