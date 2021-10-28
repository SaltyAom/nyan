import Link from 'next/link'
import { useRouter } from 'next/router'

import { tab } from '../../config'

import type { TabComponent } from './types'

const { text, bg, sizing, utilities, active } = tab

const Tab: TabComponent = ({
    children,
    href,
    className = '',
    activeClassName = ''
}) => {
    const { asPath } = useRouter()

    return (
        <Link href={href}>
            <a
                className={`flex flex-row items-center ${text} ${bg} ${sizing} ${utilities} cursor-pointer transition-colors overflow-hidden ${
                    href === asPath ? activeClassName || active : ''
                } ${className}`}
            >
                {children}
            </a>
        </Link>
    )
}

export default Tab
