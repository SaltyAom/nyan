import { useReducer } from 'react'

import { Tab, HamburgerMenu } from './components'

import type { DrawerComponent } from './types'

/**
 * @example
 * ```tsx
 * <Drawer
 *     items={[
 *         ['/', 'Dashboard', '▲'],
 *         ['/?2', 'Team', '▲'],
 *         ['/?3', 'Project', '▲'],
 *         ['/?4', 'Calendar', '▲'],
 *         ['/?5', 'Settings', '▲']
 *     ]}
 * >
 *     <h1>Hello World</h1>
 * </Drawer>
 * ```
 */
const Drawer: DrawerComponent = ({
    children,
    items,
    title = 'Nyan Dashboard',
    nav = <h1 className="text-xl text-gray-700">Nyan Dashboard</h1>,
    itemsClassName = '',
}) => {
    const [isOpen, toggle] = useReducer((v) => !v, false)

    const activeClassName = isOpen
        ? 'absolute z-20 md:relative w-[240px]'
        : 'absolute z-10 md:hidden w-full h-screen bg-[rgba(0,0,0,.2)]'

    return (
        <section className="flex w-full min-h-screen">
            {isOpen && (
                <div
                    className="absolute z-10 md:hidden w-full h-screen bg-[rgba(0,0,0,.2)]"
                    role="button"
                    tabIndex={0}
                    onClick={toggle}
                    onKeyDown={toggle}
                    aria-label="Close drawer"
                />
            )}

            <aside
                className={`top-0 left-0 flex flex-col justify-between h-screen p-2 bg-white border-r border-gray-200 ${activeClassName} overflow-x-hidden transition-all`}
            >
                <section className="flex flex-col">
                    <header className="flex flex-row items-center px-1.5 py-3 border-b overflow-hidden whitespace-nowrap">
                        <h1 className="text-xl">{title}</h1>
                    </header>
                    <section className="flex flex-col w-full py-2 gap-1">
                        {items.map(([href, content, icon]) => (
                            <Tab
                                className={itemsClassName}
                                href={href}
                                key={href}
                            >
                                {icon && (
                                    <div className="text-xl mr-2">{icon}</div>
                                )}
                                {content}
                            </Tab>
                        ))}
                    </section>
                </section>

                <footer className="flex flex-col w-full">
                    <Tab activeClassName="bg-gray-200" href="/?">
                        <img
                            className="w-[36px] h-[36px] rounded-full mr-3"
                            src="https://avatars.githubusercontent.com/u/35027979?s=400&u=28dbe76d9057768eed7cb2d346203b7c55c153ce&v=4"
                            alt="SaltyAom"
                        />
                        SaltyAom
                    </Tab>
                </footer>
            </aside>

            <main className="flex flex-col flex-1">
                <nav className="sticky top-0 flex flex-row items-center w-full px-2 py-2 border-b border-gray-300">
                    <HamburgerMenu isOpen={isOpen} toggle={toggle} />
                    {nav}
                </nav>
                {children}
            </main>
        </section>
    )
}

export default Drawer
