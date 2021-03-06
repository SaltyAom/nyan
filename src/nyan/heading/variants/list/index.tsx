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
    width = 'max-w-[640px]',
    padding = 'my-16 px-4 py-8 md:py-16 gap-8',
    list = [],
    sectionWidth = 'max-w-[420px]',
    sectionDir = 'flex-col md:flex-row',
    children,
    className = {
        section: 'gap-4',
        heading: 'gap-6',
        list: 'text-gray-600',
        listContainer: 'gap-3 pl-6'
    },
    ...headingProps
}) => {
    const {
        section = 'gap-4',
        list: listStyle = 'text-gray-600',
        listContainer = 'gap-3 pl-6',
        heading = 'gap-6',
        ...restClassName
    } = className

    return (
        <header
            className={`flex flex-col items-start w-full ${width} mx-auto ${padding} ${className}`}
        >
            <Heading
                className={{ ...restClassName, heading }}
                {...headingProps}
            />
            <ul className={`flex flex-col pl-0 ${listContainer}`}>
                {list.map((detail) => (
                    <li
                        key={detail}
                        className={`${style['list-item']} ${listStyle}`}
                    >
                        detail
                    </li>
                ))}
            </ul>
            <section
                className={`flex ${sectionDir} w-full ${sectionWidth} ${section}`}
            >
                {children}
            </section>
        </header>
    )
}

export default ListHeading
