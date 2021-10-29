import { CenterQuote, ImageQuote } from '@nyan/quote'

const QuotePage = () => {
    return (
        <main className="flex flex-col">
            <CenterQuote
                quote="The witches can't be loved. So bravely I fought. They fell and failed. My Lady doesn't wilt"
                author="Ga1ahad and Scientific Witchery"
            />
            <ImageQuote
                quote="The witches can't be loved. So bravely I fought. They fell and failed. My Lady doesn't wilt"
                author="Ga1ahad and Scientific Witchery"
                src="https://afar-production.imgix.net/uploads/images/afar_post_headers/images/glYaPt6sVa/original_crop_lisacorson_current_original_Big_Sur_Adventures_Lisa_Corson-5403_20copy.jpg?auto=compress,format&fit=crop&crop=top&lossless=true&w=1600&h=700"
            />
        </main>
    )
}

export default QuotePage
