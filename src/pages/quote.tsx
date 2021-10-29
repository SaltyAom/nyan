import { CenterQuote, ImageQuote, Quote } from '@nyan/quote'

const QuotePage = () => {
    return (
        <main className="flex flex-col">
            <Quote
                quote="The witches can't be loved. So bravely I fought. They fell and failed. My Lady doesn't wilt"
                author="Ga1ahad and Scientific Witchery"
            />
            <CenterQuote
                quote="The witches can't be loved. So bravely I fought. They fell and failed. My Lady doesn't wilt"
                author="Ga1ahad and Scientific Witchery"
            />
            <ImageQuote
                quote="The witches can't be loved. So bravely I fought. They fell and failed. My Lady doesn't wilt"
                author="Ga1ahad and Scientific Witchery"
                src="https://lwi.nexon.com/m_ba/brand/media/img_03_l.png"
            />
        </main>
    )
}

export default QuotePage
