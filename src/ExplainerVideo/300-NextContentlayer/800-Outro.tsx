import { interpolate } from "remotion"
import { Logo } from "../../assets"
import {
  useSequenceFade,
  useTimeline,
  useTimelineObjectFade,
} from "../../hooks"
import {
  CurrentTimelineItem,
  SequenceComponent,
  TimelineObjectState,
} from "../../types"

import communityImage from "./images/800-community.png"
import documentationImage from "./images/800-documentation.png"
import examplesImage from "./images/800-examples.png"
import tutorialImage from "./images/800-tutorial.png"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Shared Components ----- */

const SequenceTemplate: React.FC<{
  timelineItem: TimelineComponentProps
  imageCount?: number
}> = ({ timelineItem, imageCount = 0 }) => {
  const baseX = 460
  const baseY = 40

  const step = 40

  const getOpacity = (index: number): number => {
    if (index + 1 > imageCount) return 0
    if (index + 1 < imageCount) return 100
    return useTimelineObjectFade(timelineItem)
  }

  return (
    <>
      <div className="pt-12">
        <span className="block mb-8 h-16 opacity-75 text-primary">
          <Logo.ContentlayerLogo />
        </span>
        <h2 className="text-7xl text-center font-bold mb-8">Contentlayer</h2>
        <h3 className="block text-center text-4xl">
          Content made easy for developers.
        </h3>
      </div>
      <div className="relative px-24 py-12">
        <img
          className="block absolute shadow-lg z-10"
          style={{
            height: "600px",
            opacity: getOpacity(0),
            left: `${baseX}px`,
            top: `${baseY}px`,
          }}
          src={tutorialImage}
        />
        <img
          className="block absolute shadow-lg z-20"
          style={{
            height: "600px",
            opacity: getOpacity(1),
            left: `${baseX + step * 1}px`,
            top: `${baseY + step * 1}px`,
          }}
          src={examplesImage}
        />
        <img
          className="block absolute shadow-lg z-30"
          style={{
            height: "600px",
            opacity: getOpacity(2),
            left: `${baseX + step * 2}px`,
            top: `${baseY + step * 2}px`,
          }}
          src={documentationImage}
        />
        <img
          className="block absolute shadow-lg z-40"
          style={{
            height: "600px",
            opacity: getOpacity(3),
            left: `${baseX + step * 3}px`,
            top: `${baseY + step * 3}px`,
          }}
          src={communityImage}
        />
      </div>
    </>
  )
}

/* ----- Timeline Components ----- */

const BlankSlate: TimelineComponent = (props) => {
  return <SequenceTemplate timelineItem={props} />
}

const ShowTutorialImage: TimelineComponent = (props) => {
  return <SequenceTemplate timelineItem={props} imageCount={1} />
}

const ShowExamplesImage: TimelineComponent = (props) => {
  return <SequenceTemplate timelineItem={props} imageCount={2} />
}

const ShowGettingStartedImage: TimelineComponent = (props) => {
  return <SequenceTemplate timelineItem={props} imageCount={3} />
}

const ShowCommunityImage: TimelineComponent = (props) => {
  const opacity = interpolate(
    props.currentFrame,
    [props.lastFrame - props.fps * 0.5, props.lastFrame],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  )

  return (
    <div style={{ opacity }}>
      <SequenceTemplate timelineItem={props} imageCount={4} />
    </div>
  )
}

const ShowFinalScreen: TimelineComponent = (props) => {
  const opacity = useTimelineObjectFade(props)

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="py-24">
        <div className="inline-flex items-center mb-12">
          <div className="h-32 text-primary mr-10">
            <Logo.ContentlayerLogo />
          </div>
          <h2 className="text-9xl font-bold">Contentlayer</h2>
        </div>
        <h3 className="text-4xl text-center mb-12">contentlayer.dev</h3>
      </div>
    </div>
  )
}

export const Timeline = {
  BlankSlate,
  ShowTutorialImage,
  ShowExamplesImage,
  ShowGettingStartedImage,
  ShowCommunityImage,
  ShowFinalScreen,
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
