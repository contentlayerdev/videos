import { interpolate } from "remotion"
import { Logo } from "../../assets"
import { CenteredContent } from "../../components"
import {
  useSequenceFade,
  useTimeline,
  useTimelineObjectFade,
} from "../../hooks"
import {
  CurrentTimelineItem,
  SequenceComponent,
  TimelineComponent,
  TimelineComponentProps,
} from "../../types"

const imageUrls = {
  communityImage:
    "https://dl.dropbox.com/s/nj0whfulia8q31l/300-700-community.png",
  documentationImage:
    "https://dl.dropbox.com/s/s5nvsvicdx36gst/300-700-documentation.png",
  examplesImage:
    "https://dl.dropbox.com/s/mcozma38mv0eef5/300-700-examples.png",
  tutorialImage:
    "https://dl.dropbox.com/s/psr23f52tlk6mhv/300-700-tutorial.png",
}

/* ----- Shared Components ----- */

const SequenceTemplate: React.FC<{
  timelineItem: TimelineComponentProps
  imageCount?: number
}> = ({ timelineItem, imageCount = 0 }) => {
  const getOpacity = (index: number): number => {
    if (index + 1 > imageCount) return 0
    if (index + 1 < imageCount) return 100
    return useTimelineObjectFade(timelineItem)
  }

  return (
    <div>
      <CenteredContent className="h-full w-full bg-cover absolute top-0 z-0">
        <span className="block text-8xl font-bold">
          Contentlayer ❤️ Developers
        </span>
      </CenteredContent>
      <div
        className="h-full w-full bg-cover absolute top-0 z-10"
        style={{
          opacity: getOpacity(0),
          backgroundImage: `url(${imageUrls.tutorialImage})`,
        }}
      />
      <div
        className="h-full w-full bg-cover absolute top-0 z-20"
        style={{
          opacity: getOpacity(1),
          backgroundImage: `url(${imageUrls.examplesImage})`,
        }}
      />
      <div
        className="h-full w-full bg-cover absolute top-0 z-30"
        style={{
          opacity: getOpacity(2),
          backgroundImage: `url(${imageUrls.documentationImage})`,
        }}
      />
      <div
        className="h-full w-full bg-cover absolute top-0 z-40"
        style={{
          opacity: getOpacity(3),
          backgroundImage: `url(${imageUrls.communityImage})`,
        }}
      />
    </div>
  )
}

/* ----- Timeline Components ----- */

const BlankSlate: TimelineComponent = (props) => {
  const opacity = useTimelineObjectFade(props)
  return (
    <div style={{ opacity }}>
      <SequenceTemplate timelineItem={props} />
    </div>
  )
}

const ShowTutorialImage: TimelineComponent = (props) => {
  return <SequenceTemplate timelineItem={props} imageCount={1} />
}

const ShowExamplesImage: TimelineComponent = (props) => {
  return <SequenceTemplate timelineItem={props} imageCount={2} />
}

const ShowGettingStartedImage: TimelineComponent = (props) => {
  return <SequenceTemplate timelineItem={props} imageCount={3} />
}

const ShowCommunityImage: TimelineComponent = (props) => {
  const opacity = interpolate(
    props.currentFrame,
    [props.lastFrame - props.fps * 0.5, props.lastFrame],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  )

  return (
    <div style={{ opacity }}>
      <SequenceTemplate timelineItem={props} imageCount={4} />
    </div>
  )
}

const ShowFinalScreen: TimelineComponent = (props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="py-24">
        <div className="inline-flex items-center mb-12">
          <div className="h-32 text-primary mr-10">
            <Logo.ContentlayerLogo />
          </div>
          <h2 className="text-9xl font-bold">Contentlayer</h2>
        </div>
        <h3 className="text-4xl text-center mb-12">contentlayer.dev</h3>
      </div>
    </div>
  )
}

export const Timeline = {
  BlankSlate,
  ShowTutorialImage,
  ShowExamplesImage,
  ShowGettingStartedImage,
  ShowCommunityImage,
  ShowFinalScreen,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  const opacity = useSequenceFade()

  return (
    <div className="w-full h-full" style={{ opacity }}>
      <Component
        startingFrame={startingFrame}
        currentFrame={currentFrame}
        lastFrame={lastFrame}
        fps={fps}
      />
    </div>
  )
}
