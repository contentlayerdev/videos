import { interpolate, useCurrentFrame, useVideoConfig } from "remotion"

/**
 * Provides opacity values for fading sequences in and out.
 *
 * @param fadeDirection Apply fade at the beginning or end of sequence, or both.
 * @param fadeDuration Duration for the fade effect (in seconds). Defaults to 0.5.
 * @returns {number} Opacity value to use as a style
 */
export function useSequenceFade(
  fadeDirection: "in" | "out" | "both" = "both",
  fadeDuration: number = 0.25
): number {
  const currentFrame = useCurrentFrame()
  const { durationInFrames, fps } = useVideoConfig()
  // Number of frames required for each transition (in and out).
  const transitionDuration = fps * fadeDuration

  let frameValues = []
  let opacityValues = []
  if (["in", "both"].includes(fadeDirection)) {
    frameValues.push(0, transitionDuration)
    opacityValues.push(0, 1)
  }
  if (["out", "both"].includes(fadeDirection)) {
    frameValues.push(durationInFrames - transitionDuration, durationInFrames)
    opacityValues.push(1, 0)
  }

  const opacity = interpolate(currentFrame, frameValues, opacityValues, {
    extrapolateRight: "clamp",
  })

  return opacity
}
