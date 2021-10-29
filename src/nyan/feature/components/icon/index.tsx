import type { FeatureIconComponent } from './types'

/**
 * @example
 * ```tsx
 * <FeatureIcon>🔭</FeatureIcon>
 * ```
 */
const FeatureIcon: FeatureIconComponent = ({
    className = 'text-white bg-black shadow-md',
    size = 'min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px]',
    children
}) => {
    return (
        <div
            className={`flex justify-center items-center rounded ${size} ${className}`}
        >
            {children}
        </div>
    )
}

export default FeatureIcon
