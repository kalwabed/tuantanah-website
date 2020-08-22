import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import cookies from 'js-cookie'

import { authContext } from '../contexts/Auth'

const PrivateRoutes = ({
    component: Component,
    ...rest
}: {
    component: React.ComponentClass
    exact: boolean
    path: string
}) => {
    const { isAuthenticated } = useContext(authContext)
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                isAuthenticated || cookies.get('key') ? (
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
