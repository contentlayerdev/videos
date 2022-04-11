import { Logo } from "../../assets"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
import { useSequenceFade, useTimeline } from "../../hooks"
import { CurrentTimelineItem, SequenceComponent } from "../../types"
import { withReturnStatementSnippet } from "../200-NextMarkdown/400-ParsingUtility"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Code Snippets ----- */

const contentlayerGetStaticProps: string = `
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  return { props: { post } };
}
`.trim()

/* ----- Shared Components ----- */

const CodeSnippet: React.FC = ({ children }) => {
  const fadeIn = useSequenceFade("in")
  const fadeOut = useSequenceFade("out")

  return (
    <div
      className="p-12 rounded-xl bg-gray text-3xl leading-normal mb-12 overflow-hidden"
      style={{ height: "696px", opacity: fadeOut }}
    >
      <div style={{ opacity: fadeIn }}>{children}</div>
    </div>
  )
}

const FullCodeExample: React.FC<{ highlightLines?: number[] }> = ({
  highlightLines,
}) => {
  return (
    <CodeSnippet>
      <SyntaxHighlighter
        language="javascript"
        highlightLines={highlightLines ?? []}
      >
        {contentlayerGetStaticProps}
      </SyntaxHighlighter>
    </CodeSnippet>
  )
}

/* ----- Timeline Components ----- */

const ShowExistingCode: TimelineComponent = () => {
  return (
    <CodeSnippet>
      <span className="block opacity-50" style={{ fontSize: "12px" }}>
        <SyntaxHighlighter language="javascript">
          {withReturnStatementSnippet}
        </SyntaxHighlighter>
      </span>
    </CodeSnippet>
  )
}

const ReplaceGetStaticProps: TimelineComponent = () => {
  return <FullCodeExample />
}

const HighlightDataRetrieval: TimelineComponent = () => {
  return <FullCodeExample highlightLines={[4, 5, 6]} />
}

const HighlightReturnStatement: TimelineComponent = () => {
  return <FullCodeExample highlightLines={[7]} />
}

export const Timeline = {
  ShowExistingCode,
  ReplaceGetStaticProps,
  HighlightDataRetrieval,
  HighlightReturnStatement,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  const fadeBoth = useSequenceFade()
  const fadeOut = useSequenceFade("out")

  return (
    <div className="w-full h-full">
      <div className="pt-12">
        <span className="block mb-8 h-16 text-primary">
          <Logo.ContentlayerLogo />
        </span>
        <h2
          className="text-7xl text-center font-bold mb-8"
          style={{ opacity: fadeBoth }}
        >
          Retrieve Page Data
        </h2>
        <code
          className="block text-center text-3xl text-lightGray"
          style={{ opacity: fadeOut }}
        >
          pages/post/[slug].jsx
        </code>
      </div>
      <div className="px-48 py-12 relative">
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
