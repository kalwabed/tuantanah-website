import React, { useState, useEffect } from 'react'

import '../auth.css'
import FormRegister from '../components/FormRegister'
import { fetchRegister } from '../utils/fetchAPI'
import { toast } from 'react-toastify'
import BannerDevelopment from '../elements/BannerDevelopment'

const Register = (props: any) => {
    document.title = 'Signup | tuantanah'
    window.scrollTo(0, 0)
    useEffect(() => {
        toast.dismiss()
    }, [props.history])
    const [loading, setLoading] = useState<boolean>(false)
    const [validated, setValidated] = useState<boolean>(false)
    const [fullName, setFullName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [check, setCheck] = useState<boolean>(false)
    const [repeatPassword, setRepeatPassword] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        const form = e.currentTarget
        e.preventDefault()
        toast.dismiss()
        setLoading(true)
        setValidated(true)

        if (form.checkValidity() === false) {
            e.stopPropagation()
            setLoading(false)
        } else {
            const res = await fetchRegister({
                email,
                password,
                repeatPassword,
                fullName,
            })
            setLoading(false)
            if (res.success === true) {
                // SUKSES
                setValidated(false)
                toast.success(res.msg)
                setEmail('')
                setFullName('')
                setPassword('')
                setRepeatPassword('')
                setCheck(false)
            } else {
                setRepeatPassword('')
                if (res.errorCode === 400) {
                    toast.warning(res.msg)
                } else {
                    toast.info(res.msg)
                }
            }
        }
    }

    return (
        <>
            <BannerDevelopment />
            <FormRegister
                check={check}
                loading={loading}
                handleSubmit={handleSubmit}
                setFullName={setFullName}
                email={email}
                validated={validated}
                setEmail={setEmail}
                setPassword={setPassword}
                repeatPassword={repeatPassword}
                setRepeatPassword={setRepeatPassword}
                password={password}
                fullName={fullName}
                setCheck={setCheck}
            />
        </>
    )
}

export default Register
