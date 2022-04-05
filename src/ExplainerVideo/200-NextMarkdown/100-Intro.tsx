import type { SequenceComponent } from "../../types"
import { useSequenceFade } from "../../hooks"
import { NextPlusMarkdown } from "./components/NextPlusMarkdown"

export const Sequence: SequenceComponent = () => {
  const opacity = useSequenceFade()

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="py-24">
        <span className="block mb-16">
          <NextPlusMarkdown />
        </span>
        <h3 className="text-4xl font-thin text-center mb-10">
          Modern Content Example
        </h3>
        <h2 className="text-8xl text-center font-bold">Next.js + Markdown</h2>
      </div>
    </div>
  )
}
