import React from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'
import { ToastContainer, Slide } from 'react-toastify'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'gridjs/dist/theme/mermaid.css'
import './index.css'

import AuthProvider from './contexts/Auth'

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<App />
			<ReactQueryDevtools initialIsOpen={false} />
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
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
