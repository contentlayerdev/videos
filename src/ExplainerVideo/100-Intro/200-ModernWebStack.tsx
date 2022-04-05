import { interpolate } from "remotion"

import {
  ContentIcon,
  QuestionMarkIcon,
  DatabaseIcon,
  PagesIcon,
  NextLogo,
  RemixLogo,
  SvelteLogo,
  AstroLogo,
  Arrow,
  MarkdownLogo,
  ContentfulLogo,
  ReactLogo,
  VueLogo,
} from "../../assets"
import { useTimeline } from "../../hooks/useTimeline"

import type { SequenceComponent } from "../../types"

/* ----- Types ----- */

type TimelineComponentProps = {
  startingFrame: number
  currentFrame: number
  lastFrame: number
  fps: number
}

type TimelineComponent = React.FC<TimelineComponentProps>

type MetaLogosProps = TimelineComponentProps & {
  activeLogo?: "next" | "remix" | "svelte" | "astro"
}

type SequenceBodyState = "active" | "hidden" | "visible"

type SequenceBodyProps = TimelineComponentProps & {
  content: SequenceBodyState
  pages: SequenceBodyState
  processor: SequenceBodyState
}

/* ----- Shared Components ----- */

// Not being used, but I liked the design, so I'm keeping it around temporarily.
// const ContentToPages = () => {
//   return (
//     <div className="mx-auto max-w-lg flex items-center justify-around mb-12">
//       <div className="bg-gray flex items-center justify-between p-8 rounded-2xl">
//         <span className="h-6 block opacity-75">
//           <ContentIcon />
//         </span>
//       </div>
//       <div className="w-48 opacity-50">
//         <Arrow.RightArrow />
//       </div>
//       <div className="bg-gray flex items-center justify-between p-8 rounded-2xl">
//         <span className="h-6 block opacity-75">
//           <PagesIcon />
//         </span>
//       </div>
//     </div>
//   )
// }

export const MetaLogos: React.FC<MetaLogosProps> = (props) => {
  const getOpacity = (name: string): number => {
    const defaultOpacity = 0.75
    if (props.activeLogo !== name) return defaultOpacity
    // Equates to a 0.25s fade in and fade out. Quick because the audio is
    // quick.
    return interpolate(
      props.currentFrame,
      [
        props.startingFrame,
        props.startingFrame + props.fps / 4,
        props.lastFrame - props.fps / 4,
        props.lastFrame,
      ],
      [defaultOpacity, 1, 1, defaultOpacity],
      { extrapolateRight: "clamp" }
    )
  }

  return (
    <div className="mx-auto max-w-lg flex items-center justify-around mb-12">
      <div style={{ opacity: getOpacity("next") }}>
        <NextLogo />
      </div>
      <div style={{ opacity: getOpacity("remix") }}>
        <RemixLogo />
      </div>
      <div style={{ opacity: getOpacity("svelte") }}>
        <SvelteLogo />
      </div>
      <div style={{ opacity: getOpacity("astro") }}>
        <AstroLogo />
      </div>
    </div>
  )
}

const ContentSources = () => {
  return (
    <div className="border-2 rounded-lg p-12 border-lightGray">
      <div className="flex items-center justify-between mb-8">
        <div className="h-20 mx-6">
          <MarkdownLogo />{" "}
        </div>
        <div className="h-20 mx-6">
          <ContentfulLogo />
        </div>
      </div>
      <h3 className="text-4xl text-center leading-normal">
        Local/Remote
        <br />
        Content
      </h3>
    </div>
  )
}

const PageTemplates = () => {
  return (
    <div className="border-2 rounded-lg p-12 border-lightGray">
      <div className="flex items-center justify-between mb-8">
        <div className="h-20 mx-6">
          <ReactLogo />
        </div>
        <div className="h-16 mx-6">
          <VueLogo />
        </div>
      </div>
      <h3 className="text-4xl text-center leading-normal">
        Component
        <br />
        Templates
      </h3>
    </div>
  )
}

/* ----- Templates ----- */

