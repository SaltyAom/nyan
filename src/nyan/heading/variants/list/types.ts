import type { FunctionComponent } from 'react'

import type { HeadingProps } from '../../types'

export interface ListHeadingProps extends HeadingProps {
    list: string[]
    listClassName?: string
    listContainerClassName?: string
}

export type ListHeadingComponent = FunctionComponent<ListHeadingProps>
