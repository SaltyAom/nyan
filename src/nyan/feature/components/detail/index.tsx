import style from '../../feature.module.sass'

import type { FeatureDetailComponent } from './types'

/**
 * @example
 * ```tsx
 * <FeatureDetail title="AngelSeeker" content="And in that light. I find deliverance" />
 * ```
 */
const Heading: FeatureDetailComponent = ({
    title,
    content,
    notify = '',
    className = {
        title: '',
        content: '',
        notify: '',
        section: '',
        container: 'gap-2'
    }
}) => {
    const {
        container: containerClassName = 'gap-2',
        title: titleClassName = '',
        content: contentClassName = '',
        notify: notifyClassName = '',
    } = className

    return (
        <header className={`flex flex-col ${containerClassName}`}>
            <section className="flex flex-col gap-2">
                {notify && (
                    <h6 className={`${style.notify} ${notifyClassName}`}>
                        {notify}
                    </h6>
                )}
                <h1 className={`${style.title} ${titleClassName}`}>{title}</h1>
            </section>
            {content && (
                <p className={`${style.content} ${contentClassName}`}>
                    {content}
                </p>
            )}
        </header>
    )
}

export default Heading
