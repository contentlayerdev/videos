import { Sequence } from "remotion"

import {
  IntroSequence,
  ThreeDecisionsSequence,
  FrameworkDecisionSequence,
  ContentManagementDecisionSequence,
  ContentDeliveryDecisionSequence,
  TemplateBasedSequence,
} from "./sequences"

export const ExplainerVideo: React.FC<{}> = () => {
  return (
    <div className="video-layout bg-black text-white">
      <Sequence from={0} durationInFrames={60}>
        <IntroSequence />
      </Sequence>
      <Sequence from={60} durationInFrames={10}>
        <ThreeDecisionsSequence />
      </Sequence>
      <Sequence from={70} durationInFrames={10}>
        <FrameworkDecisionSequence />
      </Sequence>
      <Sequence from={80} durationInFrames={10}>
        <ContentManagementDecisionSequence />
      </Sequence>
      <Sequence from={90} durationInFrames={10}>
        <ContentDeliveryDecisionSequence />
      </Sequence>
      <Sequence from={100} durationInFrames={10}>
        <TemplateBasedSequence />
      </Sequence>
    </div>
  )
}
