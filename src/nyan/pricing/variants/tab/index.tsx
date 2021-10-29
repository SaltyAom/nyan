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
        features: ['Salt', 'Pepper', 'Birds', 'Thought Police', 'Library']
    },
    {
        type: 'Birds',
        detail: "See ya, I'm off to the morning market.",
        monthly: [20, '/mo'],
        yearly: [199, '/yr'],
        features: [
            'Salt',
            'Pepper',
            'Birds',
            'Thought Police',
            'Library',
            'Love train',
            'Iron Heart'
        ]
    },
    {
        type: 'Thought Police',
        detail: 'A healthy looking chicken & a dozen of free range eggs.',
        monthly: [49, '/mo'],
        yearly: [499, '/yr'],
        features: [
            'Salt',
            'Pepper',
            'Birds',
            'Thought Police',
            'Library',
            'Love train',
            'Iron Heart',
            'Iron Lotus',
            'The Earth',
            'Foreign language'
        ]
    }
]

const types = ['Monthly billing', 'Yearly billing']

/**
 * @example
 * ```tsx
 * <TabPricing />
 * ```
 */
const TabPricing = () => {
    const [selection, updateSelection] = useState(0)

    const handleSelect = (index: number) => () => {
        updateSelection(index)
    }

    return (
        <main className="flex flex-col gap-12 max-w-[1140px] mx-auto px-4 my-8">
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
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-4">
                {pricings.map(({ type, detail, monthly, yearly, features }) => (
                    <article
                        key={type}
                        className="flex flex-col flex-1 bg-white border border-gray-300 rounded overflow-hidden"
                    >
                        <header className="flex flex-col gap-2 border-b border-gray-300 p-6">
                            <h4 className="text-3xl font-semibold">{type}</h4>
                            <p className="text-gray-500">{detail}</p>
                            <h3 className="text-4xl font-bold text-black my-4">
                                ${selection === 0 ? monthly[0] : yearly[0]}
                                <span className="text-base text-gray-400">
                                    {selection === 0 ? monthly[1] : yearly[1]}
                                </span>
                            </h3>
                            <Link href="/">
                                <a className="w-full text-white text-center font-medium py-3 bg-black rounded">
                                    Buy {type}
                                </a>
                            </Link>
                        </header>

                        <section className="flex flex-col gap-4 p-6">
                            <p className="text-sm text-gray-700 font-medium uppercase">
                                What&apos;s included
                            </p>
                            <ul className="flex flex-col pl-5 gap-4 text-gray-600 list-disc">
                                {features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </section>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default TabPricing
