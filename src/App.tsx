import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Index from './pages/Index'
import Property from './pages/Property'
import './App.css'

function App() {
    return (
        <>
            <Router>
                <Route exact path="/" component={Index} />
                <Route path="/property" component={Property} />
            </Router>
        </>
    )
}

export default App
