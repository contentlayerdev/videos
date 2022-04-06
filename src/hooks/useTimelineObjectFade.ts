import { interpolate } from "remotion"
import { CurrentTimelineItem, TimelineObjectState } from "../types"

type FadeOptions = {
  state: TimelineObjectState
  /**
   * resting opacity when active. If maxOpacity is larger, it will fade back to
   * this opacity.
   */
  defaultOpacity?: number
  /** Opacity after the fade in until just before the fade out. */
  maxOpacity?: number
  /** Duration (in seconds) of the fade transition. */
  transitionDuration?: number
  /**
   * The opacity from which to start the fade. This is usually 0 when starting
   * from hidden, but some elements may use this value when transitioning from a
   * visible state. In that case, it should probably match the defaultOpacity.
   */
  startingOpacity?: number
}

/**
 * Calculates the current opacity for a given object, based on its state and the
 * current frame, with options for default, max, and transition duration.
 *
 * This provides a means for using state values on a shared component to
 * determine the current opacity for a given element.
 *
 * @param timelineItem Frame values for the current timeline object
 * @param fadeOptions Options to control the fade animation
 * @returns Opacity value to use for the object
 */
export function useTimelineObjectFade(
  timelineItem: Pick<
    CurrentTimelineItem,
    "startingFrame" | "currentFrame" | "lastFrame" | "fps"
  >,
  fadeOptions: FadeOptions
): number {
  const { startingFrame, currentFrame, lastFrame, fps } = timelineItem
  // Notice that we don't fade out if defaults are left in place.
  const {
    state,
    defaultOpacity = 1,
    transitionDuration = 0.5,
    maxOpacity = 1,
    startingOpacity = 0,
  } = fadeOptions
  // Hidden elements always have a 0 opacity.
  if (state === "hidden") return 0
  // Visible elements rest at their defaultOpacity.
  if (state === "visible") return defaultOpacity
  // Otherwise, the element is active and we calculate its current opacity
  // value.
  return interpolate(
    currentFrame,
    [
      startingFrame,
      startingFrame + fps * transitionDuration,
      lastFrame - fps * transitionDuration,
      lastFrame,
    ],
    [startingOpacity, maxOpacity, maxOpacity, defaultOpacity],
    { extrapolateRight: "clamp" }
  )
}
