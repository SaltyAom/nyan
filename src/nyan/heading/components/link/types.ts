import type { FunctionComponent } from 'react'

export interface HeadingLinkProps {
    className?: string
    primary?: boolean
    href: string
}

export type HeadingLinkComponent = FunctionComponent<HeadingLinkProps>
