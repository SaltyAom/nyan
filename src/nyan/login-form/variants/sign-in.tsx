import { useState } from 'react'

import Link from 'next/link'

import { useForm } from 'react-hook-form'

import { loginForm } from '../config'

import { Button, Input } from '../component'
import { Facebook, Google } from '../icon'

import type { DraftForm, FormValue } from '../types'

const { width, bg, cardBg, padding, title, content, link, iconSize, gap } =
    loginForm

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
        if (data.username !== data.password)
            return updateError("Password doesn't match")

        updateError('Something went wrong')
    }

    return (
        <main
            className={`flex flex-col justify-center items-center w-full h-screen ${bg} px-4`}
        >
            <section
                className={`flex flex-col items-center ${width} ${cardBg} ${padding} rounded-2xl border`}
            >
                <img
                    className={`${iconSize} mb-4`}
                    src="https://raw.githubusercontent.com/SaltyAom/papership/master/public/assets/icon/ShinoX192.png"
                    alt="Icon"
                />
                <h2 className={title}>Sign in to Nyan to continue</h2>

                {/* ========================= */}

                <form
                    className={`flex flex-col w-full ${gap}`}
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
                        <a className={`${content} text-red-400 font-medium`}>
                            {error}
                        </a>
                    )}

                    {/* ========================= */}

                    <a className={`${link} font-normal`}>Forgot password?</a>
                    <Button primary onClick={handleSubmit(process)}>
                        Sign In
                    </Button>
                    <p className={`${content} mt-2`}>
                        Already have an account?{' '}
                        <Link href="/">
                            <a className={link}>Sign in</a>
                        </Link>
                    </p>
                </form>

                {/* ========================= */}
                <div className="w-full h-[1px] bg-gray-300 my-4" />

                <footer className="flex flex-col w-full gap-3">
                    <Button icon={<Google />}>Continue with Google</Button>
                    <Button icon={<Facebook />}>Continue with Facebook</Button>
                </footer>
            </section>
        </main>
    )
}

export default SignIn
