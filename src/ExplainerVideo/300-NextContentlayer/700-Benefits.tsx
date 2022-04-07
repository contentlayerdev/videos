import { Icon } from "../../assets"

const items = [
  "Type-safe content schema",
  "Built-in validations",
  "Live reloading after content update",
  "Caching and incremental regeneration",
  "Scale to complex content relationships",
  "Adjust content source without rework",
]

export const Benefits = () => {
  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h2 className="text-7xl text-center font-bold">
          Contentlayer Benefits
        </h2>
      </div>
      <div className="px-36 grid grid-cols-2 gap-12">
        {items.map((item, idx) => {
          return (
            <div key={idx} className="inline-flex items-start">
              <span className="block mr-8 mt-2 text-green">
                <Icon.PositiveIcon />
              </span>
              <span className="text-5xl leading-normal">{item}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
