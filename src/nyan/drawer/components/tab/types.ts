import type { FunctionComponent } from 'react'

export interface TabProps {
    href: string
    className?: string
    activeClassName?: string
}

export type TabComponent = FunctionComponent<TabProps>
