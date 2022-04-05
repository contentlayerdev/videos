import { Composition } from "remotion"
import {
  ExplainerVideo,
  config as ExplainerVideoConfig,
} from "./ExplainerVideo"

import "./styles/tailwind.css"
import "./styles/font.css"
import "./styles/globals.css"
import "./styles/layout.css"
import "./styles/hljs.css"

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="ExplainerVideo"
        component={ExplainerVideo}
        durationInFrames={ExplainerVideoConfig.totalDurationInFrames}
        fps={ExplainerVideoConfig.fps}
        width={ExplainerVideoConfig.width}
        height={ExplainerVideoConfig.height}
        defaultProps={{}}
      />
    </>
  )
}
