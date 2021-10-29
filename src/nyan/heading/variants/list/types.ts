import type { FunctionComponent } from 'react'

import type { HeadingClassName, HeadingProps } from '../../types'

export interface ListHeadingClassName extends HeadingClassName {
    list?: string
    listContainer?: string
}

export interface ListHeadingProps extends Omit<HeadingProps, 'className'> {
    list: string[]
    className?: ListHeadingClassName
}

export type ListHeadingComponent = FunctionComponent<ListHeadingProps>
