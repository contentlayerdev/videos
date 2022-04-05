import {
  ContentIcon,
  QuestionMarkIcon,
  DatabaseIcon,
  PagesIcon,
  NextLogo,
  RemixLogo,
  SvelteLogo,
  AstroLogo,
  Arrow,
  MarkdownLogo,
  ContentfulLogo,
  ReactLogo,
  VueLogo,
} from "../../assets"

const ContentToPages = () => {
  return (
    <div className="mx-auto max-w-lg flex items-center justify-around mb-12">
      <div className="bg-gray flex items-center justify-between p-8 rounded-2xl">
        <span className="h-6 block opacity-75">
          <ContentIcon />
        </span>
      </div>
      <div className="w-48 opacity-50">
        <Arrow.RightArrow />
      </div>
      <div className="bg-gray flex items-center justify-between p-8 rounded-2xl">
        <span className="h-6 block opacity-75">
          <PagesIcon />
        </span>
      </div>
    </div>
  )
}

const MetaLogos = () => {
  return (
    <div className="mx-auto max-w-lg flex items-center justify-around mb-12">
      <div className="opacity-50">
        <NextLogo />
      </div>
      <div className="opacity-50">
        <RemixLogo />
      </div>
      <div className="opacity-50">
        <SvelteLogo />
      </div>
      <div className="opacity-50">
        <AstroLogo />
      </div>
    </div>
  )
}

const ContentSources = () => {
  return (
    <div className="border-2 rounded-lg p-12 border-lightGray">
      <div className="flex items-center justify-between mb-8">
        <div className="h-20 mx-6">
          <MarkdownLogo />{" "}
        </div>
        <div className="h-20 mx-6">
          <ContentfulLogo />
        </div>
      </div>
      <h3 className="text-4xl text-center leading-normal">
        Local/Remote
        <br />
        Content
      </h3>
    </div>
  )
}

const PageTemplates = () => {
  return (
    <div className="border-2 rounded-lg p-12 border-lightGray">
      <div className="flex items-center justify-between mb-8">
        <div className="h-20 mx-6">
          <ReactLogo />{" "}
        </div>
        <div className="h-16 mx-6">
          <VueLogo />
        </div>
      </div>
      <h3 className="text-4xl text-center leading-normal">
        Component
        <br />
        Templates
      </h3>
    </div>
  )
}

export const ModernWebStack = () => {
  return (
    <div className="w-full h-full">
      <div className="pt-12 pb-24">
        {/* <ContentToPages /> */}
        <MetaLogos />
        <h2 className="text-7xl text-center font-bold mb-10">
          Modern Meta Frameworks
        </h2>
        <h3 className="text-5xl font-thin text-center">
          Content as Data, Unprescribed.
        </h3>
      </div>
      <div className="py-32 px-24 flex items-center justify-between relative">
        <div>
          <ContentSources />
        </div>
        <div className="opacity-50 w-56">
          <Arrow.RightArrow />
        </div>
        <div className="w-36">
          <QuestionMarkIcon />
        </div>
        <div className="opacity-50 w-56">
          <Arrow.RightArrow />
        </div>
        <div>
          <PageTemplates />
        </div>
      </div>
    </div>
  )
}
