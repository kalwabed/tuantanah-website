import React, { createContext, useState, useEffect } from 'react'
import cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

import type { ICAuth, IApiUser } from '../types/index.types'

export const authContext = createContext<ICAuth>(undefined!)

const Auth = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [token, setToken] = useState(localStorage.getItem('token')!)
    const [user, setUser] = useState<IApiUser | any>({})
    const { CLIENT_SECRET, COOKIE_VALUE, NODE_ENV } = process.env

    const secure = NODE_ENV === 'production' ? true : false
    const cookieConf = {
        expires: 14, // expires 14 hari
        secure,
    }

    useEffect(() => {
        // SET USER
        if (token) {
            try {
                setUser(jwt.verify(token, String(process.env.SECRET_KEY)))
            } catch (err) {
                process.exit(1)
            }
        }
    }, [])

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
            cookies.set('key', createCookieValue(), cookieConf)
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
                user,
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default Auth
