import React, { useContext, useEffect } from 'react'

import { authContext } from '../contexts/Auth'
import tokenVerify from '../utils/tokenVerify'

const Dashboard = (props: any) => {
    const { setToken, setIsAuthenticated } = useContext(authContext)

    useEffect(() => {
        tokenVerify()
    }, [])

    const onLogout = () => {
        setToken()
        setIsAuthenticated(false)
        props.history.push('/signin')
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
