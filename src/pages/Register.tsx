import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

import '../auth.css'
import FormRegister from '../components/authentication/FormRegister'
import BannerDevelopment from '../elements/BannerDevelopment'

const Register = (props: any) => {
	document.title = 'Signup | tuantanah'
	window.scrollTo(0, 0)
	useEffect(() => {
		toast.dismiss()
	}, [props.history])

	return (
		<>
			<BannerDevelopment />
			<FormRegister />
		</>
	)
}

export default Register
