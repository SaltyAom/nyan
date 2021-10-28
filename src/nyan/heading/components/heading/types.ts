import type { FunctionComponent } from 'react'

import type { HeadingProps } from '../../types'

export type BaseHeadingProps = Pick<
    HeadingProps,
    | 'title'
    | 'titleClassName'
    | 'content'
    | 'contentClassName'
    | 'notify'
    | 'notifyClassName'
    | 'className'
>

export type BaseHeadingComponent = FunctionComponent<BaseHeadingProps>
