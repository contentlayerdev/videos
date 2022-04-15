export * as Title from "./100-Title"
export * as Demo from "./200-Demo"
export * as Challenges from "./300-Challenges"

import TitleAudio from "../../../tmp/assets/audio/200-100-Title.wav"
import DemoAudio from "../../../tmp/assets/audio/200-200-Demo.wav"
import ChallengesAudio from "../../../tmp/assets/audio/200-300-Challenges.wav"

export const Audio = {
  Title: TitleAudio,
  // Note: The video brings the audio for this sequence. This isn't used.
  Demo: DemoAudio,
  Challenges: ChallengesAudio,
}
