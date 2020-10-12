import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Property from './pages/Property'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Faq from './pages/Faq'
import PropertyDetail from './pages/PropertyDetail'
import PropertyProvider from './contexts/Properties'
import PrivateRoutes from './utils/PrivateRoutes'

const App = () => {
	return (
		<Router>
			<Switch>
				<PropertyProvider>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/faq' component={Faq} />
					<Route exact path='/property' component={Property} />
					<Route path='/property/:id' component={PropertyDetail} />
					<PrivateRoutes />
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
