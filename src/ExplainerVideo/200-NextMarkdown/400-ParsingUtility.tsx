import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"

const dependencies = `
import fs from "fs";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
`.trim()

const postPreview = `
export const getStaticProps = async ({ params }) => {
  const pagePath = \`/\${params.id.join("/")}\`
  const rawContent = fs.readFileSync(filePath).toString();

  const { data, content } = matter(rawContent);
  const frontmatter = data as PageFrontmatter;

  const body = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content);

  const urlPath = buildPageUrlPath(filePath);

  return {
    ...frontmatter,
    urlPath,
    body: {
      raw: content,
      html: String(body),
    },
  };
};
`.trim()

export const ParsingUtility = () => {
  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h2 className="text-7xl text-center mb-8 font-bold">
          Build Parsing Utility
        </h2>
        <code className="block text-center text-3xl text-lightGray">
          pages/post/[slug].jsx
        </code>
      </div>
      <div className="px-48 relative">
        <div className="p-12 rounded-xl bg-gray text-3xl leading-normal mb-12">
          <SyntaxHighlighter language="javascript">
            {dependencies}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript">
            {postPreview}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
