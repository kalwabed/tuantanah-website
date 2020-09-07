import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Property from './pages/Property'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './utils/PrivateRoutes'
import PropertyDetail from './pages/PropertyDetail'
import AddProperty from './pages/AddProperty'
import PropertyProvider from './contexts/Properties'

const App = () => {
	return (
		<Router>
			<Switch>
				<PropertyProvider>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/property' component={Property} />
					<Route path='/property/:id' component={PropertyDetail} />
					<PrivateRoute exact path='/dashboard' component={Dashboard} />
					<PrivateRoute
						exact
						path='/dashboard/property'
						component={AddProperty}
					/>
					<div className='my-login-page'>
						<Route exact path='/signin' component={Login} />
						<Route path='/signup' component={Register} />
					</div>
				</PropertyProvider>
			</Switch>
		</Router>
	)
}

export default App
