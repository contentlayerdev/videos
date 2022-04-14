import { Logo } from "../../../assets"

export const NextPlusMarkdown: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <span className="block h-16 opacity-75">
        <Logo.NextLogo />
      </span>
      <span className="block mx-6 text-6xl opacity-50">+</span>
      <span className="block h-16 opacity-75">
        <Logo.MarkdownLogo />
      </span>
    </div>
  )
}
