import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"

const code: string = `
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.md',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true }
  }
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
`.trim()

export const Configuration = () => {
  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h2 className="text-7xl text-center mb-8 font-bold">
          Configure Content
        </h2>
        <code className="block text-center text-3xl text-lightGray">
          contentlayer.config.ts
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
