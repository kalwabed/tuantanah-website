import React from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import './index.css'
import AuthProvider from './contexts/Auth'
import PropertyProvider from './contexts/Properties'

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<PropertyProvider>
				<App />
				<ToastContainer
					position='top-center'
					autoClose={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					limit={1}
					transition={Slide}
					pauseOnFocusLoss
					draggable
				/>
			</PropertyProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
