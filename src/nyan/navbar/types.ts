import type { FunctionComponent } from 'react'

export interface NavbarProps {
    tab?: FunctionComponent<any>
    tabs: [string, string][]
}

export type NavbarComponent = FunctionComponent<NavbarProps>
