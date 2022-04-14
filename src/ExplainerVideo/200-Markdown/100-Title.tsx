import { Logo } from "../../assets"
import { CenteredContent } from "../../components"
import { useSequenceFade, useTimeline } from "../../hooks"
import type { SequenceComponent, TimelineComponent } from "../../types"

/* ----- Shared Components ----- */

const SucksContent: React.FC<{ stage: 1 | 2 | 3 }> = ({ stage }) => {
  return (
    <div>
      <span className="text-6xl block mb-6">
        <span>Content</span>
        &nbsp;
        <span style={{ opacity: stage >= 2 ? "1" : "0" }}>Processing</span>
      </span>
      <span
        className="block text-9xl uppercase"
        style={{ opacity: stage >= 3 ? "1" : "0" }}
      >
        Sucks
      </span>
    </div>
  )
}

const DemoContent: React.FC<{ stage: 1 | 2 | 3 | 4 }> = ({ stage }) => {
  return (
    <div>
      <span className="block text-8xl mb-12">Demo Time!</span>
      <div className="inline-flex items-center">
        <span
          className="block h-28"
          style={{ opacity: stage >= 2 ? "1" : "0" }}
        >
          <Logo.NextLogo />
        </span>
        <span
          className="block text-7xl mx-8"
          style={{ opacity: stage >= 3 ? "1" : "0" }}
        >
          +
        </span>
        <span
          className="block h-28"
          style={{ opacity: stage >= 4 ? "1" : "0" }}
        >
          <Logo.MarkdownLogo />
        </span>
      </div>
    </div>
  )
}

/* ----- Timeline Components ----- */

const ShowDIY: TimelineComponent = (props) => {
  return <SucksContent stage={1} />
}

const ShowContent: TimelineComponent = (props) => {
  return <SucksContent stage={2} />
}

const ShowSucks: TimelineComponent = (props) => {
  return <SucksContent stage={3} />
}

const ShowSeriously: TimelineComponent = (props) => {
  return (
    <CenteredContent>
      <span className="block text-9xl">Seriously.</span>
    </CenteredContent>
  )
}

const ShowDemoTime: TimelineComponent = (props) => {
  return <DemoContent stage={1} />
}

const ShowNext: TimelineComponent = (props) => {
  return <DemoContent stage={2} />
}

const ShowPlus: TimelineComponent = (props) => {
  return <DemoContent stage={3} />
}

const ShowMarkdown: TimelineComponent = (props) => {
  return <DemoContent stage={4} />
}

export const Timeline = {
  ShowDIY,
  ShowContent,
  ShowSucks,
  ShowSeriously,
  ShowDemoTime,
  ShowNext,
  ShowPlus,
  ShowMarkdown,
}

/* ----- Sequence Controller ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  const opacity = useSequenceFade("out")

  return (
    <CenteredContent style={{ opacity }} className="text-center">
      <Component
        startingFrame={startingFrame}
        currentFrame={currentFrame}
        lastFrame={lastFrame}
        fps={fps}
      />
    </CenteredContent>
  )
}
