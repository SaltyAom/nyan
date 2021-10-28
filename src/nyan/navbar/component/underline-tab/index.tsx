import Link from 'next/link'
import { useRouter } from 'next/router'

import type { UnderlineTabComponent } from './types'

const Tab: UnderlineTabComponent = ({ children, href, className = '' }) => {
    const { asPath } = useRouter()
    const isActive = asPath === href
    const activeClassName = isActive ? 'border-b-black' : ''

    return (
        <Link href={href}>
            <a
                className={`flex items-center h-full text-gray-500 hover:text-gray-700 focus:text-gray-700 px-2 border-t-2 border-b-2 border-transparent hover:border-b-black focus:border-b-black ${activeClassName} cursor-pointer transition-colors ${className}`}
            >
                {children}
            </a>
        </Link>
    )
}

export default Tab
