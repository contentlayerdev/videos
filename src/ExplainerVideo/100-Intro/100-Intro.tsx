import { useSequenceFade } from "../../hooks"
import { Logo } from "../../assets"
import type { SequenceComponent } from "../../types"

export const Sequence: SequenceComponent = () => {
  const opacity = useSequenceFade("out")

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="py-24">
        <div className="inline-flex items-center" style={{ opacity }}>
          <div className="h-32 text-primary mr-10">
            <Logo.ContentlayerLogo />
          </div>
          <h2 className="text-9xl font-bold">Contentlayer</h2>
        </div>
      </div>
    </div>
  )
}
