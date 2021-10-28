import { Heading } from '../../components'

import style from '../../heading.module.sass'

import type { ListHeadingComponent } from './types'

/**
 * @example
 * ```tsx
 * <ListHeading
 *     title="Why Nyan?"
 *     content="The easiest way to rapidly develop common web pattern"
 *     list={[
 * '       Rapid development',
 * '       Open-source MIT License',
 * '       100% editable'
 *     ]}
 *     sectionWidth="max-w-[200px]"
 * />
 * ```
 */
const ListHeading: ListHeadingComponent = ({
    className = '',
    width = 'max-w-[640px]',
    padding = 'my-16 px-4 py-8 md:py-16 gap-8',
    list = [],
    listClassName = 'text-gray-600',
    listContainerClassName = 'gap-3 pl-6',
    sectionClassName = 'gap-4',
    sectionWidth = 'max-w-[420px]',
    headingClassName = 'gap-6',
    sectionDir = 'flex-col md:flex-row',
    children,
    ...heading
}) => {
    return (
        <header
            className={`flex flex-col items-start w-full ${width} mx-auto ${padding} ${className}`}
        >
            <Heading className={headingClassName} {...heading} />
            <ul className={`flex flex-col pl-0 ${listContainerClassName}`}>
                {list.map((detail) => (
                    <li key={detail} className={`${style['list-item']} ${listClassName}`}>
                        detail
                    </li>
                ))}
            </ul>
            <section
                className={`flex ${sectionDir} w-full ${sectionWidth} ${sectionClassName}`}
            >
                {children}
            </section>
        </header>
    )
}

export default ListHeading
