import { Heading } from '../../components'

import type { SideImageHeadingComponent } from './types'

/**
 * @example
 * ```tsx
 * <SideImageHeading
 *     title="Hello World"
 *     height="h-unset"
 *     content="Step through the gate into Utopia. Sink into a world of Melodia"
 *     src="https://pbs.twimg.com/media/DtLfZEjWoAE8gfB.jpg"
 *     alt="Undraw"
 * >
 *     <HeadingLink primary href="/">Getting Start</HeadingLink>
 *     <HeadingLink href="/">Ok</HeadingLink>
 * </SideImageHeading>
 * ```
 */
const SideImageHeading: SideImageHeadingComponent = ({
    padding = 'mx-auto px-6 py-16 gap-6',
    width = 'max-w-[1080px]',
    height = 'min-h-screen',
    sectionWidth = 'max-w-[320px] sm:max-w-[420px]',
    children,
    src,
    alt,
    flex = ['flex-1', 'flex-1'],
    imageWidth = 'max-w-[560px]',
    flip = false,
    sectionDir = '',
    className = {
        section: 'gap-4 mx-auto sm:mx-0',
        heading: 'gap-4',
        contentSide: 'gap-6'
    },
    ...headingProps
}) => {
    const {
        section = 'gap-4 mx-auto sm:mx-0',
        image = '',
        contentSide = 'gap-6',
        heading = 'gap-4',
        ...restClassName
    } = className

    return (
        <header
            className={`flex flex-col-reverse ${
                flip ? 'md:flex-row-reverse' : 'md:flex-row'
            } justify-center items-center w-full ${width} ${height} ${padding} ${className}`}
        >
            <section className={`flex flex-col ${flex[0]} ${contentSide}`}>
                <Heading
                    className={{ ...restClassName, heading }}
                    {...headingProps}
                />
                <section
                    className={`flex flex-col sm:flex-row ${sectionWidth} w-full ${section}`}
                >
                    {children}
                </section>
            </section>
            <div className={`flex ${sectionDir} ${flex[1]} items-center`}>
                <img
                    className={`object-contain object-center w-full ${imageWidth} ${image}`}
                    src={src}
                    alt={alt}
                />
            </div>
        </header>
    )
}

export default SideImageHeading
