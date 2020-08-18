import React, { createContext, useState } from 'react'
import type { ICAuth } from '../types/index.types'

export const authContext = createContext<ICAuth>(undefined!)

const Auth = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [token, setToken] = useState(localStorage.getItem('token')!)

    const setAuthToken = (data: string) => {
        if (!data) localStorage.removeItem('token')
        else localStorage.setItem('token', data)
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
