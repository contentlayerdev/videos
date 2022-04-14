import { FC } from "react"

/* ----- Sequences ----- */

/**
 * Props to be passed to a timeline component. (Used below in component
 * definition).
 */
export type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

/**
 * A React timeline component, used by a sequence controller.
 */
export type TimelineComponent = FC<TimelineComponentProps>

/* ----- Configuration ----- */

/**
 * Configuration for a composition.
 */
export type VideoConfig = {
  sequences: SequenceConfig[]
  totalDurationInFrames: number
  fps: number
  width: number
  height: number
}

/**
 * Configuration object for a sequence within a composition.
 */
export type SequenceConfig = {
  name?: string
  component: SequenceComponent
  durationInFrames: number
  audioSrc?: string
  from?: number
  timeline?: TimelineItemConfig[]
}

/**
 * Parent component for a sequence. For sequences with timelines, this is the
 * component responsible for controlling the timeline, which is often done using
 * the useTimeline() hook.
 */
export type SequenceComponent = React.FC<{ timeline: TimelineItemConfig[] }>

/**
 * Configuration for a timeline item. These are defined in the config for a
 * composition, and then used by the useTimeline() hook to output a
 * CurrentTimelineItem.
 */
export type TimelineItemConfig = {
  frame: number
  component: FC<any>
  props?: { [key: string]: any }
}

/* ----- useTimeline() ----- */

/**
 * Represents useful values for the current timeline item.
 *
 * See hook: useTimeline()
 */
export type CurrentTimelineItem = {
  Component: FC<{ [key: string]: any }>
  props?: { [key: string]: any }
  startingFrame: number
  currentFrame: number
  lastFrame: number
  fps: number
  durationInFrames: number
}

/* ----- useTimelineObjectFade() ----- */

/**
 * Tracks the visibility of a particular element in a shared component, used to
 * move objects across various timeline items.
 *
 * See hook: useTimelineObjectFade()
 */
export type TimelineObjectState = "active" | "hidden" | "visible"
