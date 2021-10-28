import Link from 'next/link'

import type { HeadingLinkComponent } from './types'

const primary = 'font-medium text-white bg-black'
const secondary =
    'text-black bg-white hover:bg-gray-100 focus:bg-gray-100 border border-gray-300 transition-colors'

/**
 * @example
 * ```tsx
 * <HeadingLink primary href="/profile">Ok</HeadingLink>
 * ```
 */
const HeadingLink: HeadingLinkComponent = ({
    children,
    className = '',
    primary: isPrimary = false,
    href
}) => (
    <Link href={href}>
        <a
            className={`flex flex-row flex-1 justify-center text-lg md:text-xl ${
                isPrimary ? primary : secondary
            } p-3 rounded ${className}`}
        >
            {children}
        </a>
    </Link>
)

export default HeadingLink
