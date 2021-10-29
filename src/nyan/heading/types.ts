import type { FunctionComponent, ReactElement } from 'react'

export interface HeadingClassName {
        container?: string
        notify?: string
        title?: string
        content?: string
        section?: string
        heading?: string
}

export interface HeadingProps {
    title: ReactElement | string
    content?: ReactElement | string
    notify?: string
    padding?: string
    width?: string
    sectionDir?: string
    sectionWidth?: string
    className?: HeadingClassName
}

export type HeadingComponent = FunctionComponent<HeadingProps>
