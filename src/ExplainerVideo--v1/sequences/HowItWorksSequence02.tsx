// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { Arrow } from "../../assets"

const data: {
  title: string
  subtitle: string
  sourceFileTree: string
  generatedFileTree: string
} = {
  title: "How Contentlayer Works",
  subtitle: "Run the Build",
  sourceFileTree: `
content/
└── pages/
    ├── index.md
    ├── about.md
    └── blog.md
  `.trim(),
  generatedFileTree: `
.contentlayer/generated/
├── Page/
│   ├── index.md.json
│   ├── about.md.json
│   └── blog.md.json
├── allPages.mjs
├── index.d.ts
└── index.mjs
  `.trim(),
}

export const HowItWorksSequence02 = () => {
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
      <div className="pt-24 pb-16">
        <h2 className="text-7xl text-center font-bold mb-10">{data.title}</h2>
        <h3 className="text-4xl text-center uppercase">{data.subtitle}</h3>
      </div>
      <div className="py-36 px-64 flex items-start justify-between relative">
        <div className="p-12 rounded-xl bg-gray text-3xl leading-normal">
          <SyntaxHighlighter language="text">
            {data.sourceFileTree}
          </SyntaxHighlighter>
        </div>
        <span
          className="absolute block text-gray"
          style={{
            top: "-2rem",
            left: "36rem",
            width: "32rem",
            transform: "rotate(-6deg)",
          }}
        >
          <Arrow.RightDownArrow />
        </span>
        <div className="p-12 rounded-xl bg-gray text-3xl leading-normal">
          <SyntaxHighlighter language="text">
            {data.generatedFileTree}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
