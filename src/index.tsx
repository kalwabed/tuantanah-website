import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Auth from './contexts/Auth'

ReactDOM.render(
    <React.StrictMode>
        <Auth>
            <App />
        </Auth>
    </React.StrictMode>,
    document.getElementById('root')
)
