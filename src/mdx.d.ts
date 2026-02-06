declare module '*.mdx' {
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element
  export default MDXComponent
}

declare module '*.md' {
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element
  export default MDXComponent
}
