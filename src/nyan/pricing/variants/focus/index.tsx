import { useState } from 'react'

import Link from 'next/link'

const pricings = [
    {
        type: 'Salt',
        detail: 'Bamboo basket, reflector, working brakes.',
        monthly: [5, '/mo'],
        yearly: [55, '/yr'],
        features: ['Salt', 'Pepper', 'Birds']
    },
    {
        type: 'Pepper',
        detail: 'Never forget your helmet, trusty Mips.',
        monthly: [10, '/mo'],
        yearly: [99, '/yr'],
        features: ['Salt', 'Pepper', 'Birds', 'Thought Police'],
        focus: true
    },
    {
        type: 'Birds',
        detail: "See ya, I'm off to the morning market.",
        monthly: [20, '/mo'],
        yearly: [199, '/yr'],
        features: ['Salt', 'Pepper', 'Birds', 'Thought Police', 'Library']
    }
]

const types = ['Monthly billing', 'Yearly billing']

/**
 * @example
 * ```tsx
 * <FocusPricing />
 * ```
 */
const FocusPricing = () => {
    const [selection, updateSelection] = useState(0)

    const handleSelect = (index: number) => () => {
        updateSelection(index)
    }

    return (
        <main className="flex flex-col gap-20 max-w-[940px] mx-auto px-4 my-8">
            <header className="flex flex-row items-center gap-4 mx-auto">
                {types.map((type, index) => (
                    <button
                        key={type}
                        className={`py-3 px-6 rounded ${
                            selection === index
                                ? 'text-white bg-black'
                                : 'text-gray-600 bg-gray-50 hover:bg-gray-100 focus:bg-gray-100'
                        } font-medium transition-colors`}
                        onClick={handleSelect(index)}
                        type="button"
                    >
                        {type}
                    </button>
                ))}
            </header>
            <section className="grid grid-cols-1 md:grid-cols-3 w-full gap-2">
                {pricings.map(
                    ({
                        type,
                        detail,
                        monthly,
                        yearly,
                        features,
                        focus = false
                    }) => (
                        <article
                            key={type}
                            className={`relative flex flex-col items-center flex-1 ${
                                focus
                                    ? 'z-10 transform scale-110 border-black'
                                    : 'border-gray-300'
                            } bg-white border rounded shadow-xl`}
                        >
                            {focus && (
                                <h4 className="absolute text-sm text-white p-1.5 px-3 bg-black transform -translate-y-4 rounded-full">
                                    Most Popular
                                </h4>
                            )}
                            <header className="flex flex-col items-center w-full gap-2 border-b border-gray-300 pt-8 pb-4">
                                <h4 className="text-3xl font-semibold">
                                    {type}
                                </h4>
                                <p className="text-gray-500 text-sm text-center px-4">
                                    {detail}
                                </p>
                                <h3 className="text-5xl font-bold text-black my-4">
                                    ${selection === 0 ? monthly[0] : yearly[0]}
                                    <span className="text-base text-gray-400">
                                        {selection === 0
                                            ? monthly[1]
                                            : yearly[1]}
                                    </span>
                                </h3>
                            </header>

                            <section className="flex flex-col flex-1 w-full gap-4 p-6 bg-gray-50">
                                <p className="text-sm text-gray-700 font-medium uppercase">
                                    What&apos;s included
                                </p>
                                <ul className="flex flex-col pl-5 gap-4 text-gray-600 list-disc">
                                    {features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </section>

                            <footer className="flex w-full p-4 bg-gray-50">
                                <Link href="/">
                                    <a className="w-full text-white text-center font-medium py-3 bg-black rounded">
                                        Buy {type}
                                    </a>
                                </Link>
                            </footer>
                        </article>
                    )
                )}
            </section>
        </main>
    )
}

export default FocusPricing
