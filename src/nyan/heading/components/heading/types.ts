import type { FunctionComponent } from 'react'

import type { HeadingProps } from '../../types'

export interface BaseHeadingProps extends Pick<
    HeadingProps,
    | 'title'
    | 'content'
    | 'notify'
> {
    className?: {
        heading?: string
        title?: string
        content?: string
        notify?: string
    }
}

export type BaseHeadingComponent = FunctionComponent<BaseHeadingProps>
