import { useReducer } from 'react'
import type { FunctionComponent } from 'react'

import { drawer, navbar } from './config'

import { Tab, HamburgerMenu } from './components'

const sidebars = [
    ['/', '▲', 'Dashboard'],
    ['/?2', '▲', 'Team'],
    ['/?3', '▲', 'Project'],
    ['/?4', '▲', 'Calendar'],
    ['/?5', '▲', 'Settings']
] as const

const { gap, utilities, active, notActive, overlay } = drawer
const { sizing, bg } = navbar

const Drawer: FunctionComponent = ({ children }) => {
    const [isOpen, toggle] = useReducer((v) => !v, false)

    return (
        <section className="flex w-full min-h-screen">
            {isOpen && (
                <div
                    role="button"
                    tabIndex={0}
                    className={overlay}
                    onClick={toggle}
                    onKeyDown={toggle}
                    aria-label="Close drawer"
                />
            )}
            <aside
                className={`top-0 left-0 flex flex-col justify-between h-screen ${utilities} ${
                    isOpen ? active : notActive
                } overflow-x-hidden transition-all`}
            >
                <section className="flex flex-col">
                    <header className="flex flex-row items-center px-1.5 py-3 border-b overflow-hidden whitespace-nowrap">
                        <h1 className="text-xl">Nyan Dashboard</h1>
                    </header>
                    <section className={`flex flex-col w-full py-2 ${gap}`}>
                        {sidebars.map(([href, icon, title]) => (
                            <Tab href={href} key={href}>
                                <div className="text-xl mr-2">{icon}</div>
                                {title}
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
                <nav
                    className={`sticky top-0 flex flex-row items-center ${sizing} ${bg}`}
                >
                    <HamburgerMenu isOpen={isOpen} toggle={toggle} />
                    <h1 className="text-xl text-gray-700">Nyan Dashboard</h1>
                </nav>
                {children}
            </main>
        </section>
    )
}

export default Drawer
