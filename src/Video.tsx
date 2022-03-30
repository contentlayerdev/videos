import { Composition } from "remotion"
import {
  ExplainerVideo,
  config as ExplainerVideoConfig,
} from "./ExplainerVideo"
import { ExplainerVideo as OldExplainerVideo } from "./ExplainerVideo--v1"

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
      <Composition
        id="OldExplainerVideo"
        component={OldExplainerVideo}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  )
}
