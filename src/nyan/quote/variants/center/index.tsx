import style from '../../quote.module.sass'

import type { QuoteComponent } from '../../types'

const CenterQuote: QuoteComponent = ({
    header = null,
    quote,
    author,
    className = {
        quote: '',
        author: '',
        container: '',
        width: 'max-w-[640px]',
        padding: 'my-8 px-4 py-8',
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
        <figure className={`flex flex-col items-center ${width} mx-auto ${padding} gap-6 ${containerStyle}`}>
            {header}
            <blockquote className={`${style.quote} text-center ${quoteStyle}`}>{quote}</blockquote>
            <figcaption className={`${style.author} text-center ${authorStyle}`}>{author}</figcaption>
            {children}
        </figure>
    )
}

export default CenterQuote
