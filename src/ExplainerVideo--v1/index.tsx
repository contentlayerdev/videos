import { Sequence } from "remotion"

import {
  IntroSequence,
  ThreeDecisionsSequence,
  FrameworkDecisionSequence,
  ContentManagementDecisionSequence,
  ContentDeliveryDecisionSequence,
  TemplateBasedSequence,
  GraphQLContentSequence,
  OpenContentSequence,
  OpenContentExampleSequence01,
  OpenContentExampleSequence02,
  OpenContentExampleSequence03,
  OpenContentExampleSequence04,
  IdealContentDeliverySequence,
  ContentlayerCaseTitleSequence,
  ContentlayerFlowSequence,
  HowItWorksSequence01,
  HowItWorksSequence02,
  HowItWorksSequence03,
  PerformanceSequence,
  UseCaseSequence,
  FutureSequence,
  OutroSequence,
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
      <Sequence from={110} durationInFrames={10}>
        <GraphQLContentSequence />
      </Sequence>
      <Sequence from={120} durationInFrames={10}>
        <OpenContentSequence />
      </Sequence>
      <Sequence from={130} durationInFrames={10}>
        <OpenContentExampleSequence01 />
      </Sequence>
      <Sequence from={140} durationInFrames={10}>
        <OpenContentExampleSequence02 />
      </Sequence>
      <Sequence from={150} durationInFrames={10}>
        <OpenContentExampleSequence03 />
      </Sequence>
      <Sequence from={160} durationInFrames={10}>
        <OpenContentExampleSequence04 />
      </Sequence>
      <Sequence from={170} durationInFrames={10}>
        <IdealContentDeliverySequence />
      </Sequence>
      <Sequence from={180} durationInFrames={10}>
        <ContentlayerCaseTitleSequence />
      </Sequence>
      <Sequence from={190} durationInFrames={10}>
        <ContentlayerFlowSequence />
      </Sequence>
      <Sequence from={200} durationInFrames={10}>
        <HowItWorksSequence01 />
      </Sequence>
      <Sequence from={210} durationInFrames={10}>
        <HowItWorksSequence02 />
      </Sequence>
      <Sequence from={220} durationInFrames={10}>
        <HowItWorksSequence03 />
      </Sequence>
      <Sequence from={230} durationInFrames={10}>
        <PerformanceSequence />
      </Sequence>
      <Sequence from={240} durationInFrames={10}>
        <UseCaseSequence />
      </Sequence>
      <Sequence from={250} durationInFrames={10}>
        <FutureSequence />
      </Sequence>
      <Sequence from={260} durationInFrames={10}>
        <OutroSequence />
      </Sequence>
    </div>
  )
}
