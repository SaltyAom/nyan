import type { FunctionComponent, ReactElement } from 'react'

export interface HeadingProps {
    title: ReactElement | string
    content?: ReactElement | string
    notify?: string
    notifyClassName?: string
    padding?: string
    className?: string
    width?: string
    titleClassName?: string
    contentClassName?: string
    sectionClassName?: string
    sectionDir?: string
    sectionWidth?: string
    headingClassName?: string
}

export type HeadingComponent = FunctionComponent<HeadingProps>
