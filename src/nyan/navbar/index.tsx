import Link from 'next/link'

import {
    UnderlineTab,
    ButtonLink,
    ProfileIcon,
    HamburgerMenu,
    SidebarMenu
} from './component'

import type { NavbarComponent } from './types'

/**
 * @example
 * ```tsx
 * <Navbar
 *     tabs={[
 *         ['/?1', 'Content 1'],
 *         ['/?2', 'Content 2'],
 *         ['/?3', 'Content 3'],
 *         ['/?4', 'Content 4']
 *     ]}
 * />
 * 
 * ```
 */
const Navbar: NavbarComponent = ({
    tab: Tab = UnderlineTab,
    tabs
}) => {
    return (
        <nav className="sticky top-0 z-20 flex justify-between items-center h-[56px] w-full px-4 bg-white border-b border-gray-300">
            <header className="flex items-center h-full">
                <HamburgerMenu
                    header={(close) => (
                        <header className="flex items-center py-4 px-2 gap-2 border-b text-gray-70">
                            <button
                                className="text-2xl px-1"
                                onClick={close}
                                type="button"
                            >
                                ╳
                            </button>
                            <h1 className="text-xl">Nyan</h1>
                        </header>
                    )}
                    menus={(close) =>
                        tabs.map(([href, title]) => (
                            <SidebarMenu key={href} href={href} close={close}>
                                {title}
                            </SidebarMenu>
                        ))
                    }
                    footer={(close) => [
                        <SidebarMenu className="gap-2" href="/" close={close}>
                            <ProfileIcon src="https://avatars.githubusercontent.com/u/35027979?s=400&u=28dbe76d9057768eed7cb2d346203b7c55c153ce&v=4" />
                            SaltyAom
                        </SidebarMenu>
                    ]}
                />

                <Link href="/">
                    <a className="text-lg mr-2" role="heading" aria-level={1}>
                        Nyan
                    </a>
                </Link>

                <section className="hidden sm:flex items-center gap-2 w-full h-full px-2">
                    {tabs.map(([href, title]) => (
                        <Tab key={href} href={href}>
                            {title}
                        </Tab>
                    ))}
                </section>
            </header>

            <aside className="flex gap-4 h-full items-center">
                <ButtonLink href="/?signup">Sign up</ButtonLink>
                <ProfileIcon src="https://avatars.githubusercontent.com/u/35027979?s=400&u=28dbe76d9057768eed7cb2d346203b7c55c153ce&v=4" />
            </aside>
        </nav>
    )
}

export { HoverTab, UnderlineTab } from './component'

export default Navbar
