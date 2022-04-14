import { Video } from "remotion"
import { useSequenceFade } from "../../hooks"
import type { SequenceComponent } from "../../types"

export const Timeline = {}

export const Sequence: SequenceComponent = ({ timeline }) => {
  const opacity = useSequenceFade("in")

  return (
    <div style={{ opacity }}>
      <Video src="https://dl.dropbox.com/s/bbmmpkinzc7i40v/diy-content-demo.mp4" />
    </div>
  )
}
