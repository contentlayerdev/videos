import { Video } from "remotion"
import { Logo } from "../../assets"

import {
  useSequenceFade,
  useTimeline,
  useTimelineObjectFade,
} from "../../hooks"
import { CurrentTimelineItem, SequenceComponent } from "../../types"
import VideoSrc from "./video/700-Demo.mp4"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Timeline Components ----- */

const DemoTitle: TimelineComponent = (props) => {
  const opacity = useTimelineObjectFade(props, { defaultOpacity: 0 })

  // Note that the video is here but hidden because it has the audio. I just
  // didn't want to show what was on screen for the first few seconds.

  return (
    <div
      className="py-24 h-full w-full flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="text-center">
        <div className="h-24 text-primary mb-12">
          <Logo.ContentlayerLogo />
        </div>
        <h2 className="text-9xl font-bold">Demo!</h2>
        <div className="hidden">
          <Video src={VideoSrc} />
        </div>
      </div>
    </div>
  )
}

const DemoVideo: TimelineComponent = () => {
  // Note: This starts automatically at the frame it should. Remotion just works
  // this way. We don't have to trim.
  return <Video src={VideoSrc} />
}

export const Timeline = {
  DemoTitle,
  DemoVideo,
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
