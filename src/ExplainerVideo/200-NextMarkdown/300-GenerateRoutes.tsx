import { interpolate } from "remotion"
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

// Also used by a later sequence.
export const generatePagePathsSnippet = `
export async function getStaticPaths = async () => {
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
  const titleOpacity = useSequenceFade("in")

  return (
    <div className="pt-12 pb-24">
      <span className="block mb-10">
        <NextPlusMarkdown />
      </span>
      <h2
        className="text-7xl text-center font-bold mb-8"
        style={{ opacity: titleOpacity }}
      >
        Generate Post Pages
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
        className="p-12 rounded-xl text-3xl leading-normal bg-gray mb-12 overflow-hidden"
        style={{ opacity, height: "620px" }}
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

const HighlightFilePaths: TimelineComponent = () => {
  return (
    <>
      <SequenceHeader />
      <CodeSnippet highlightLines={[2, 3]} />
    </>
  )
}

const HighlightPageUrlPaths: TimelineComponent = (props) => {
  const opacity = interpolate(
    props.currentFrame,
    [props.lastFrame - props.fps * 0.5, props.lastFrame],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  )

  return (
    <>
      <SequenceHeader />
      <CodeSnippet highlightLines={[4, 5, 6, 7, 8, 9]} codeOpacity={opacity} />
    </>
  )
}

export const Timeline = {
  BlankSlate,
  ShowFilename,
  ShowCodeSnippet,
  HighlightFilePaths,
  HighlightPageUrlPaths,
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
