import type { FunctionComponent } from 'react'

export interface FeatureDetailProps {
    title?: string
    content?: string
    notify?: string
    className?: {
        container?: string
        title?: string
        content?: string
        notify?: string
    }
}

export type FeatureDetailComponent = FunctionComponent<FeatureDetailProps>
