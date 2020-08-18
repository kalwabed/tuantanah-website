import React, { useState, useContext } from 'react'

import { Redirect } from 'react-router-dom'
import { fetchLogin } from '../utils/fetchAPI'
import { authContext } from '../contexts/Auth'
import FormLogin from '../components/FormLogin'

const Login = () => {
    document.title = 'Sign In | tuantanah'
    window.scrollTo(0, 0)
    const [validated, setValidated] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const { setToken, setIsAuthenticated, token, isAuthenticated } = useContext(
        authContext
    )

    const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        setLoading(true)
        setValidated(true)
        const form = event.currentTarget

        // @ts-ignore
        if (form.checkValidity() === false) {
            event.stopPropagation()
            setLoading(false)
        } else {
            const res = await fetchLogin({ email, password })
            setLoading(false)
            if (res?.status === true) {
                setValidated(false)
                setToken(res.token)
                setIsAuthenticated(true)
            } else {
                setPassword('')
                alert(res?.msg)
            }
        }
    }

    if (isAuthenticated || token) {
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
