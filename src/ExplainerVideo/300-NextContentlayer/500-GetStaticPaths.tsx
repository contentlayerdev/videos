import { Logo } from "../../assets"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
import { useSequenceFade, useTimeline } from "../../hooks"
import { CurrentTimelineItem, SequenceComponent } from "../../types"
import { generatePagePathsSnippet } from "../200-NextMarkdown/300-GenerateRoutes"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Code Snippets ----- */

const contentlayerImports: string = `
import { allPosts, Post } from "contentlayer/generated";
`.trim()

const contentlayerGetStaticPaths: string = `
export async function getStaticPaths() {
  const paths: string[] = allPosts.map(
    (post) => \`/posts/\${post._raw.flattenedPath}\`
  )
  return { paths, fallback: false }
}
`.trim()

/* ----- Shared Components ----- */

const CodeSnippet: React.FC = ({ children }) => {
  return (
    <div
      className="p-12 rounded-xl bg-gray text-3xl leading-normal mb-12"
      style={{ height: "696px" }}
    >
      {children}
    </div>
  )
}

const FullCodeExample: React.FC<{ highlightLines?: number[] }> = ({
  highlightLines,
}) => {
  return (
    <CodeSnippet>
      <SyntaxHighlighter language="javascript">
        {contentlayerImports}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        highlightLines={highlightLines ?? []}
      >
        {contentlayerGetStaticPaths}
      </SyntaxHighlighter>
    </CodeSnippet>
  )
}

/* ----- Timeline Components ----- */

const ShowExistingCode: TimelineComponent = () => {
  return (
    <CodeSnippet>
      <span className="block opacity-50">
        <SyntaxHighlighter language="javascript">
          {generatePagePathsSnippet}
        </SyntaxHighlighter>
      </span>
    </CodeSnippet>
  )
}

const ShowDataImport: TimelineComponent = () => {
  return (
    <CodeSnippet>
      <SyntaxHighlighter language="javascript">
        {contentlayerImports}
      </SyntaxHighlighter>
      <span className="block opacity-50">
        <SyntaxHighlighter language="javascript">
          {generatePagePathsSnippet}
        </SyntaxHighlighter>
      </span>
    </CodeSnippet>
  )
}

const ReplaceGetStaticPaths: TimelineComponent = () => {
  return <FullCodeExample />
}

const HighlightPostsMap: TimelineComponent = () => {
  return <FullCodeExample highlightLines={[2, 3, 4]} />
}

export const Timeline = {
  ShowExistingCode,
  ShowDataImport,
  ReplaceGetStaticPaths,
  HighlightPostsMap,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  const opacity = useSequenceFade()

  return (
    <div className="w-full h-full" style={{ opacity }}>
      <div className="pt-12">
        <span className="block mb-8 h-16 opacity-75 text-primary">
          <Logo.ContentlayerLogo />
        </span>
        <h2 className="text-7xl text-center font-bold mb-8">
          Generate Post Paths
        </h2>
        <code className="block text-center text-3xl text-lightGray">
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
