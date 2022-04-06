import type { SequenceComponent } from "../../types"
import { useSequenceFade } from "../../hooks"
import { Logo } from "../../assets"

export const Sequence: SequenceComponent = () => {
  const opacity = useSequenceFade()

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="py-24">
        <h3 className="text-5xl font-thin text-center mb-10">Introducing</h3>
        <div className="inline-flex items-center">
          <div className="h-32 text-primary mr-10">
            <Logo.ContentlayerLogo />
          </div>
          <h2 className="text-9xl font-bold">Contentlayer</h2>
        </div>
      </div>
    </div>
  )
}
