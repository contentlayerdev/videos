import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"

const code: string = `
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  return {
    props: { post }
  };
}
`.trim()

export const GetStaticProps = () => {
  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h2 className="text-7xl text-center mb-8 font-bold">
          Define Page Props
        </h2>
        <code className="block text-center text-3xl text-lightGray">
          pages/posts/[slug].tsx
        </code>
      </div>
      <div className="px-48 relative">
        <div className="p-12 rounded-xl bg-gray text-3xl leading-normal mb-12">
          <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
