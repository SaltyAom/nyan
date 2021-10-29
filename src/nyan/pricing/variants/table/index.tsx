import { Fragment } from 'react'

import Link from 'next/link'

const pricings = [
    {
        type: 'Salt',
        detail: 'Bamboo basket, reflector, working brakes.',
        pricing: [5, '/mo'],
        features: ['Salt', 'Pepper', 'Birds']
    },
    {
        type: 'Pepper',
        detail: 'Never forget your helmet, trusty Mips.',
        pricing: [10, '/mo'],
        features: ['Salt', 'Pepper', 'Birds', 'Thought Police', 'Library']
    },
    {
        type: 'Birds',
        detail: "See ya, I'm off to the morning market.",
        pricing: [20, '/mo'],
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
        pricing: [49, '/mo'],
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

/**
 * @example
 * ```tsx
 * <TablePricing />
 * ```
 */
const TablePricing = () => {
    return (
        <div className="w-full px-4">
            <main
                className="grid grid-cols-5 gap-y-8 max-w-[1280px] w-full mx-auto py-12 xl:p-12 my-8 bg-white border rounded overflow-y-hidden overflow-x-auto"
                style={{
                    gridTemplateColumns: "repeat(5, minmax(180px, 1fr))"
                }}
            >
                <h3 className="text-gray-500 pl-4 border-b">Plan</h3>
                {pricings.map(({ type }) => (
                    <h3 key={type} className="text-xl font-medium pb-2 border-b">
                        {type}
                    </h3>
                ))}

                <h3 className="text-gray-500 pl-4 border-b">Pricing</h3>
                {pricings.map(({ type, detail, pricing }) => (
                    <section key={type} className="flex flex-col gap-4 pb-6 pr-6 border-b">
                        <h3 className="text-4xl font-bold text-black">
                            ${pricing[0]}
                            <span className="text-base text-gray-400">
                                {pricing[1]}
                            </span>
                        </h3>

                        <p className="text-gray-500">{detail}</p>
                    </section>
                ))}

                <h3 className="text-gray-500 pl-4">Feature</h3>
                {pricings.map(({ type }) => (
                    <div key={type} />
                ))}

                {pricings[pricings.length - 1].features.map((feature) => (
                    <Fragment key={feature}>
                        <p className="pb-2 pl-4 border-b">{feature}</p>
                        {pricings.map(({ type, features }) => (
                            <p key={type} className="text-xl pb-2 border-b">
                                {features.includes(feature) ? '✓' : '-'}
                            </p>
                        ))}
                    </Fragment>
                ))}

                <div />
                {pricings.map(({ type }) => (
                    <div key={type} className="flex w-full pr-4">
                        <Link href="/">
                            <a className="w-full text-white text-center font-medium py-3 bg-black rounded">
                                Buy {type}
                            </a>
                        </Link>
                    </div>
                ))}
            </main>
        </div>
    )
}

export default TablePricing
