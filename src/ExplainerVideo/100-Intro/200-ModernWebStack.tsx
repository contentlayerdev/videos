import {
  RemixLogo,
  NextLogo,
  SvelteLogo,
  QuestionMarkIcon,
  DatabaseIcon,
  PagesIcon,
  Arrow,
} from "../../assets"

export const ModernWebStack = () => {
  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h2 className="text-7xl text-center font-bold">Modern Web Stack</h2>
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
              width: "30rem",
              transform: "rotate(-8deg)",
            }}
          >
            <Arrow.RightDownArrow />
          </span>

          <span className="block h-56">
            <QuestionMarkIcon />
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
