import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
import { Arrow } from "../../assets"

const srcFileTree = `
posts/
├── index.md
├── about.md
└── blog.md
`.trim()

const generatedFileTree = `
.contentlayer/generated/
├── Page/
│   ├── index.md.json
│   ├── about.md.json
│   └── blog.md.json
├── allPages.mjs
├── index.d.ts
└── index.mjs
`.trim()

export const ContentTransformation = () => {
  return (
    <div className="w-full h-full">
      <div className="pt-24 pb-16">
        <h2 className="text-7xl text-center font-bold">
          Content Transformation
        </h2>
      </div>
      <div className="py-36 px-64 flex items-start justify-between relative">
        <div className="p-12 rounded-xl bg-gray text-3xl leading-normal">
          <SyntaxHighlighter language="text">{srcFileTree}</SyntaxHighlighter>
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
            {generatedFileTree}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
