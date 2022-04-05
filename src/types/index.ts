import { FC } from "react"

export type CurrentTimelineItem = {
  Component: FC<{ [key: string]: any }>
  props?: { [key: string]: any }
  startingFrame: number
  currentFrame: number
  lastFrame: number
  fps: number
  durationInFrames: number
}

export type TimelineItem = {
  frame: number
  component: FC<any>
  props?: { [key: string]: any }
}

export type SequenceComponent = React.FC<{ timeline: TimelineItem[] }>

export type SequenceConfig = {
  component: SequenceComponent
  durationInFrames: number
  audioSrc: string
  from?: number
  timeline?: TimelineItem[]
}

export type VideoConfig = {
  sequences: SequenceConfig[]
  totalDurationInFrames: number
  fps: number
  width: number
  height: number
}
