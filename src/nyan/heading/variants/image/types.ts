import type { FunctionComponent } from 'react'

import type { HeadingProps } from '../../types'

export interface ImageHeadingProps extends Omit<HeadingProps, 'sectionClassName' | 'sectionWidth'> {
    src: string
    alt: string
    imageClassName?: string
    imageWidth?: string
    overlayClassName?: string
}

export type ImageHeadingComponent = FunctionComponent<ImageHeadingProps>
