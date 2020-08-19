import React, { useContext, useEffect, useState } from 'react'

import { authContext } from '../contexts/Auth'
import verify from '../utils/Verify'
import { IApiUser } from '../types/index.types'

const Dashboard = (props: any) => {
    const { setToken, setIsAuthenticated } = useContext(authContext)
    const [user, setUser] = useState<IApiUser | any>({})

    useEffect(() => {
        setUser(verify.User())
    }, [])

    const onLogout = () => {
        setToken(null, false)
        setIsAuthenticated(false)
        props.history.push('/signin')
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome {user.email}</h2>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
