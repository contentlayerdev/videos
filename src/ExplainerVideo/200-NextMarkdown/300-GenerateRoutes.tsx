import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"

const dependencies = `
import fs from "fs";
import glob from "glob";
import path from "path";
`.trim()

const postPreview = `
export const getStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), "../posts");
  const allPostPaths = glob.sync(path.join(postsDir, "**/*.md"));
  allPostPaths.map((filePath) => {
    return filePath
      .replace(contentDir, "")
      .replace(/\\.md$/, "")
      .replace(/\\/index$/, "/");
  });
  return { paths, fallback: false };
};
`.trim()

export const GenerateRoutes = () => {
  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h2 className="text-7xl text-center mb-8 font-bold">
          Generate Post Routes
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
