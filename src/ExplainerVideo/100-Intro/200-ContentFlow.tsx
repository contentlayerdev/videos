import { useTimeline, useTimelineObjectFade } from "../../hooks"
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

/* ----- Shared Components ----- */

const ShowImage: React.FC<{
  imageCount: number
  timelineItem: TimelineComponentProps
}> = (props) => {
  const getOpacity = (index: number): number => {
    if (index + 1 > props.imageCount) return 0
    if (index + 1 < props.imageCount) return 100
    return useTimelineObjectFade(props.timelineItem)
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
  return <ShowImage imageCount={4} timelineItem={props} />
}

export const Timeline = {
  HighlightNext,
  HighlightRemix,
  HighlightSvelte,
  HighlightAstro,
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
