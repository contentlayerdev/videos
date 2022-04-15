import { Video } from "remotion"
import { useSequenceFade } from "../../hooks"
import type { SequenceComponent } from "../../types"

import localVideoSrc from "../../../tmp/assets/videos/diy-content-demo.mp4"

export const Timeline = {}

export const Sequence: SequenceComponent = () => {
  const opacity = useSequenceFade("in")

  return (
    <div style={{ opacity }}>
      <Video src={localVideoSrc} />
    </div>
  )
}
