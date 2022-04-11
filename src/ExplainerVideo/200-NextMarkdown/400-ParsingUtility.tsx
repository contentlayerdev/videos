import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"
import { useSequenceFade, useTimeline } from "../../hooks"
import { CurrentTimelineItem, SequenceComponent } from "../../types"
import { NextPlusMarkdown } from "./components/NextPlusMarkdown"

/* ----- Types ----- */

type TimelineComponentProps = Pick<
  CurrentTimelineItem,
  "startingFrame" | "currentFrame" | "lastFrame" | "fps"
>

type TimelineComponent = React.FC<TimelineComponentProps>

/* ----- Code Snippets ----- */

const getStaticPropsOpenSnippet = `
export async function getStaticProps = async ({ params }) => {
`.trim()

const getStaticPropsCloseSnippet = `
};
`.trim()

const getStaticPropsSnippet = `
export async function getStaticProps = async ({ params }) => {};
`.trim()

const retrieveSourceFileSnippet = `
  const pagePath = \`/\${params.id.join("/")}\`
  const rawContent = fs.readFileSync(filePath).toString();
`.trim()

const withRetrieveSourceFileSnippet = `
${getStaticPropsOpenSnippet}
  ${retrieveSourceFileSnippet}
${getStaticPropsCloseSnippet}
`.trim()

const dependenciesSnippet = `
import fs from "fs";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
`.trim()

const withDependenciesSnippet = `
${dependenciesSnippet}

${withRetrieveSourceFileSnippet}
`.trim()

const transformCodeSnippet = `
  const { data, content } = matter(rawContent);
  const frontmatter = data as PageFrontmatter;

  const body = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content);

  const urlPath = buildPageUrlPath(filePath);
`.trim()

const withTransformCodeSnippet = `
${dependenciesSnippet}

${getStaticPropsOpenSnippet}
  ${retrieveSourceFileSnippet}

  ${transformCodeSnippet}
${getStaticPropsCloseSnippet}
`.trim()

// Also used by a later sequence.
export const withReturnStatementSnippet = `
${dependenciesSnippet}

${getStaticPropsOpenSnippet}
  ${retrieveSourceFileSnippet}

  ${transformCodeSnippet}

  return {
    ...frontmatter,
    urlPath,
    body: {
      raw: content,
      html: String(body),
    },
  };
${getStaticPropsCloseSnippet}
`.trim()

/* ----- Shared Components ----- */

/* ----- Timeline Components ----- */

const BlankSlate: TimelineComponent = () => {
  return <div className="text-3xl"></div>
}

const ShowGetStaticProps: TimelineComponent = () => {
  return (
    <div className="text-3xl leading-normal">
      <SyntaxHighlighter language="javascript">
        {getStaticPropsSnippet}
      </SyntaxHighlighter>
    </div>
  )
}

const RetrieveSourceFile: TimelineComponent = () => {
  return (
    <div className="text-3xl leading-normal">
      <SyntaxHighlighter language="javascript" highlightLines={[2, 3]}>
        {withRetrieveSourceFileSnippet}
      </SyntaxHighlighter>
    </div>
  )
}

const AddDependencies: TimelineComponent = () => {
  return (
    <div className="leading-normal" style={{ fontSize: "28px" }}>
      <SyntaxHighlighter
        language="javascript"
        highlightLines={[1, 2, 3, 4, 5, 6, 7]}
      >
        {withDependenciesSnippet}
      </SyntaxHighlighter>
    </div>
  )
}

const AddTransformCode: TimelineComponent = () => {
  return (
    <div className="leading-normal" style={{ fontSize: "15px" }}>
      <SyntaxHighlighter
        language="javascript"
        highlightLines={[13, 14, 16, 17, 18, 19, 20, 21, 23]}
      >
        {withTransformCodeSnippet}
      </SyntaxHighlighter>
    </div>
  )
}

const AddReturnStatement: TimelineComponent = () => {
  return (
    <div className="leading-normal" style={{ fontSize: "10px" }}>
      <SyntaxHighlighter
        language="javascript"
        highlightLines={[25, 26, 27, 28, 29, 30, 30, 31, 32]}
      >
        {withReturnStatementSnippet}
      </SyntaxHighlighter>
    </div>
  )
}

export const Timeline = {
  BlankSlate,
  ShowGetStaticProps,
  RetrieveSourceFile,
  AddDependencies,
  AddTransformCode,
  AddReturnStatement,
}

/* ----- Sequence Control ----- */

export const Sequence: SequenceComponent = ({ timeline }) => {
  const { Component, startingFrame, currentFrame, lastFrame, fps } =
    useTimeline(timeline)

  const fadeIn = useSequenceFade("in")
  const fadeOut = useSequenceFade("out")

  return (
    <div className="w-full h-full">
      <div className="pt-12 pb-24">
        <span className="block mb-10">
          <NextPlusMarkdown />
        </span>
        <h2
          className="text-7xl text-center font-bold mb-8"
          style={{ opacity: fadeIn }}
        >
          Build Parsing Utility
        </h2>
        <code
          className="block text-center text-3xl text-lightGray"
          style={{ opacity: fadeOut }}
        >
          pages/post/[slug].jsx
        </code>
      </div>
      <div className="px-48 relative" style={{ opacity: fadeOut }}>
        <div
          className="p-12 rounded-xl bg-gray mb-12 overflow-hidden"
          style={{ height: "620px" }}
        >
          <div style={{ opacity: fadeIn }}>
            <Component
              startingFrame={startingFrame}
              currentFrame={currentFrame}
              lastFrame={lastFrame}
              fps={fps}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
