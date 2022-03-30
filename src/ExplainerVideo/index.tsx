import { Sequence } from "remotion"

import * as Intro from "./100-Intro"
import * as NextMarkdown from "./200-NextMarkdown"
import * as NextContentlayer from "./300-NextContentlayer"

export const ExplainerVideo: React.FC<{}> = () => {
  return (
    <div className="video-layout bg-black text-white">
      {/* ----- Intro Sequences ----- */}
      <Sequence from={0} durationInFrames={10}>
        <Intro.Intro />
      </Sequence>
      <Sequence from={10} durationInFrames={10}>
        <Intro.ModernWebStack />
      </Sequence>

      {/* ----- Next.js + Markdown Sequences ----- */}
      <Sequence from={20} durationInFrames={10}>
        <NextMarkdown.Intro />
      </Sequence>
      <Sequence from={30} durationInFrames={10}>
        <NextMarkdown.ContentFiles />
      </Sequence>
      <Sequence from={40} durationInFrames={10}>
        <NextMarkdown.GenerateRoutes />
      </Sequence>
      <Sequence from={60} durationInFrames={10}>
        <NextMarkdown.ParsingUtility />
      </Sequence>
      <Sequence from={70} durationInFrames={10}>
        <NextMarkdown.Challenges />
      </Sequence>

      {/* ----- Next.js + Markdown Sequences ----- */}
      <Sequence from={80} durationInFrames={10}>
        <NextContentlayer.Intro />
      </Sequence>
      <Sequence from={90} durationInFrames={10}>
        <NextContentlayer.ModernStack />
      </Sequence>
      <Sequence from={110} durationInFrames={10}>
        <NextContentlayer.Configuration />
      </Sequence>
      <Sequence from={120} durationInFrames={10}>
        <NextContentlayer.GetStaticPaths />
      </Sequence>
      <Sequence from={130} durationInFrames={10}>
        <NextContentlayer.GetStaticProps />
      </Sequence>
      <Sequence from={140} durationInFrames={10}>
        <NextContentlayer.Benefits />
      </Sequence>
      <Sequence from={150} durationInFrames={10}>
        <NextContentlayer.Outro />
      </Sequence>
    </div>
  )
}
