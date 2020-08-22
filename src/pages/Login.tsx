import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import cookies from 'js-cookie'

import { fetchLogin } from '../utils/fetchAPI'
import { authContext } from '../contexts/Auth'
import FormLogin from '../components/FormLogin'

const Login = (props: any) => {
    document.title = 'Sign In | tuantanah'
    window.scrollTo(0, 0)
    useEffect(() => {
        toast.dismiss()
    }, [props.history])

    const [validated, setValidated] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const { setToken, setIsAuthenticated, isAuthenticated } = useContext(
        authContext
    )

    const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        toast.dismiss()
        setLoading(true)
        setValidated(true)
        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.stopPropagation()
            setLoading(false)
        } else {
            const res = await fetchLogin({ email, password })
            setLoading(false)
            if (res?.success === true) {
                // SUKSES LOGIN
                setValidated(false)
                setToken(res.token!, true)
                setIsAuthenticated(true)
            } else {
                // GAGAL LOGIN
                if (res?.errorCode === 400) {
                    // bad request
                    toast.warning(res?.msg)
                } else {
                    // unauthorized
                    toast.info(res?.msg)
                }
                setPassword('')
            }
        }
    }

    if (isAuthenticated || cookies.get('key')) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <FormLogin
                handleSubmit={handleSubmit}
                validated={validated}
                loading={loading}
                email={email}
                setEmail={setEmail}
                setPassword={setPassword}
                password={password}
            />
        </>
    )
}

export default Login
