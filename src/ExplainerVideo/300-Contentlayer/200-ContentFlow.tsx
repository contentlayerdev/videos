import { Icon, Logo } from "../../assets"
import { CenteredContent, TBD } from "../../components"
import {
  useSequenceFade,
  useTimeline,
  useTimelineObjectFade,
} from "../../hooks"
import type {
  SequenceComponent,
  TimelineComponent,
  TimelineComponentProps,
} from "../../types"

/* ----- Reference ----- */

type StackItemProps = {
  logos: React.FC[]
  label: string
  className?: string
  highlight?: boolean
}

/* ----- Shared Components ----- */

const StackItem: React.FC<StackItemProps> = ({
  logos,
  className,
  label,
  highlight,
}) => {
  return (
    <div>
      <div className="mb-12 flex h-24 justify-around">
        {logos.map((Component, idx) => {
          return (
            <span
              key={idx}
              className={`svg-h-full mx-8 block h-24 ${
                className ? className : ""
              } ${highlight ? "text-primary" : ""}`}
            >
              <Component />
            </span>
          )
        })}
      </div>
      <span className="block leading-snug text-4xl">{label}</span>
    </div>
  )
}

const PlusIcon: React.FC = () => {
  return (
    <span className="mx-16 block h-12 w-12 text-white opacity-50">
      <Icon.PlusIcon />
    </span>
  )
}

const FlowDiagram: React.FC<{
  timelineItem: TimelineComponentProps
  phase: 1 | 2
  activeStage: 1 | 2 | 3 | 4
}> = ({ phase, activeStage, timelineItem }) => {
  const borderClasses = `rounded-lg border border-slate-500`
  const getOpacity = (stage: number): number => (stage <= activeStage ? 1 : 0)
  const getProcessorOpacity = (): number => {
    if (phase === 1 && activeStage < 4) return 0
    if (phase === 1) {
      return useTimelineObjectFade(timelineItem, {
        defaultOpacity: 0,
        startingOpacity: 1,
      })
    }
    return useTimelineObjectFade(timelineItem)
  }
  const wrapperOpacity = useSequenceFade("out")

  return (
    <div
      className={`flex items-center justify-between text-center px-36 mx-auto`}
      style={{ opacity: wrapperOpacity }}
    >
      <div
        className={`p-12 ${borderClasses}`}
        style={{ opacity: getOpacity(1) }}
      >
        <span className="block" style={{ opacity: getOpacity(2) }}>
          <StackItem
            logos={[Logo.MarkdownLogo, Logo.ContentfulLogo]}
            label="Local/Remote Content"
          />
        </span>
      </div>
      <span className="block" style={{ opacity: getOpacity(3) }}>
        <PlusIcon />
      </span>
      <div
        className={`p-12 ${borderClasses} flex items-center justify-between text-center`}
      >
        <span
          className="block"
          style={{ opacity: getProcessorOpacity(), width: 210 }}
        >
          <StackItem
            logos={[
              phase === 1 ? Icon.QuestionMarkIcon : Logo.ContentlayerLogo,
            ]}
            label={phase === 2 ? "Contentlayer" : "DIY Content"}
            highlight={phase === 2}
          />
        </span>
        <span className="block" style={{ opacity: getOpacity(4) }}>
          <PlusIcon />
        </span>
        <span className="block" style={{ opacity: getOpacity(3) }}>
          <StackItem logos={[Logo.ReactLogo]} label="React Pages" />
        </span>
      </div>
    </div>
  )
}

/* ----- Timeline Components ----- */

const ShowBoxes: TimelineComponent = (props) => {
  return <FlowDiagram timelineItem={props} activeStage={1} phase={1} />
}

const ShowPages: TimelineComponent = (props) => {
  return <FlowDiagram timelineItem={props} activeStage={3} phase={1} />
}

const ShowContent: TimelineComponent = (props) => {
  return <FlowDiagram timelineItem={props} activeStage={2} phase={1} />
}

const ShowProcessor: TimelineComponent = (props) => {
  return <FlowDiagram timelineItem={props} activeStage={4} phase={1} />
}

const ReplaceQuestion: TimelineComponent = (props) => {
  return <FlowDiagram timelineItem={props} activeStage={4} phase={2} />
}

export const Timeline = {
  ShowBoxes,
  ShowPages,
  ShowContent,
  ShowProcessor,
  ReplaceQuestion,
}

/* ----- Sequence Controller ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  return (
    <Component
      startingFrame={startingFrame}
      currentFrame={currentFrame}
      lastFrame={lastFrame}
      fps={fps}
    />
  )
}
