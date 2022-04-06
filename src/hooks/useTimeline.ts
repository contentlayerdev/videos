import { useCurrentFrame, useVideoConfig } from "remotion"
import type { TimelineItemConfig, CurrentTimelineItem } from "../types"

/**
 * Given a timeline configuration for a particular sequence, find the current
 * timeline item.
 *
 * @param timeline Array of timeline items from config file.
 * @returns Current timeline item, along with useful values from
 * useVideoConfig()
 */
export function useTimeline(
  timeline: TimelineItemConfig[]
): CurrentTimelineItem {
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
    durationInFrames,
  }
}
