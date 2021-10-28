// ? jsx-a11y/label-has-associated-control bug
// @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md

/* eslint-disable jsx-a11y/label-has-associated-control */
import { input } from '../../config'

import type { LoginInputComponent } from './types'

const { label, border, sizing, inputClassName, inputText } = input

const LoginInput: LoginInputComponent = ({
    type = 'text',
    placeholder = '',
    labelClassName = '',
    register,
    required = true,
    ...props
}) => {
    return (
        <label className="flex flex-col">
            <span className={`${label} ${labelClassName} capitalize`}>
                {placeholder}
            </span>

            <section
                className={`flex flex-row w-full ${sizing} ${border} ${inputClassName}`}
            >
                <input
                    className={`${inputText} w-full bg-transparent focus:outline-none focus:ring-transparent p-0 border-0`}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    {...register}
                    {...props}
                />
            </section>
        </label>
    )
}

export default LoginInput
