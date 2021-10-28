import { useState } from 'react'
import Link from 'next/link'

import { useForm } from 'react-hook-form'

import { Button, FormLayout, Input } from '../component'
import { Facebook, Google } from '../icon'

import style from '../sign-form.module.sass'

import type { DraftForm, FormValue } from '../types'

const form: DraftForm = {
    username: {},
    password: {
        type: 'password'
    }
}

const SignIn = () => {
    const { register, handleSubmit } = useForm<FormValue>()
    const [error, updateError] = useState('')

    const process = (data: FormValue) => {
        console.log(data)

        updateError('Something went wrong')
    }

    return (
        <FormLayout title="Sign in to Nyan to continue">
            <form
                className="flex flex-col w-full pt-6 pb-2 gap-4"
                onSubmit={handleSubmit(process)}
            >
                {Object.keys(form).map((input) => (
                    <Input
                        key={input}
                        placeholder={input}
                        {...form[input]}
                        register={register(input)}
                    />
                ))}
                {error && (
                    <a className={`${style.content} text-red-400 font-medium`}>
                        {error}
                    </a>
                )}

                <a className={`${style.link} font-normal`}>Forgot password?</a>
                <Button primary onClick={handleSubmit(process)}>
                    Sign In
                </Button>
                <p className={`${style.content} mt-2`}>
                    Doesn&apos;t have an account?{' '}
                    <Link href="/">
                        <a className={style.link}>Sign up</a>
                    </Link>
                </p>
            </form>

            <div className="w-full h-[1px] bg-gray-300 my-4" />

            <footer className="flex flex-col w-full gap-3">
                <Button icon={<Google />}>Continue with Google</Button>
                <Button icon={<Facebook />}>Continue with Facebook</Button>
            </footer>
        </FormLayout>
    )
}

export default SignIn
