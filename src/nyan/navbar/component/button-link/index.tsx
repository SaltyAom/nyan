import Link from 'next/link'

import type { ButtonLinkComponent } from './types'

const Tab: ButtonLinkComponent = ({ children, href, className = '' }) => {
    return (
        <Link href={href}>
            <a
                className={`flex items-center text-lg font-medium text-gray-700 bg-gray-100 px-4 py-2 cursor-pointer rounded ${className}`}
            >
                {children}
            </a>
        </Link>
    )
}

export default Tab
