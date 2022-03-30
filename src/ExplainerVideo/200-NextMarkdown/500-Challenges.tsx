import { NegativeIcon } from "../../assets"

const items: string[] = [
  "Lots of dependencies",
  "Builds are slow",
  "Caching is hard",
  "No content validation",
  "Live reloading is challenging",
  "Content isn't relatable",
]

export const Challenges = () => {
  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h3 className="text-4xl text-center uppercase mb-10">
          Next.js + Markdown
        </h3>
        <h2 className="text-7xl text-center font-bold">
          Limitations &amp; Challenges
        </h2>
      </div>
      <div className="px-36 grid grid-cols-2 gap-12">
        {items.map((item, idx) => {
          return (
            <div key={idx} className="inline-flex items-start">
              <span className="block mr-8 mt-2 text-red">
                <NegativeIcon />
              </span>
              <span className="text-5xl leading-normal">{item}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
