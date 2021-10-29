import type { FunctionComponent, ReactElement } from 'react'

export interface QuoteProps {
    header?: ReactElement
    quote: ReactElement | string
    author?: ReactElement | string
    className?: {
        container?: string
        quote?: string
        author?: string
        width?: string
        padding?: string
    }
}

export type QuoteComponent = FunctionComponent<QuoteProps>
