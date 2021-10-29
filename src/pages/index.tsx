import {
    HeadingLink,
    SideImageHeading,
    CenterHeading,
    ImageHeading,
    ListHeading
} from '@nyan/heading'
import Navbar from '@nyan/navbar'

const Landing = () => {
    return (
        <>
            <Navbar
            />

            <ImageHeading
                title="Nyan Component"
                content="The easiest way to rapidly develop common web pattern"
                src="https://i.ytimg.com/vi/d-nxW9qBtxQ/maxresdefault.jpg"
                alt="Nyan Component"
            />

            <ListHeading
                title="Why Nyan?"
                content="The easiest way to rapidly develop common web pattern"
                list={[
                    'Rapid development',
                    'Open-source MIT License',
                    '100% editable'
                ]}
                sectionWidth="max-w-[200px]"
            />

            <SideImageHeading
                title="Hello World"
                height="h-unset"
                content={
                    <span>
                        Step through the gate into Utopia. <br />
                        Sink into a world of Melodia
                    </span>
                }
                src="https://pbs.twimg.com/media/DtLfZEjWoAE8gfB.jpg"
                alt="Undraw"
            >
                <HeadingLink primary href="/profile">
                    Getting Start
                </HeadingLink>
                <HeadingLink href="/profile">Ok</HeadingLink>
            </SideImageHeading>

            <SideImageHeading
                flip
                title="Hello World"
                height="h-unset"
                content={
                    <span>
                        Step through the gate into Utopia. <br />
                        Sink into a world of Melodia
                    </span>
                }
                src="https://pbs.twimg.com/media/DtLfZEjWoAE8gfB.jpg"
                alt="Undraw"
            />

            <CenterHeading
                title="Nyan Component"
                content="The easiest way to rapidly develop common web pattern"
            >
                <HeadingLink primary href="/profile">
                    Getting Start
                </HeadingLink>
                <HeadingLink href="/profile">Ok</HeadingLink>
            </CenterHeading>
        </>
    )
}

export default Landing
