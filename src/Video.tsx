import { Composition } from "remotion"
import { ExplainerVideo } from "./compositions/ExplainerVideo"

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
