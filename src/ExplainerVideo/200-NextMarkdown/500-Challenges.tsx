import { Icon } from "../../assets"
import {
  useSequenceFade,
  useTimeline,
  useTimelineObjectFade,
} from "../../hooks"
import { CurrentTimelineItem, SequenceComponent } from "../../types"
import { NextPlusMarkdown } from "./components/NextPlusMarkdown"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Data ----- */

const negativePointTexts: string[] = [
  "Lots of dependencies",
  "Builds are slow",
  "Caching is hard",
  "No content validation",
  "Live reloading is challenging",
  "Content isn't relatable",
]

/* ----- Shared Components ----- */

const NegativePoint: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="inline-flex items-start">
      <span className="block mr-8 mt-2 text-red w-20">
        <Icon.NegativeIcon />
      </span>
      <span className="text-5xl leading-normal block mt-2">{text}</span>
    </div>
  )
}

const SequenceBody: React.FC<
  TimelineComponentProps & { activeIndex?: number }
> = ({ activeIndex, ...timelineProps }) => {
  const getOpacity = (index: number): number => {
    if (typeof activeIndex === "undefined" || index > activeIndex) return 0
    if (index < activeIndex) return 1
    return useTimelineObjectFade(timelineProps)
  }

  return (
    <div className="px-36 grid grid-cols-2 gap-12 gap-y-20">
      {negativePointTexts.map((text, idx) => {
        return (
          <div key={idx} style={{ opacity: getOpacity(idx) }}>
            <NegativePoint text={text} />
          </div>
        )
      })}
    </div>
  )
}

/* ----- Timeline Components ----- */

const EmptyPoints: TimelineComponent = (props) => {
  return <SequenceBody {...props} />
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
  return <SequenceBody {...props} activeIndex={5} />
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

  const opacity = useSequenceFade()

  return (
    <div className="w-full h-full" style={{ opacity }}>
      <div className="pt-12 pb-24">
        <span className="block mb-10">
          <NextPlusMarkdown />
        </span>
        <h2 className="text-7xl text-center font-bold mb-8">
          Build Parsing Utility
        </h2>
        <h3 className="text-4xl text-center">Limitations &amp; Challenges</h3>
      </div>
      <div className="px-24 py-8">
        <Component
          startingFrame={startingFrame}
          currentFrame={currentFrame}
          lastFrame={lastFrame}
          fps={fps}
        />
      </div>
    </div>
  )
}
