import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import cookies from 'js-cookie'

import { authContext } from '../contexts/Auth'
import Dashboard from '../pages/dashboard/Dashboard'
import AddProperty from '../pages/dashboard/AddProperty'
import Detail from '../pages/dashboard/Detail'
import Edit from '../pages/dashboard/EditProperty'
import Verification from '../pages/dashboard/Verification'

const PrivateRoutes = () => {
	const { isAuthenticated } = useContext(authContext)
	return (
		<Route
			path='/dashboard'
			render={({ match: { path }, location }) =>
				isAuthenticated || cookies.get('key') ? (
					<>
						<Route path={`${path}/`} component={Dashboard} exact />
						<Route path={`${path}/property`} component={AddProperty} exact />
						<Route path={`${path}/verification`} component={Verification} exact />
						<Route path={`${path}/property/:id`} component={Detail} exact />
						<Route path={`${path}/property/up/:id`} component={Edit} exact />
					</>
				) : (
					<Redirect
						to={{
							pathname: '/signin',
							state: { referer: location }
						}}
					/>
				)
			}
		/>
	)
}

export default PrivateRoutes
