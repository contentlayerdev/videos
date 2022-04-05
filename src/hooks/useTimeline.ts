import { useCurrentFrame, useVideoConfig } from "remotion"
import type { TimelineItem, CurrentTimelineItem } from "../types"

export function useTimeline(timeline: TimelineItem[]): CurrentTimelineItem {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()

  const currentTimelineItem = timeline.find((item, idx) => {
    // Item isn't active yet.
    if (frame < item.frame) return false
    // Last item in the timeline is active.
    if (frame >= item.frame && !timeline[idx + 1]) return true
    // If an item that isn't the last item is active.
    if (frame >= item.frame && frame < timeline[idx + 1].frame) return true
  })!

  const currentItemIdx = timeline.indexOf(currentTimelineItem)
  const lastFrame =
    (timeline[currentItemIdx + 1]?.frame ?? durationInFrames) - 1

  return {
    Component: currentTimelineItem.component,
    props: currentTimelineItem.props,
    startingFrame: currentTimelineItem.frame,
    currentFrame: frame,
    lastFrame,
    fps,
  }
}
