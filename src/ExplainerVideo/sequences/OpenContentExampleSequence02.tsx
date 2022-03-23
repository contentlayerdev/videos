// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"
// import { Arrow } from "../../assets"

const data: {
  title: string
  contentTree: string
  pagePreview: string
} = {
  title: "Next.js + Local Markdown",
  contentTree: `
content/
└── pages/
    ├── index.md
    ├── about.md
    └── blog.md
  `.trim(),
  pagePreview: `
---
title: About
---

# Why Contentlayer?

Contentlayer transforms content into data ...

  `.trim(),
}

export const OpenContentExampleSequence02 = () => {
  // const frame = useCurrentFrame()
  // const { durationInFrames } = useVideoConfig()

  // const fadeControls = {
  //   title: interpolate(
  //     frame,
  //     [0, 20, durationInFrames - 10, durationInFrames],
  //     [0, 1, 1, 0],
  //     { extrapolateRight: "clamp" }
  //   ),
  // }

  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h2 className="text-7xl text-center font-bold">{data.title}</h2>
      </div>
      <div className="py-36 px-48 flex items-start justify-between relative">
        <div className="p-12 rounded-xl bg-gray text-3xl leading-normal">
          <SyntaxHighlighter language="text" highlightLines={[4]}>
            {data.contentTree}
          </SyntaxHighlighter>
        </div>
        {/* <span
          className="absolute block text-gray"
          style={{
            top: 0,
            left: "24rem",
            width: "26rem",
            transform: "rotate(-6deg)",
          }}
        >
          <Arrow.RightDownArrow />
        </span> */}
        <div className="p-12 rounded-xl bg-gray text-3xl leading-normal">
          <SyntaxHighlighter language="yaml">
            {data.pagePreview}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
