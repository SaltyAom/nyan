import { Heading } from '../../components'

import type { ImageHeadingComponent } from './types'

/**
 * @example
 * ```tsx
 * <ImageHeading
 *     title="Nyan Component"
 *     content="The easiest way to rapidly develop common web pattern"
 *     src="https://i.ytimg.com/vi/d-nxW9qBtxQ/maxresdefault.jpg"
 *     alt="Nyan Component"
 * />
 * ```
 */
const ImageHeading: ImageHeadingComponent = ({
    width = 'max-w-[720px]',
    padding = 'mt-8 px-4 pt-12 md:pt-16 gap-4',
    src = '',
    alt = '',
    imageWidth = 'max-w-[840px]',
    sectionDir = '',
    className = {
        container: '',
        notify: '',
        title: '',
        content: '',
        heading: 'gap-4 text-center',
        image: 'mt-8 mb-12 shadow-xl rounded md:rounded-lg',
        overlay: 'bg-gray-50'
    },
    ...heading
}) => {
    const {
        container: containerClassName,
        heading: headingClassName,
        overlay: overlayClassName,
        image: imageClassName,
    } = className

    return (
        <>
            <div className={`relative w-full ${containerClassName}`}>
                <Heading
                    className={{
                        ...className,
                        heading: `relative flex flex-col items-center w-full ${width} mx-auto ${padding} ${headingClassName}`
                    }}
                    {...heading}
                />
                <div
                    className={`absolute -bottom-20  z-[-1] w-full h-screen ${overlayClassName}`}
                />
            </div>
            <div className="px-4">
                <div
                    className={`flex ${sectionDir} w-full ${imageWidth} mx-auto bg-gray-50 overflow-hidden ${imageClassName}`}
                >
                    <img className="w-full" src={src} alt={alt} />
                </div>
            </div>
        </>
    )
}

export default ImageHeading
