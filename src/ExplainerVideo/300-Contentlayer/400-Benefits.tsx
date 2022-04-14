import { interpolate, Video } from "remotion"
import { Icon } from "../../assets"
import { CenteredContent } from "../../components"
import {
  useSequenceFade,
  useTimeline,
  useTimelineObjectFade,
} from "../../hooks"
import type {
  SequenceComponent,
  TimelineComponent,
  TimelineComponentProps,
} from "../../types"

/* ----- Reference ----- */

const positivePointTexts: string[] = [
  "No content processing!",
  "Automatic type definitions",
  "Built-in validations",
  "Caching and incremental regeneration",
  "Live reloading",
  "Complex content relationships",
]

/* ----- Shared Components ----- */

const PositivePoint: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="inline-flex items-start">
      <span className="block mr-8 mt-2 text-green w-20">
        <Icon.PositiveIcon />
      </span>
      <span className="text-5xl leading-normal block mt-2">{text}</span>
    </div>
  )
}

const SequenceBody: React.FC<
  TimelineComponentProps & { activeIndex?: number; opacity?: number }
> = ({ activeIndex, opacity = 1, ...timelineProps }) => {
  const getOpacity = (index: number): number => {
    if (typeof activeIndex === "undefined" || index > activeIndex) return 0
    if (index < activeIndex) return 1
    return useTimelineObjectFade(timelineProps)
  }

  return (
    <div
      className="bg-grayAlpha rounded-xl"
      style={{ maxWidth: "114rem", opacity }}
    >
      <div className="px-36 py-24 grid grid-cols-2 gap-12 gap-y-20">
        {positivePointTexts.map((text, idx) => {
          return (
            <div key={idx} style={{ opacity: getOpacity(idx) }}>
              <PositivePoint text={text} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ----- Timeline Components ----- */

const EmptyPoints: TimelineComponent = (props) => {
  const opacity = interpolate(
    props.currentFrame,
    [props.startingFrame, props.startingFrame + props.fps * 0.25],
    [0, 1],
    { extrapolateRight: "clamp" }
  )
  return <SequenceBody {...props} opacity={opacity} />
}

const Point01: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeIndex={0} />
}

const Point02: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeIndex={1} />
}

const Point03: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeIndex={2} />
}

const Point04: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeIndex={3} />
}

const Point05: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeIndex={4} />
}

const Point06: TimelineComponent = (props) => {
  const opacity = useSequenceFade("out")

  return (
    <div style={{ opacity }}>
      <SequenceBody {...props} activeIndex={5} />
    </div>
  )
}

export const Timeline = {
  EmptyPoints,
  Point01,
  Point02,
  Point03,
  Point04,
  Point05,
  Point06,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  return (
    <div className="w-full h-full">
      <CenteredContent className="relative z-20">
        <Component
          startingFrame={startingFrame}
          currentFrame={currentFrame}
          lastFrame={lastFrame}
          fps={fps}
        />
      </CenteredContent>
      <div className="absolute h-full w-full top-0 left-0 z-10">
        <Video
          src="https://dl.dropbox.com/s/3ivutirfok6p1w1/contentlayer-demo.mp4"
          startFrom={3300}
        />
      </div>
    </div>
  )
}
