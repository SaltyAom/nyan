import Link from 'next/link'

import { BreadcrumbComponent } from '../../types'

/**
 * @example
 * ```tsx
 * <ElevatedBreadcrumb
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
const ElevatedBreadcrumb: BreadcrumbComponent = ({ items = [], active }) => {
    return (
        <nav
            className="inline-flex flex-row gap-2 p-2.5 bg-white rounded-lg shadow-md border"
            style={{
                width: 'fit-content'
            }}
        >
            {items.map(([title, callback], index) => {
                const className = `text-gray-700 px-2 py-1 rounded ${
                    index === active
                        ? 'bg-gray-100'
                        : 'hover:bg-gray-100 focus:bg-gray-100'
                } transition-colors`

                return (
                    <section className="flex items-center gap-2" key={title}>
                        {typeof callback === 'string' ? (
                            <Link href={callback}>
                                <a className={className}>{title}</a>
                            </Link>
                        ) : (
                            <button
                                className={className}
                                onClick={callback}
                                type="button"
                            >
                                {title}
                            </button>
                        )}
                        {index !== items.length - 1 && (
                            <span className="text-gray-300">/</span>
                        )}
                    </section>
                )
            })}
        </nav>
    )
}

export default ElevatedBreadcrumb
