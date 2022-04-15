import { interpolate } from "remotion"
import { Icon, Logo } from "../../assets"
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

const imageUrls = [
  "https://dl.dropbox.com/s/bq67vkcbu02xzgk/100-200-next.png",
  "https://dl.dropbox.com/s/tcjsj4vjwzowt7y/100-200-remix.png",
  "https://dl.dropbox.com/s/p6uz853yenhcn4l/100-200-svelte.png",
  "https://dl.dropbox.com/s/j775xecbssuol5q/100-200-astro.png",
]

type StackItemProps = {
  logos: React.FC[]
  label: string
  className?: string
}

/* ----- Shared Components ----- */

const ShowImage: React.FC<{
  imageCount: number
  timelineItem: TimelineComponentProps
}> = (props) => {
  const getOpacity = (index: number): number => {
    if (index + 1 > props.imageCount) return 0
    if (index + 1 < props.imageCount) return 100
    return useTimelineObjectFade(props.timelineItem, {
      transitionDuration: 0.5,
    })
  }

  return (
    <div>
      {imageUrls.map((src, idx) => (
        <img
          className="w-full block absolute top-0 left-0"
          style={{ opacity: getOpacity(idx), zIndex: idx + 2 }}
          src={src}
        />
      ))}
    </div>
  )
}

const StackItem: React.FC<StackItemProps> = ({ logos, className, label }) => {
  return (
    <div>
      <div className="mb-12 flex h-24 justify-around">
        {logos.map((Component, idx) => {
          return (
            <span
              key={idx}
              className={`svg-h-full mx-8 block h-24 ${
                className ? className : ""
              }`}
            >
              <Component />
            </span>
          )
        })}
      </div>
      <span className="block leading-snug text-4xl">{label}</span>
    </div>
  )
}

const PlusIcon: React.FC = () => {
  return (
    <span className="mx-16 block h-12 w-12 text-white opacity-50">
      <Icon.PlusIcon />
    </span>
  )
}

const FlowDiagram: React.FC<{ activeStage: 1 | 2 | 3 | 4 }> = ({
  activeStage,
}) => {
  const borderClasses = `rounded-lg border border-slate-500`
  const getOpacity = (stage: number): number => (stage <= activeStage ? 1 : 0)
  const wrapperOpacity = useSequenceFade("out")

  return (
    <div
      className={`flex items-center justify-between text-center px-36 mx-auto`}
      style={{ opacity: wrapperOpacity }}
    >
      <div
        className={`p-12 ${borderClasses}`}
        style={{ opacity: getOpacity(1) }}
      >
        <span className="block" style={{ opacity: getOpacity(3) }}>
          <StackItem
            logos={[Logo.MarkdownLogo, Logo.ContentfulLogo]}
            label="Local/Remote Content"
          />
        </span>
      </div>
      <span className="block" style={{ opacity: getOpacity(3) }}>
        <PlusIcon />
      </span>
      <div
        className={`p-12 ${borderClasses} flex items-center justify-between text-center`}
      >
        <span className="block" style={{ opacity: getOpacity(4) }}>
          <StackItem
            logos={[Icon.QuestionMarkIcon]}
            label="DIY Content Processor"
          />
        </span>
        <span className="block" style={{ opacity: getOpacity(4) }}>
          <PlusIcon />
        </span>
        <span className="block" style={{ opacity: getOpacity(2) }}>
          <StackItem logos={[Logo.ReactLogo]} label="React Pages" />
        </span>
      </div>
    </div>
  )
}

/* ----- Timeline Components ----- */

const HighlightNext: TimelineComponent = (props) => {
  return <ShowImage imageCount={1} timelineItem={props} />
}

const HighlightRemix: TimelineComponent = (props) => {
  return <ShowImage imageCount={2} timelineItem={props} />
}

const HighlightSvelte: TimelineComponent = (props) => {
  return <ShowImage imageCount={3} timelineItem={props} />
}

const HighlightAstro: TimelineComponent = (props) => {
  const opacity = interpolate(
    props.currentFrame,
    [props.lastFrame - 0.5 * props.fps, props.lastFrame],
    [1, 0]
  )

  return (
    <div style={{ opacity }}>
      <ShowImage imageCount={4} timelineItem={props} />
    </div>
  )
}

const ShowBoxes: TimelineComponent = (props) => {
  return <FlowDiagram activeStage={1} />
}

const ShowPages: TimelineComponent = (props) => {
  return <FlowDiagram activeStage={2} />
}

const ShowContent: TimelineComponent = (props) => {
  return <FlowDiagram activeStage={3} />
}

const ShowProcessor: TimelineComponent = (props) => {
  return <FlowDiagram activeStage={4} />
}

export const Timeline = {
  HighlightNext,
  HighlightRemix,
  HighlightSvelte,
  HighlightAstro,
  ShowBoxes,
  ShowPages,
  ShowContent,
  ShowProcessor,
}

/* ----- Sequence Controller ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  return (
    <Component
      startingFrame={startingFrame}
      currentFrame={currentFrame}
      lastFrame={lastFrame}
      fps={fps}
    />
  )
}
