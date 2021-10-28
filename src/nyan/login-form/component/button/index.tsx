import { button } from '../../config'

import type { ButtonComponent } from './types'

const { primary, secondary, padding, utilities, icon: iconStyle } = button

const Button: ButtonComponent = ({
    primary: isPrimary,
    children,
    type,
    icon = null,
    ...props
}) => {
    return (
        <button
            className={`flex flex-row items-center gap-2 ${
                isPrimary
                    ? primary.bg + ' ' + primary.text
                    : secondary.bg + ' ' + secondary.text
            } ${padding} ${utilities}`}
            type="submit"
            {...props}
        >
            {icon && (
                <div className={`overflow-hidden ${iconStyle}`}>{icon}</div>
            )}
            {children}
        </button>
    )
}

export default Button
