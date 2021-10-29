import type { FunctionComponent } from 'react'

import { QuoteProps } from '../../types'

export interface ImageQuoteProps extends QuoteProps {
    src: string
    className?: QuoteProps['className'] & {
        overlay?: string
        contentWidth?: string
    }
}

export type ImageQuoteComponent = FunctionComponent<ImageQuoteProps>
