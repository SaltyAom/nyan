import style from '../../quote.module.sass'

import type { QuoteComponent } from '../../types'

/**
 * @example
 * ```
 * <Quote
 *     quote="The witches can't be loved. So bravely I fought. They fell and failed. My Lady doesn't wilt"
 *     author="Ga1ahad and Scientific Witchery"
 * />
 * ```
 */
const Quote: QuoteComponent = ({
    header = null,
    quote,
    author,
    className = {
        quote: '',
        author: '',
        container: '',
        width: 'max-w-[640px]',
        padding: 'my-8 py-6 pl-8',
    },
    children
}) => {
    const {
        quote: quoteStyle,
        author: authorStyle,
        container: containerStyle,
        width,
        padding
    } = className

    return (
        <figure className={`flex flex-col item-start ${width} mx-auto ${padding} border-l-4 border-gray-300 gap-6 ${containerStyle}`}>
            {header}
            <blockquote className={`${style.quote} ${quoteStyle}`}>{quote}</blockquote>
            <figcaption className={`${style.author} ${authorStyle}`}>{author}</figcaption>
            {children}
        </figure>
    )
}

export default Quote
