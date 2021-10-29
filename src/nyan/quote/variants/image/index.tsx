import style from '../../quote.module.sass'

import type { ImageQuoteComponent } from './types'

/**
 * @example
 * ```
 * <ImageQuote
 *     quote="The witches can't be loved. So bravely I fought. They fell and failed. My Lady doesn't wilt"
 *     author="Ga1ahad and Scientific Witchery"
 *     src="https://lwi.nexon.com/m_ba/brand/media/img_03_l.png"
 * />
 * ```
 */
const ImageQuote: ImageQuoteComponent = ({
    header = null,
    quote,
    author,
    src,
    className = {
        quote: '!text-white',
        author: '!text-gray-200',
        container: 'my-8 px-4',
        width: 'max-w-[960px]',
        padding: 'p-20',
        overlay: 'bg-[rgba(0,47,97,.75)]',
        contentWidth: 'w-1/2'
    },
    children
}) => {
    const {
        quote: quoteStyle,
        author: authorStyle,
        container: containerStyle,
        width,
        padding,
        overlay,
        contentWidth
    } = className

    return (
        <div className={containerStyle}>
            <figure
                className={`w-full mx-auto ${width} rounded-2xl shadow-xl overflow-hidden ${style['image-quote']}`}
                style={{
                    backgroundImage: `url(${src})`
                }}
            >
                <div className={`${overlay} ${padding}`}>
                    <div className={`flex flex-col gap-6 ${contentWidth}`}>
                        {header}
                        <blockquote className={`${style.quote} ${quoteStyle}`}>
                            {quote}
                        </blockquote>
                        <figcaption
                            className={`${style.author} ${authorStyle}`}
                        >
                            {author}
                        </figcaption>
                        {children}
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default ImageQuote
