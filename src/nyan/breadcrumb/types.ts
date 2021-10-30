import type { FunctionComponent, MouseEventHandler } from 'react'

export interface BreadcrumbProps {
    /**
     * Accept array of tuple of `[title, href]` or `[title, callback]`.
     * 
     * If second param is string, breadcrumb will be `<a>` otherwise it will be `<button>`.
     */
    items: Array<[string, string | MouseEventHandler<HTMLButtonElement>]>
    active?: number
    className?: string
    itemClassName?: string
}

export type BreadcrumbComponent = FunctionComponent<BreadcrumbProps>
