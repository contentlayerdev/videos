import { Arrow, Logo, Icon } from "../../assets"
import {
  useTimeline,
  useSequenceFade,
  useTimelineObjectFade,
} from "../../hooks"

import type {
  CurrentTimelineItem,
  SequenceComponent,
  TimelineObjectState,
} from "../../types"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

type MetaLogoName = "next" | "remix" | "svelte" | "astro"

type MetaLogosProps = {
  timelineItem: TimelineComponentProps
  nextState: TimelineObjectState
  remixState: TimelineObjectState
  svelteState: TimelineObjectState
  astroState: TimelineObjectState
}

/* ----- Shared Components ----- */

export const MetaLogos: React.FC<MetaLogosProps> = (props) => {
  const getOpacity = (name: MetaLogoName): number => {
    return useTimelineObjectFade(props.timelineItem, {
      transitionDuration: 0.25,
      maxOpacity: 1,
      defaultOpacity: 0.75,
      startingOpacity: 0.75, // Because they are always visible
      state: props[`${name}State`],
    })
  }

  return (
    <div className="mx-auto max-w-lg flex items-center justify-around mb-12">
      <div className="h-16" style={{ opacity: getOpacity("next") }}>
        <Logo.NextLogo />
      </div>
      <div className="h-16" style={{ opacity: getOpacity("remix") }}>
        <Logo.RemixLogo />
      </div>
      <div className="h-16" style={{ opacity: getOpacity("svelte") }}>
        <Logo.SvelteLogo />
      </div>
      <div className="h-16" style={{ opacity: getOpacity("astro") }}>
        <Logo.AstroLogo />
      </div>
    </div>
  )
}

const ContentSources = () => {
  return (
    <div className="border-2 rounded-lg p-12 border-lightGray">
      <div className="flex items-center justify-between mb-8">
        <div className="h-20 mx-6">
          <Logo.MarkdownLogo />
        </div>
        <div className="h-20 mx-6">
          <Logo.ContentfulLogo />
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
          <Logo.ReactLogo />
        </div>
        <div className="h-16 mx-6">
          <Logo.VueLogo />
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

const SequenceHeader: React.FC<{
  timelineItem: TimelineComponentProps
  activeLogo?: MetaLogoName
}> = (props) => {
  const metaLogosProps: MetaLogosProps = {
    timelineItem: props.timelineItem,
    nextState: props.activeLogo === "next" ? "active" : "visible",
    remixState: props.activeLogo === "remix" ? "active" : "visible",
    svelteState: props.activeLogo === "svelte" ? "active" : "visible",
    astroState: props.activeLogo === "astro" ? "active" : "visible",
  }

  return (
    <div className="pt-12 pb-24">
      <MetaLogos {...metaLogosProps} />
      <h2 className="text-7xl text-center font-bold mb-10">
        Modern Meta Frameworks
      </h2>
      <h3 className="text-5xl font-thin text-center">
        Content as Data, Unprescribed
      </h3>
    </div>
  )
}

const SequenceBody: React.FC<{
  timelineItem: TimelineComponentProps
  contentState: TimelineObjectState
  pagesState: TimelineObjectState
  processorState: TimelineObjectState
}> = (props) => {
  const defaultTransitionOptions = {
    transitionDuration: 0.25,
    maxOpacity: 1,
    defaultOpacity: 0.75,
  }
  const contentOpacity = useTimelineObjectFade(props.timelineItem, {
    ...defaultTransitionOptions,
    state: props.contentState,
  })
  const questionMarkOpacity = useTimelineObjectFade(props.timelineItem, {
    ...defaultTransitionOptions,
    state: props.processorState,
  })
  const pagesOpacity = useTimelineObjectFade(props.timelineItem, {
    ...defaultTransitionOptions,
    state: props.pagesState,
  })
  const arrowOpacity = useTimelineObjectFade(props.timelineItem, {
    ...defaultTransitionOptions,
    maxOpacity: 0.75,
    defaultOpacity: 0.5,
    state: props.processorState,
  })

  return (
    <div className="py-32 px-36 flex items-center justify-between relative">
      <div style={{ opacity: contentOpacity }}>
        <ContentSources />
      </div>
      <div className="w-56" style={{ opacity: arrowOpacity }}>
        <Arrow.RightArrow />
      </div>
      <div className="w-36" style={{ opacity: questionMarkOpacity }}>
        <Icon.QuestionMarkIcon />
      </div>
      <div className="w-56" style={{ opacity: arrowOpacity }}>
        <Arrow.RightArrow />
      </div>
      <div style={{ opacity: pagesOpacity }}>
        <PageTemplates />
      </div>
    </div>
  )
}

/* ----- Timeline Components ----- */

const Base: TimelineComponent = (props) => {
  return <SequenceHeader timelineItem={props} />
}

const HighlightNext: TimelineComponent = (props) => {
  return <SequenceHeader timelineItem={props} activeLogo={"next"} />
}

const HighlightRemix: TimelineComponent = (props) => {
  return <SequenceHeader timelineItem={props} activeLogo={"remix"} />
}

const HighlightSvelte: TimelineComponent = (props) => {
  return <SequenceHeader timelineItem={props} activeLogo={"svelte"} />
}

const HighlightAstro: TimelineComponent = (props) => {
  return <SequenceHeader timelineItem={props} activeLogo={"astro"} />
}

const ShowPages: TimelineComponent = (props) => {
  return (
    <>
      <SequenceHeader timelineItem={props} />
      <SequenceBody
        timelineItem={props}
        contentState={"hidden"}
        pagesState={"active"}
        processorState={"hidden"}
      />
    </>
  )
}

const ShowContent: TimelineComponent = (props) => {
  return (
    <>
      <SequenceHeader timelineItem={props} />
      <SequenceBody
        timelineItem={props}
        contentState={"active"}
        pagesState={"visible"}
        processorState={"hidden"}
      />
    </>
  )
}

const ShowProcessor: TimelineComponent = (props) => {
  return (
    <>
      <SequenceHeader timelineItem={props} />
      <SequenceBody
        timelineItem={props}
        contentState={"visible"}
        pagesState={"visible"}
        processorState={"active"}
      />
    </>
  )
}

const ShowEverything: TimelineComponent = (props) => {
  return (
    <>
      <SequenceHeader timelineItem={props} />
      <SequenceBody
        timelineItem={props}
        contentState={"visible"}
        pagesState={"visible"}
        processorState={"visible"}
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

  const opacity = useSequenceFade()

  return (
    <div className="w-full h-full" style={{ opacity }}>
      <Component
        startingFrame={startingFrame}
        currentFrame={currentFrame}
        lastFrame={lastFrame}
        fps={fps}
      />
    </div>
  )
}
