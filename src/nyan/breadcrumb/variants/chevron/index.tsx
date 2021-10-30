import Link from 'next/link'

import { BreadcrumbComponent } from '../../types'

/**
 * @example
 * ```tsx
 * <ChevronBreadcrumb
 *     items={[
 *         [
 *             'Home',
 *             (event) => {
 *                 event.preventDefault()
 *             }
 *         ],
 *         ['Ok', '/cool'],
 *         ['Hi', '/ok']
 *     ]}
 *     active={1}
 * />
 * ```
 */
const ChevronBreadcrumb: BreadcrumbComponent = ({
    items = [],
    active,
    className = '',
    itemClassName = ''
}) => {
    return (
        <nav
            className={`flex flex-row gap-2 p-2.5 ${className}`}
            style={{
                width: 'fit-content'
            }}
        >
            {items.map(([title, callback], index) => {
                const sectionClassName = `text-gray-700 px-2 py-1 rounded ${
                    index === active
                        ? 'bg-gray-100'
                        : 'hover:bg-gray-100 focus:bg-gray-100'
                } transition-colors ${itemClassName}`

                return (
                    <section className="flex items-center gap-2" key={title}>
                        {typeof callback === 'string' ? (
                            <Link href={callback}>
                                <a className={sectionClassName}>{title}</a>
                            </Link>
                        ) : (
                            <button
                                className={sectionClassName}
                                onClick={callback}
                                type="button"
                            >
                                {title}
                            </button>
                        )}
                        {index !== items.length - 1 && (
                            <span className="text-xl text-gray-400">›</span>
                        )}
                    </section>
                )
            })}
        </nav>
    )
}

export default ChevronBreadcrumb