const SequenceHeader: React.FC<MetaLogosProps> = (props) => {
  return (
    <div className="pt-12 pb-24">
      <MetaLogos {...props} />
      <h2 className="text-7xl text-center font-bold mb-10">
        Modern Meta Frameworks
      </h2>
      <h3 className="text-5xl font-thin text-center">
        Content as Data, Unprescribed.
      </h3>
    </div>
  )
}

const SequenceBody: React.FC<SequenceBodyProps> = (props) => {
  const getOpacity = (
    state: SequenceBodyState,
    defaultOpacity: number,
    maxOpacity: number
  ): number => {
    if (state === "hidden") return 0
    if (state === "visible") return defaultOpacity
    // Equates to a 0.25s fade in and fade out.
    return interpolate(
      props.currentFrame,
      [
        props.startingFrame,
        props.startingFrame + props.fps / 4,
        props.lastFrame - props.fps / 4,
        props.lastFrame,
      ],
      [defaultOpacity, maxOpacity, maxOpacity, defaultOpacity],
      { extrapolateRight: "clamp" }
    )
  }

  const getContentOpacity = () => getOpacity(props.content, 0.75, 1)
  const getArrowOpacity = () => getOpacity(props.processor, 0.5, 0.75)
  const getQuestionMarkOpacity = () => getOpacity(props.processor, 0.75, 1)
  const getPagesOpacity = () => getOpacity(props.pages, 0.75, 1)

  return (
    <div className="py-32 px-36 flex items-center justify-between relative">
      <div style={{ opacity: getContentOpacity() }}>
        <ContentSources />
      </div>
      <div className="w-56" style={{ opacity: getArrowOpacity() }}>
        <Arrow.RightArrow />
      </div>
      <div className="w-36" style={{ opacity: getQuestionMarkOpacity() }}>
        <QuestionMarkIcon />
      </div>
      <div className="w-56" style={{ opacity: getArrowOpacity() }}>
        <Arrow.RightArrow />
      </div>
      <div style={{ opacity: getPagesOpacity() }}>
        <PageTemplates />
      </div>
    </div>
  )
}

const SequenceWrapper: React.FC = ({ children }) => {
  return <div className="w-full h-full">{children}</div>
}

/* ----- Timeline Components ----- */

const Base: TimelineComponent = (props) => {
  return <SequenceHeader {...props} />
}

const HighlightNext: TimelineComponent = (props) => {
  return <SequenceHeader {...props} activeLogo={"next"} />
}

const HighlightRemix: TimelineComponent = (props) => {
  return <SequenceHeader {...props} activeLogo={"remix"} />
}

const HighlightSvelte: TimelineComponent = (props) => {
  return <SequenceHeader {...props} activeLogo={"svelte"} />
}

const HighlightAstro: TimelineComponent = (props) => {
  return <SequenceHeader {...props} activeLogo={"astro"} />
}

const ShowPages: TimelineComponent = (props) => {
  return (
    <>
      <SequenceHeader {...props} />
      <SequenceBody
        {...props}
        content={"hidden"}
        pages={"active"}
        processor={"hidden"}
      />
    </>
  )
}

const ShowContent: TimelineComponent = (props) => {
  return (
    <>
      <SequenceHeader {...props} />
      <SequenceBody
        {...props}
        content={"active"}
        pages={"visible"}
        processor={"hidden"}
      />
    </>
  )
}

const ShowProcessor: TimelineComponent = (props) => {
  return (
    <>
      <SequenceHeader {...props} />
      <SequenceBody
        {...props}
        content={"visible"}
        pages={"visible"}
        processor={"active"}
      />
    </>
  )
}

const ShowEverything: TimelineComponent = (props) => {
  return (
    <>
      <SequenceHeader {...props} />
      <SequenceBody
        {...props}
        content={"visible"}
        pages={"visible"}
        processor={"visible"}
      />
    </>
  )
}

export const Timeline = {
  Base,
  HighlightNext,
  HighlightRemix,
  HighlightSvelte,
  HighlightAstro,
  ShowPages,
  ShowContent,
  ShowProcessor,
  ShowEverything,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  return (
    <SequenceWrapper>
      <Component
        startingFrame={startingFrame}
        currentFrame={currentFrame}
        lastFrame={lastFrame}
        fps={fps}
      />
    </SequenceWrapper>
  )
}
