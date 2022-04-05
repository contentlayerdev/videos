import { Logo } from "../../assets"
import { useSequenceFade } from "../../hooks"

export const Intro = () => {
  const opacity = useSequenceFade()

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="py-24">
        <div className="flex items-center justify-center mb-16">
          <span className="block opacity-75">
            <Logo.NextLogo />
          </span>
          <span className="block mx-6 text-6xl opacity-50">+</span>
          <span className="block opacity-75">
            <Logo.MarkdownLogo />
          </span>
        </div>
        <h3 className="text-4xl font-thin text-center mb-10">
          Modern Content Example
        </h3>
        <h2 className="text-8xl text-center font-bold">Next.js + Markdown</h2>
      </div>
    </div>
  )
}
