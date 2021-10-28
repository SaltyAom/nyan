import type { FunctionComponent, ReactElement } from 'react'

type SidebarItem = Array<
    | [string, ReactElement | string, ReactElement | string | null]
    | [string, ReactElement | string]
>

export interface DrawerProps {
    title?: string
    titleClassName?: string
    items: SidebarItem
    itemsClassName?: string
    nav?: ReactElement
}

export type DrawerComponent = FunctionComponent<DrawerProps>
