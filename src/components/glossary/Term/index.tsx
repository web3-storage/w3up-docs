import React from 'react'
import { usePluginData } from '@docusaurus/useGlobalData'

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

interface Props {
  id: string
  children: React.ReactNode
}

interface TermData {
  id: string
  definition: string
  name?: string
}

interface PluginData {
  terms: TermData[]
}

export default function Term (props: Props): React.ReactElement {
  const { id } = props

  const { terms } = usePluginData('w3up-glossary-plugin') as PluginData

  const glossaryRoute = '/glossary'

  const matching = terms.filter((t) => t.id === id)
  if (matching.length < 1) {
    console.error(`no term found with id ${id}`)
    return <>{props.children}</>
  }
  if (matching.length > 1) {
    console.warn(`multiple glossary terms defined with id ${id}, using first definition.`)
  }

  const t = matching[0]
  const glossaryAnchor = t.id

  // generate unique anchor id, in case there are multiple Term components for the same term on the page
  const anchor = `term-${id}-${Math.random()}`

  if (t.definition == null) {
    console.error(`term ${id} has no "definition" field defined`)
    return <>{props.children}</>
  }

  return (
    <>
      <a
        id={anchor}
        className="glossary-term-link"
        data-tooltip-content={t.definition}
        href={`${glossaryRoute}#${glossaryAnchor}`}
        >
          {props.children}
      </a>
      <Tooltip anchorId={anchor} />
    </>
  )
}
