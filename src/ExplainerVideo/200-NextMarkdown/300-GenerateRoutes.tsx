import { useState } from "react"
import { useCurrentFrame, useVideoConfig } from "remotion"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"

const dependencies = `
import fs from "fs";
import glob from "glob";
import path from "path";
`.trim()

const fullCode = `
${dependencies}

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

type TimelineItem = {
  frame: number
  code: string
  highlightLines?: number[]
}

const timeline: TimelineItem[] = [
  { frame: 0, code: dependencies },
  { frame: 100, code: fullCode, highlightLines: [5, 6] },
]

export const GenerateRoutes = () => {
  const frame = useCurrentFrame()
  // const { durationInFrames } = useVideoConfig()
  // console.log(durationInFrames)

  // const keyFrames = timeline.map((item) => {
  //   return frame === item.frame
  // })
  // console.log(keyFrames)

  const currentTimelineItem = timeline.find((item, idx) => {
    // Item isn't active yet.
    if (frame < item.frame) return false
    // Last item in the timeline is active.
    if (frame >= item.frame && !timeline[idx + 1]) return true
    // If an item that isn't the last item is active.
    if (frame >= item.frame && frame < timeline[idx + 1].frame) return true
  })!

  // console.log(currentTimelineItem)

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
        >
          <SyntaxHighlighter
            highlightLines={currentTimelineItem.highlightLines ?? []}
            language="javascript"
          >
            {currentTimelineItem.code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
