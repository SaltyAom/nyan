import type { FunctionComponent } from 'react'

import type { HeadingClassName, HeadingProps } from '../../types'

export interface ImageHeadingClassName extends Omit<HeadingClassName, 'section'> {
    image?: string
    overlay?: string
}

export interface ImageHeadingProps extends Omit<HeadingProps, 'sectionWidth' | 'className'> {
    src: string
    alt: string
    imageWidth?: string
    className?: ImageHeadingClassName
}

export type ImageHeadingComponent = FunctionComponent<ImageHeadingProps>
