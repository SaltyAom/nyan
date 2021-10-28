import Drawer from '@nyan/drawer'

const SidebarPage = () => {
    return (
        <Drawer
            items={[
                ['/', 'Dashboard', '▲'],
                ['/?2', 'Team', '▲'],
                ['/?3', 'Project', '▲'],
                ['/?4', 'Calendar', '▲'],
                ['/?5', 'Settings', '▲']
            ]}
        >
            <h1>Hello World</h1>
        </Drawer>
    )
}

export default SidebarPage
