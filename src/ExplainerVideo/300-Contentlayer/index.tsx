export * as Title from "./100-Title"
export * as ContentFlow from "./200-ContentFlow"
export * as Demo from "./300-Demo"
export * as Benefits from "./400-Benefits"
export * as Performance from "./500-Performance"
export * as Outro from "./600-Outro"

import TitleAudio from "../../../tmp/assets/audio/300-100-Title.wav"
import ContentFlowAudio from "../../../tmp/assets/audio/300-200-ContentFlow.wav"
import DemoAudio from "../../../tmp/assets/audio/300-300-Demo.wav"
import BenefitsAudio from "../../../tmp/assets/audio/300-400-Benefits.wav"
import PerformanceAudio from "../../../tmp/assets/audio/300-500-Performance.wav"
import OutroAudio from "../../../tmp/assets/audio/300-600-Outro.wav"

export const Audio = {
  Title: TitleAudio,
  ContentFlow: ContentFlowAudio,
  // Note: Video brings the audio. This doesn't get used.
  Demo: DemoAudio,
  Benefits: BenefitsAudio,
  Performance: PerformanceAudio,
  Outro: OutroAudio,
}
