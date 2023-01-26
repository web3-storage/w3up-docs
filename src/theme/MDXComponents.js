
import MDXComponents from '@theme-original/MDXComponents'
import Term from '@site/src/components/glossary/Term'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  Term
}
