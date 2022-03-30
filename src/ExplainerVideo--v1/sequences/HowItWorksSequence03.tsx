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
  subtitle: "Import Your Content as Data",
  codeExample: `
import { allPages, type Page } from 'contentlayer/generated'

export async function getStaticProps({ params }) {
  const page = allPages.find((page) => page.urlPath === params.slug)
  return { props: { page } }
}

export default function Page({ page }: { page: Page }) {
  return (
    <div>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.body.html }} />
    </div>
  )
}
  `.trim(),
}

export const HowItWorksSequence03 = () => {
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
          <SyntaxHighlighter language="typescript">
            {data.codeExample}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
