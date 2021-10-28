import Link from 'next/link'
import { useRouter } from 'next/router'

import type { TabComponent } from './types'

const Tab: TabComponent = ({
    children,
    href,
    className = '',
    activeClassName
}) => {
    const { asPath } = useRouter()
    const isActive = asPath === href
    const active = isActive
        ? activeClassName || 'text-white bg-black hover:bg-black focus:bg-black'
        : ''

    return (
        <Link href={href}>
            <a
                className={`flex flex-row items-center text-lg text-gray-700 w-full px-4 py-3 hover:bg-gray-100 focus:bg-gray-100 rounded-lg overflow-hidden transition-colors cursor-pointer ${active} ${className}`}
            >
                {children}
            </a>
        </Link>
    )
}

export default Tab
