import ReactSyntaxHighlighter from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface DataHighlightProps extends React.HTMLAttributes<HTMLDivElement> {
  "data-highlight"?: boolean
}

export const SyntaxHighlighter = ({
  language,
  children,
  highlightLines = [],
  ...props
}: {
  language: string
  children: string
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
      {...props}
    >
      {children}
    </ReactSyntaxHighlighter>
  )
}
