import style from '../../heading.module.sass'

import type { BaseHeadingComponent } from './types'

const Heading: BaseHeadingComponent = ({
    title,
    titleClassName = '',
    content,
    contentClassName = '',
    notify = '',
    notifyClassName = '',
    className
}) => {
    return (
        <section className={`flex flex-col ${className}`}>
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
        </section>
    )
}

export default Heading