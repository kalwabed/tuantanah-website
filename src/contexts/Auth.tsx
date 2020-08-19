import React, { createContext, useState } from 'react'
import cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

import type { ICAuth } from '../types/index.types'

export const authContext = createContext<ICAuth>(undefined!)

const Auth = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [token, setToken] = useState(localStorage.getItem('token')!)
    const { CLIENT_SECRET, COOKIE_VALUE } = process.env
    const cookieConf = {
        expires: new Date(new Date().getTime() + 1 * 60 * 1000),
    }

    const createCookieValue = (): string => {
        // untuk isi value dari cookie
        return jwt.sign(String(COOKIE_VALUE), String(CLIENT_SECRET))
    }

    const setAuthToken = (data: string, setCookie: boolean) => {
        // TOKEN
        if (!data) localStorage.removeItem('token')
        else localStorage.setItem('token', data)
        // --------
        // COOKIE
        if (setCookie && !cookies.get('key')) {
            // jika setCookie true dan cookie 'key' tidak ada
            cookies.set('key', createCookieValue(), cookieConf) // expires 3 hari
        } else cookies.remove('key')
        // --------
        setToken(data)
    }

    return (
        <authContext.Provider
            value={{
                isAuthenticated,
                token,
                setToken: setAuthToken,
                setIsAuthenticated,
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default Auth
