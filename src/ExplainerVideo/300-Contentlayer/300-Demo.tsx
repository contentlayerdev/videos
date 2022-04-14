import { Video } from "remotion"
import { useSequenceFade } from "../../hooks"
import type { SequenceComponent } from "../../types"

export const Timeline = {}

export const Sequence: SequenceComponent = () => {
  const opacity = useSequenceFade("in")

  return (
    <div style={{ opacity }}>
      <Video src="https://dl.dropbox.com/s/3ivutirfok6p1w1/contentlayer-demo.mp4" />
    </div>
  )
}
