import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { authContext } from '../contexts/Auth'

const PrivateRoutes = ({
    component: Component,
    ...rest
}: {
    component: any
    exact: boolean
    path: string
}) => {
    const { isAuthenticated, token } = useContext(authContext)
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                isAuthenticated || token ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/signin',
                            state: { referer: routeProps.location },
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoutes
