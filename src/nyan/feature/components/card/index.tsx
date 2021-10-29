import type { FeatureCardComponent } from './types'

/**
 * @example
 * ```tsx
 * <FeatureCard icon={<FeatureIcon>🔭</FeatureIcon>}>
 *     <FeatureDetail title={"AngelSeeker"} content={"And in that light. I find deliverance"} />
 * </FeatureCard>
 * ```
 */
const FeatureCard: FeatureCardComponent = ({
    children,
    dir = '',
    className = 'gap-4',
    icon = null
}) => {
    return (
        <article className={`flex ${dir} ${className}`}>
            {icon}
            {children}
        </article>
    )
}

export default FeatureCard
