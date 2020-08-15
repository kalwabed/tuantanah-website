import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Index from './pages/Index'
import Property from './pages/Property'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <>
            <Router>
                <Route exact path="/" component={Index} />
                <Route path="/property" component={Property} />
                <Route path="/dashboard" component={Dashboard} />
                <div className="my-login-page">
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={Register} />
                </div>
            </Router>
        </>
    )
}

export default App
