import type { FunctionComponent } from 'react'

import type { HeadingProps, HeadingClassName } from '../../types'

export interface SideImageHeadingClassName extends HeadingClassName {
    image?: string
    contentSide?: string
}

export interface SideImageHeadingProps extends Omit<HeadingProps, 'className'> {
    flip?: boolean
    src: string
    alt: string
    imageWidth?: string
    height?: string
    flex?: [string, string]
    className?: SideImageHeadingClassName
}

export type SideImageHeadingComponent = FunctionComponent<SideImageHeadingProps>
