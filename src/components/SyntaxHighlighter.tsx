import ReactSyntaxHighlighter from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface DataHighlightProps extends React.HTMLAttributes<HTMLDivElement> {
  "data-highlight"?: boolean
}

export const SyntaxHighlighter = ({
  language,
  children,
  highlightLines = [],
  wrapText = true,
  ...props
}: {
  language: string
  children: string
  wrapText?: boolean
  highlightLines?: number[]
}) => {
  const resolveLineHighlight = (line: number): DataHighlightProps => {
    if (highlightLines.includes(line)) return { "data-highlight": true }
    return {}
  }

  return (
    <ReactSyntaxHighlighter
      language={language}
      style={dracula}
      wrapLines={true}
      customStyle={{ background: "#353B47" }}
      lineNumberStyle={() => ({ display: "none" })}
      showLineNumbers={true}
      lineProps={resolveLineHighlight}
      codeTagProps={{ className: wrapText ? "" : "no-wrap" }}
      {...props}
    >
      {children}
    </ReactSyntaxHighlighter>
  )
}
