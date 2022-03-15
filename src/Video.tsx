import { Composition } from "remotion"
import { ExplainerVideo } from "./compositions/ExplainerVideo"

import "./styles/tailwind.css"
import "./styles/font.css"
import "./styles/layout.css"

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="ExplainerVideo"
        component={ExplainerVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  )
}
