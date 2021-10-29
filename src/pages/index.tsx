import Navbar from '@nyan/navbar'
import {
    HeadingLink,
    SideImageHeading,
    CenterHeading,
    ImageHeading,
    ListHeading,
} from '@nyan/heading'
import { FeatureCard, FeatureDetail, FeatureIcon } from '@nyan/feature'
import { FocusPricing, TabPricing, TablePricing } from '@nyan/pricing'

const Landing = () => {
    return (
        <main className="flex flex-col">
            <Navbar />

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
                className={{
                    container: 'gap-6 text-center pb-0 mb-0'
                }}
            />

            <section className="grid gap-8 gap-x-12 grid-cols-1 md:grid-cols-2 w-full max-w-[840px] mx-auto my-12 px-6">
                {[
                    ['🌕', 'Fly me to the moon', 'Let me play among the Let me see what spring is like on A-Jupiter and Mars'],
                    ['🌎', 'Utopiosphere', 'Step through the gate into Utopia Sink into a world of Melodia'],
                    ['🧵', 'String Theocracy', 'Open the curtains Lights on Don\'t miss a moment Of this experiment'],
                    ['9.8', 'Nine Point Eight', 'Calla lily, carnation, daisy. Silently chase away your worries'],
                    ['🎻', 'Ether Strike (Divine Mercy)', 'An intense dissatisfaction in the world. And a compulsion to do something about it.'],
                    ['🔭', 'AngelSeeker', 'And in that light, I find deliverance']
                ].map(([icon, title, content]) => (
                    <FeatureCard icon={<FeatureIcon>{icon}</FeatureIcon>}>
                        <FeatureDetail title={title} content={content} />
                    </FeatureCard>
                ))}
            </section>

            <section className="grid gap-8 gap-x-12 grid-cols-1 w-full max-w-[840px] mx-auto mb-12 px-6">
                {[
                    ['🌕', 'Fly me to the moon', 'Let me play among the Let me see what spring is like on A-Jupiter and Mars'],
                    ['🌎', 'Utopiosphere', 'Step through the gate into Utopia Sink into a world of Melodia'],
                    ['🧵', 'String Theocracy', 'Open the curtains Lights on Don\'t miss a moment Of this experiment'],
                    ['9.8', 'Nine Point Eight', 'Calla lily, carnation, daisy. Silently chase away your worries'],
                    ['🎻', 'Ether Strike (Divine Mercy)', 'An intense dissatisfaction in the world. And a compulsion to do something about it.'],
                    ['🔭', 'AngelSeeker', 'And in that light, I find deliverance']
                ].map(([icon, title, content]) => (
                    <FeatureCard icon={<FeatureIcon>{icon}</FeatureIcon>}>
                        <FeatureDetail title={title} content={content} />
                    </FeatureCard>
                ))}
            </section>

            <TablePricing />

            <CenterHeading
                title="Nyan Component"
                content="The easiest way to rapidly develop common web pattern"
            >
                <HeadingLink primary href="/profile">
                    Getting Start
                </HeadingLink>
                <HeadingLink href="/profile">Ok</HeadingLink>
            </CenterHeading>
        </main>
    )
}

export default Landing
