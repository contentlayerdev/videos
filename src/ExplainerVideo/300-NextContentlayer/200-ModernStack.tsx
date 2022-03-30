import { ContentlayerLogo, DatabaseIcon, PagesIcon, Arrow } from "../../assets"

export const ModernStack = () => {
  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h3 className="text-3xl text-center uppercase mb-6">
          With Contentlayer
        </h3>
        <h2 className="text-7xl text-center font-bold">Modern Content Stack</h2>
      </div>
      <div className="py-32 px-24 flex items-center justify-between relative">
        <div className="relative">
          <div
            className="text-4xl uppercase py-6 px-12 border transform -rotate-12 absolute rounded-xl"
            style={{ top: "-5rem", left: "-2rem" }}
          >
            Sources
          </div>
          <div className="bg-gray flex items-center justify-between py-16 px-32 rounded-2xl">
            <span className="h-32 block">
              <DatabaseIcon />
            </span>
          </div>
        </div>
        <div>
          <span
            className="block absolute text-gray transform"
            style={{
              left: "24rem",
              top: "-2rem",
              width: "32rem",
              transform: "rotate(2deg)",
            }}
          >
            <Arrow.RightDownArrow />
          </span>

          <span className="block h-56 text-primary">
            <ContentlayerLogo />
          </span>
          <span
            className="block absolute text-gray transform"
            style={{
              left: "60rem",
              bottom: "3rem",
              width: "28rem",
              transform: "rotate(-10deg)",
            }}
          >
            <Arrow.RightLoopArrow />
          </span>
        </div>
        <div className="relative">
          <div
            className="text-4xl uppercase py-6 px-12 border transform rotate-12 absolute rounded-xl"
            style={{ top: "-5rem", right: "-2rem" }}
          >
            Pages
          </div>
          <div className="bg-gray flex items-center justify-between py-16 px-32 rounded-2xl">
            <span className="h-32 block">
              <PagesIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
