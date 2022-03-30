import { SyntaxHighlighter } from "../../components/SyntaxHighlighter"

const contentTree = `
posts/
├── introducing-contentlayer.md
├── what-is-contentlayer.md
└── why-contentlayer.md
`.trim()

const postPreview = `
---
title: What is Contentlayer?
date: 2022-02-22
---

**Contentlayer makes working with content easy.** It is a content preprocessor that validates and transforms your content into type-safe JSON you can easily import into your application.
`.trim()

export const ContentFiles = () => {
  return (
    <div className="w-full h-full">
      <div className="py-24">
        <h2 className="text-7xl text-center font-bold">Content Source Files</h2>
      </div>
      <div className="py-36 px-48 flex items-start justify-between relative">
        <div className="p-12 rounded-xl bg-gray text-3xl leading-normal">
          <SyntaxHighlighter language="text" highlightLines={[4]}>
            {contentTree}
          </SyntaxHighlighter>
        </div>
        <div className="p-12 rounded-xl bg-gray text-3xl leading-normal">
          <SyntaxHighlighter language="yaml">{postPreview}</SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
