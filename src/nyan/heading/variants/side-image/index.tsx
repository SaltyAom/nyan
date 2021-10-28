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
    className = '',
    width = 'max-w-[1080px]',
    height = 'min-h-screen',
    sectionClassName = 'gap-4 mx-auto sm:mx-0',
    sectionWidth = 'max-w-[320px] sm:max-w-[420px]',
    children,
    src,
    alt,
    flex = ['flex-1', 'flex-1'],
    imageClassName = '',
    imageWidth = 'max-w-[560px]',
    headingClassName = 'gap-4',
    contentSideClassName = 'gap-4',
    flip = false,
    sectionDir = '',
    ...heading
}) => {
    return (
        <header
            className={`flex flex-col-reverse ${
                flip ? 'md:flex-row-reverse' : 'md:flex-row'
            } justify-center items-center w-full ${width} ${height} ${padding} ${className}`}
        >
            <section
                className={`flex flex-col ${flex[0]} ${contentSideClassName}`}
            >
                <Heading className={headingClassName} {...heading} />
                <section
                    className={`flex flex-col sm:flex-row ${sectionWidth} w-full ${sectionClassName}`}
                >
                    {children}
                </section>
            </section>
            <div className={`flex ${sectionDir} ${flex[1]} items-center`}>
                <img
                    className={`object-contain object-center w-full ${imageWidth} ${imageClassName}`}
                    src={src}
                    alt={alt}
                />
            </div>
        </header>
    )
}

export default SideImageHeading
