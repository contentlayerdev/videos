import { Composition } from "remotion"
import { ExplainerVideo } from "./ExplainerVideo"

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
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  )
}
