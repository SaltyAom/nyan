import Link from 'next/link'
import { useRouter } from 'next/router'

import type { SidebarMenuComponent } from './types'

const SidebarMenu: SidebarMenuComponent = ({
    href,
    children,
    className = '',
    close
}) => {
    const { asPath } = useRouter()
    const isActive = asPath === href
    const activeClassName = isActive ? 'bg-gray-100' : ''

    return (
        <Link href={href}>
            <a
                className={`flex items-center text-lg text-gray-600 p-3 hover:bg-gray-100 focus:bg-gray-100 rounded ${activeClassName} ${className}`}
                role="link"
                tabIndex={0}
                onClick={close}
                onKeyDown={close}
            >
                {children}
            </a>
        </Link>
    )
}

export default SidebarMenu
