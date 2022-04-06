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

/* ----- Shared Components ----- */

export const MetaLogos: React.FC = () => {
  return (
    <div className="mx-auto max-w-lg flex items-center justify-around mb-12 opacity-75">
      <div>
        <Logo.NextLogo />
      </div>
      <div>
        <Logo.RemixLogo />
      </div>
      <div>
        <Logo.SvelteLogo />
      </div>
      <div>
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

const SequenceBody: React.FC<{
  timelineItem: TimelineComponentProps
  contentState: TimelineObjectState
  pagesState: TimelineObjectState
  processorState: TimelineObjectState
}> = (props) => {
  const getOpacity = (state: TimelineObjectState, isArrow: boolean = false) => {
    return useTimelineObjectFade(props.timelineItem, {
      transitionDuration: 0.25,
      defaultOpacity: isArrow ? 0.5 : 0.75,
      maxOpacity: isArrow ? 0.75 : 1,
      state,
    })
  }

  return (
    <div className="py-32 px-36 flex items-center justify-between relative">
      <div style={{ opacity: getOpacity(props.contentState) }}>
        <ContentSources />
      </div>
      <div
        className="w-56"
        style={{ opacity: getOpacity(props.contentState, true) }}
      >
        <Arrow.RightArrow />
      </div>
      <div
        className="w-48 text-primary"
        style={{ opacity: getOpacity(props.processorState) }}
      >
        <Logo.ContentlayerLogo />
      </div>
      <div
        className="w-56"
        style={{ opacity: getOpacity(props.pagesState, true) }}
      >
        <Arrow.RightArrow />
      </div>
      <div style={{ opacity: getOpacity(props.pagesState) }}>
        <PageTemplates />
      </div>
    </div>
  )
}

/* ----- Timeline Components ----- */

const EmptyBody: TimelineComponent = (props) => {
  return <div></div>
}

const ShowProcessor: TimelineComponent = (props) => {
  return (
    <SequenceBody
      timelineItem={props}
      contentState={"hidden"}
      pagesState={"hidden"}
      processorState={"active"}
    />
  )
}

const ShowContent: TimelineComponent = (props) => {
  return (
    <SequenceBody
      timelineItem={props}
      contentState={"active"}
      pagesState={"hidden"}
      processorState={"visible"}
    />
  )
}

const ShowPages: TimelineComponent = (props) => {
  return (
    <SequenceBody
      timelineItem={props}
      contentState={"visible"}
      pagesState={"active"}
      processorState={"visible"}
    />
  )
}

const ShowEverything: TimelineComponent = (props) => {
  return (
    <SequenceBody
      timelineItem={props}
      contentState={"visible"}
      pagesState={"visible"}
      processorState={"visible"}
    />
  )
}

export const Timeline = {
  EmptyBody,
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
      <div className="pt-12 pb-24">
        <MetaLogos />
        <h2 className="text-7xl text-center font-bold mb-10">
          Modern Meta Frameworks
        </h2>
        <h3 className="text-5xl font-thin text-center">
          Content as Data, using Contentlayer
        </h3>
      </div>
      <Component
        startingFrame={startingFrame}
        currentFrame={currentFrame}
        lastFrame={lastFrame}
        fps={fps}
      />
    </div>
  )
}
