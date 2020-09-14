import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import cookies from 'js-cookie'

import { fetchLogin } from '../utils/fetchAPI'
import { authContext } from '../contexts/Auth'
import FormLogin from '../components/authentication/FormLogin'
import BannerDevelopment from '../elements/BannerDevelopment'

const Login = (props: any) => {
	document.title = 'Signin | tuantanah'
	window.scrollTo(0, 0)
	useEffect(() => {
		toast.dismiss()
	}, [props.history])

	const { isAuthenticated } = useContext(authContext)

	if (isAuthenticated || cookies.get('key')) {
		return <Redirect to='/dashboard' />
	}

	return (
		<>
			<BannerDevelopment />
			<FormLogin />
		</>
	)
}

export default Login
