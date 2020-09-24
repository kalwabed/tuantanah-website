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
			{process.env.NODE_ENV === 'development' && (
				<ReactQueryDevtools initialIsOpen={false} />
			)}
			<ToastContainer
				position='top-center'
				autoClose={5000}
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
