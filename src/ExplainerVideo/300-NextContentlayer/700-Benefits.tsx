import { Icon, Logo } from "../../assets"
import {
  useSequenceFade,
  useTimeline,
  useTimelineObjectFade,
} from "../../hooks"
import { CurrentTimelineItem, SequenceComponent } from "../../types"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Data ----- */

const positivePointTexts: string[] = [
  "Type-safe content schema",
  "Built-in validations",
  "Live reloading after content update",
  "Caching and incremental regeneration",
  "Scale to complex content relationships",
]

/* ----- Shared Components ----- */

const PositivePoint: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="inline-flex items-start">
      <span className="block mr-8 mt-2 text-green">
        <Icon.PositiveIcon className="w-20" />
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
    <div className="px-36 grid grid-cols-2 gap-20">
      {positivePointTexts.map((text, idx) => {
        return (
          <div key={idx} style={{ opacity: getOpacity(idx) }}>
            <PositivePoint text={text} />
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

export const Timeline = {
  EmptyPoints,
  Point01,
  Point02,
  Point03,
  Point04,
  Point05,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  const opacity = useSequenceFade()

  return (
    <div className="w-full h-full" style={{ opacity }}>
      <div className="pt-12 pb-24">
        <span className="block mb-8 h-16 opacity-75 text-primary">
          <Logo.ContentlayerLogo />
        </span>
        <h2 className="text-7xl text-center font-bold mb-8">
          Contentlayer Benefits
        </h2>
        <h3 className="block text-center text-4xl">
          Contentlayer provides the following benefits:
        </h3>
      </div>
      <div className="px-12 py-8">
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
