import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Index from './pages/Index'
import Property from './pages/Property'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './utils/PrivateRoutes'
import PropertyDetail from './pages/PropertyDetail'

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/property" component={Property} />
                    <Route path="/property/:id" component={PropertyDetail} />
                    <PrivateRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                    />
                    <div className="my-login-page">
                        <Route exact path="/signin" component={Login} />
                        <Route path="/signup" component={Register} />
                    </div>
                </Switch>
            </Router>
        </>
    )
}

export default App
