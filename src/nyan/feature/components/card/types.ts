import type { FunctionComponent, ReactElement } from 'react'

export interface FeatureCardProps {
    dir?: string
    icon?: ReactElement
    className?: string
}

export type FeatureCardComponent = FunctionComponent<FeatureCardProps>
