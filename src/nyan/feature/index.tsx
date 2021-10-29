import { FeatureCard, FeatureDetail, FeatureIcon } from './components'

const lists = [
    ['✓', 'Fast', 'Very light weight starting at 28KB'],
    ['✓', 'Fast', 'Very light weight starting at 28KB'],
    ['✓', 'Fast', 'Very light weight starting at 28KB'],
    ['✓', 'Fast', 'Very light weight starting at 28KB'],
    ['✓', 'Fast', 'Very light weight starting at 28KB'],
    ['✓', 'Fast', 'Very light weight starting at 28KB']
]

/**
 * 
 * ```tsx
 * <section className="grid gap-8 gap-x-12 grid-cols-1 md:grid-cols-2 w-full max-w-[840px] mx-auto my-12 px-6">
 *     {[
 *          ['🌕', 'Fly me to the moon', 'Let me play among the Let me see what spring is like on A-Jupiter and Mars'],
 *          ['🌎', 'Utopiosphere', 'Step through the gate into Utopia Sink into a world of Melodia'],
 *          ['🧵', 'String Theocracy', 'Open the curtains Lights on Don\'t miss a moment Of this experiment'],
 *          ['9.8', 'Nine Point Eight', 'Calla lily, carnation, daisy. Silently chase away your worries'],
 *          ['🎻', 'Ether Strike (Divine Mercy)', 'An intense dissatisfaction in the world. And a compulsion to do something about it.'],
 *          ['🔭', 'AngelSeeker', 'And in that light, I find deliverance']
 *      ].map(([icon, title, content]) => (
 *         <FeatureCard icon={<FeatureIcon>{icon}</FeatureIcon>}>
 *             <FeatureDetail title={title} content={content} />
 *         </FeatureCard>
 *     ))}
 * </section>
 * ```
 */
const Feature = () => {
    return (
        <section className="grid gap-8 grid-cols-2 w-full max-w-[760px] mx-auto">
            {lists.map(([icon, title, content]) => (
                <FeatureCard icon={<FeatureIcon>{icon}</FeatureIcon>}>
                    <FeatureDetail title={title} content={content} />
                </FeatureCard>
            ))}
        </section>
    )
}

export { FeatureCard, FeatureDetail, FeatureIcon } from './components'
export default Feature
