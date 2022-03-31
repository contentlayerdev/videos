import { ContentlayerLogo } from "../../assets"

export const Intro = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="py-24">
        <h3 className="text-4xl text-center uppercase mb-10">Introducing</h3>
        <div className="inline-flex items-center">
          <div className="h-32 text-primary mr-10">
            <ContentlayerLogo />
          </div>
          <h2 className="text-9xl font-bold">Contentlayer</h2>
        </div>
      </div>
    </div>
  )
}