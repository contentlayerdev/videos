// import { interpolate, useVideoConfig, useCurrentFrame } from "remotion"
// import { ContentlayerLogo } from "../../assets/ContentlayerLogo"
import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"
// import { Arrow } from "../../assets"

const data: {
  title: string
  subtitle: string
  codeExample: string
} = {
  title: "How Contentlayer Works",
  subtitle: "Define Schema Configuration",
  codeExample: `
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: \`**/*.md\`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true }
  }
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post]
})
  `.trim(),
}

export const HowItWorksSequence01 = () => {
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
      <div className="px-48 flex items-center justify-center relative">
        <div className="p-12 rounded-xl bg-gray text-2xl leading-normal">
          <SyntaxHighlighter language="javascript">
            {data.codeExample}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
