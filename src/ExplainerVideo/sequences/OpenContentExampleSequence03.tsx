// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"
// import { Arrow } from "../../assets"

const data: {
  title: string
  codeExample: string
} = {
  title: "Next.js + Local Markdown",
  codeExample: `
import { read } from "to-vfile"
import { reporter } from "vfile-reporter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkRehype from "remark-rehype"
import rehypeDocument from "rehype-document"
import rehypeFormat from "rehype-format"
import rehypeStringify from "rehype-stringify"

export async function getStaticProps() {
  // Lots of work to do here ...
}
  `.trim(),
}

export const OpenContentExampleSequence03 = () => {
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
      <div className="py-12 px-48 flex items-center justify-center relative">
        <div className="p-12 rounded-xl bg-gray text-2xl leading-normal">
          <SyntaxHighlighter language="javascript">
            {data.codeExample}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
