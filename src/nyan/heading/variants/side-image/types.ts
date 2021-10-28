import type { FunctionComponent } from 'react'

import type { HeadingProps } from '../../types'

export interface SideImageHeadingProps extends HeadingProps {
    height?: string
    src: string
    alt: string
    imageClassName?: string
    imageWidth?: string
    flex?: [string, string]
    contentSideClassName?: string
    flip?: boolean
}

export type SideImageHeadingComponent = FunctionComponent<SideImageHeadingProps>
