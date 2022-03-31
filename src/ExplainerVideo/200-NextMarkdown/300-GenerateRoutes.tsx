import { FC, useRef } from "react"
import { useCurrentFrame, interpolate } from "remotion"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"

/* ----- Dependencies ----- */

const dependenciesSnippet = `
import fs from "fs";
import glob from "glob";
import path from "path";
`.trim()

const DependencyCode = () => {
  return (
    <SyntaxHighlighter language="javascript">
      {dependenciesSnippet}
    </SyntaxHighlighter>
  )
}

/* ----- Full Code ----- */

const fullCodeSnippet = `
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

const FullCode = ({
  startingFrame,
  wrapperRef,
}: {
  startingFrame: number
  wrapperRef: React.RefObject<HTMLDivElement>
}) => {
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [startingFrame, startingFrame + 20],
    [0, 1],
    { extrapolateRight: "clamp" }
  )

  const startY = 0
  const endY = 48 + 18.62 * 5

  const currentY = interpolate(
    frame,
    [startingFrame, startingFrame + 20],
    [startY, endY],
    { extrapolateRight: "clamp" }
  )

  if (wrapperRef.current) {
    wrapperRef.current.scrollTop = currentY
  }

  return (
    <>
      <SyntaxHighlighter language="javascript">
        {dependenciesSnippet}
      </SyntaxHighlighter>
      <span className="block" style={{ opacity }}>
        <SyntaxHighlighter highlightLines={[5, 6]} language="javascript">
          {fullCodeSnippet}
        </SyntaxHighlighter>
      </span>
    </>
  )
}

/* ----- Timeline Definition ----- */

type TimelineItem = {
  frame: number
  component: FC<{
    startingFrame: number
    wrapperRef: React.RefObject<HTMLDivElement>
  }>
}

const timeline: TimelineItem[] = [
  { frame: 0, component: DependencyCode },
  { frame: 100, component: FullCode },
]

/* ----- Sequence Component ----- */

export const GenerateRoutes = () => {
  const frame = useCurrentFrame()
  const codeBlock = useRef<HTMLDivElement>(null)

  const currentTimelineItem = timeline.find((item, idx) => {
    // Item isn't active yet.
    if (frame < item.frame) return false
    // Last item in the timeline is active.
    if (frame >= item.frame && !timeline[idx + 1]) return true
    // If an item that isn't the last item is active.
    if (frame >= item.frame && frame < timeline[idx + 1].frame) return true
  })!
  const CodeComponent = currentTimelineItem.component

  return (
    <div className="w-full h-full">
      <div className="py-20">
        <h2 className="text-7xl text-center mb-8 font-bold">
          Generate Post Routes
        </h2>
        <code className="block text-center text-3xl text-lightGray">
          pages/post/[slug].jsx
        </code>
      </div>
      <div className="px-48 relative">
        <div
          className="p-12 rounded-xl bg-gray text-3xl leading-normal mb-12 overflow-y-scroll"
          style={{ height: "42rem" }}
          ref={codeBlock}
        >
          <CodeComponent
            startingFrame={currentTimelineItem.frame}
            wrapperRef={codeBlock}
          />
        </div>
      </div>
    </div>
  )
}
