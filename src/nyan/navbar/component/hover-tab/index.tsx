import Link from 'next/link'
import { useRouter } from 'next/router'

import type { HoverTabComponent } from './types'

const Tab: HoverTabComponent = ({ children, href, className }) => {
    const { asPath } = useRouter()
    const isActive = asPath === href
    const activeClassName = isActive ? 'bg-gray-100 !text-gray-700' : ''

    return (
        <Link href={href}>
            <a
                className={`flex text-gray-500 hover:text-gray-700 focus:text-gray-700 px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 ${activeClassName} rounded cursor-pointer transition-colors ${className}`}
            >
                {children}
            </a>
        </Link>
    )
}

export default Tab
