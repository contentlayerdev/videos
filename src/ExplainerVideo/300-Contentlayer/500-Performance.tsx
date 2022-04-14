import { interpolate, Video } from "remotion"
import { Icon } from "../../assets"
import { CenteredContent } from "../../components"
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

/* ----- Shared Components ----- */

const TableHeadCell: React.FC<{
  style?: React.CSSProperties
  className?: string
}> = ({ children, className, style }) => {
  return (
    <th className={`py-8 px-6 ${className}`} style={style}>
      {children}
    </th>
  )
}

const TableCell: React.FC<{
  style?: React.CSSProperties
  className?: string
}> = ({ children, className, style }) => {
  return (
    <td className={`py-6 px-6 ${className}`} style={style}>
      {children}
    </td>
  )
}

const SequenceBody: React.FC<
  TimelineComponentProps & { activeStage: number; opacity?: number }
> = ({ activeStage, opacity = 1, ...timelineProps }) => {
  const getOpacity = (stage: number): number => (stage <= activeStage ? 1 : 0)

  return (
    <div
      className="bg-grayAlpha rounded-xl"
      style={{ maxWidth: "114rem", opacity }}
    >
      <div className="px-36 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4" style={{ opacity: getOpacity(1) }}>
            Build Time Comparison
          </h2>
          <span className="block text-3xl" style={{ opacity: getOpacity(3) }}>
            (1k files)
          </span>
        </div>
        <table className="table-fixed">
          <thead className="text-5xl">
            <tr
              className={getOpacity(1) === 1 ? `border-b-2` : ""}
              style={{ opacity: getOpacity(1) }}
            >
              <TableHeadCell style={{ width: "35rem" }}></TableHeadCell>
              <TableHeadCell style={{ opacity: getOpacity(4) }}>
                Cold Build
              </TableHeadCell>
              <TableHeadCell style={{ opacity: getOpacity(7) }}>
                Cached Build
              </TableHeadCell>
            </tr>
          </thead>
          <tbody className="table-fixed text-4xl">
            <tr>
              <TableCell className="pt-12" style={{ opacity: getOpacity(2) }}>
                Next.js + Contentlayer
              </TableCell>
              <TableCell
                className="text-green font-bold pt-12"
                style={{ opacity: getOpacity(4) }}
              >
                25.73 s
              </TableCell>
              <TableCell
                className="text-green font-bold pt-12"
                style={{ opacity: getOpacity(8) }}
              >
                16.29 s
              </TableCell>
            </tr>
            <tr>
              <TableCell style={{ opacity: getOpacity(2) }}>
                Next.js + DIY Content
              </TableCell>
              <TableCell style={{ opacity: getOpacity(4) }}>44.48 s</TableCell>
              <TableCell style={{ opacity: getOpacity(8) }}>39.27 s</TableCell>
            </tr>
            <tr>
              <TableCell style={{ opacity: getOpacity(5) }}>Gatsby</TableCell>
              <TableCell style={{ opacity: getOpacity(6) }}>46.59 s</TableCell>
              <TableCell style={{ opacity: getOpacity(8) }}>25.73 s</TableCell>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ----- Timeline Components ----- */

const Stage00: TimelineComponent = (props) => {
  const opacity = interpolate(
    props.currentFrame,
    [props.startingFrame, props.startingFrame + props.fps * 0.25],
    [0, 1],
    { extrapolateRight: "clamp" }
  )
  return <SequenceBody {...props} activeStage={0} opacity={opacity} />
}

const Stage01: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeStage={1} />
}

const Stage02: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeStage={2} />
}

const Stage03: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeStage={3} />
}

const Stage04: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeStage={4} />
}

const Stage05: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeStage={5} />
}

const Stage06: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeStage={6} />
}

const Stage07: TimelineComponent = (props) => {
  return <SequenceBody {...props} activeStage={7} />
}

const Stage08: TimelineComponent = (props) => {
  const opacity = useSequenceFade("out")

  return (
    <div style={{ opacity }}>
      <SequenceBody {...props} activeStage={8} />
    </div>
  )
}

export const Timeline = {
  Stage00,
  Stage01,
  Stage02,
  Stage03,
  Stage04,
  Stage05,
  Stage06,
  Stage07,
  Stage08,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  const opacity = useSequenceFade("out")

  return (
    <div className="w-full h-full" style={{ opacity }}>
      <CenteredContent className="relative z-20">
        <Component
          startingFrame={startingFrame}
          currentFrame={currentFrame}
          lastFrame={lastFrame}
          fps={fps}
        />
      </CenteredContent>
      <div className="absolute h-full w-full top-0 left-0 z-10">
        <Video
          src="https://dl.dropbox.com/s/3ivutirfok6p1w1/contentlayer-demo.mp4"
          startFrom={4140}
        />
      </div>
    </div>
  )
}
