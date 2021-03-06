import { Heading } from '../../components'

import type { HeadingComponent } from '../../types'

/**
 * @example
 * ```tsx
 * <CenterHeading
 *     title="Nyan Component"
 *     content="The easiest way to rapidly develop common web pattern"
 * >
 *     <HeadingLink primary href="/profile">
 *     Getting Start
 *     </HeadingLink>
 *     <HeadingLink href="/profile">Ok</HeadingLink>
 * </CenterHeading>
 * ```
 */
const CenterHeading: HeadingComponent = ({
    padding = 'my-16 px-4 py-8 md:py-16 gap-6',
    width = 'max-w-[640px]',
    sectionWidth = 'max-w-[420px]',
    children,
    sectionDir = 'flex-col md:flex-row',
    className = {
        section: 'gap-4 my-4',
        heading: 'gap-6 text-center'
    },
    ...heading
}) => {
    const {
        container = '',
        section = 'gap-4 my-4',
        ...restClassName
    } = className

    return (
        <header
            className={`flex flex-col items-center w-full ${width} mx-auto ${padding} ${container}`}
        >
            <Heading className={{ ...className, ...restClassName }} {...heading} />
            <section
                className={`flex ${sectionDir} ${sectionWidth} w-full ${section}`}
            >
                {children}
            </section>
        </header>
    )
}

export default CenterHeading
