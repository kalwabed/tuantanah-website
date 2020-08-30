import cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

import type {
	IUserLogin,
	IServerResponse,
	IUserRegister,
} from '../types/index.types'

export const fetchLogin = async ({ email, password }: IUserLogin) => {
	try {
		const result: IServerResponse = await (
			await fetch(`${process.env.ENDPOINT}/d/signin`, {
				method: 'post',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			})
		).json()

		if (result.success === false) {
			return {
				success: false,
				msg: result.response.msg,
				errorCode: result.response.errorCode,
			}
		}
		return {
			success: true,
			token: JSON.stringify(result.token).slice(1, -1),
		}
	} catch (err) {
		alert(err)
		return
	}
}

export const fetchRegister = async ({
	email,
	password,
	repeatPassword,
	fullName,
}: IUserRegister) => {
	if (process.env.NODE_ENV === 'production') {
		return {
			success: false,
			msg: 'you cannot register now. admin page is under construction.',
			errorCode: 401,
		}
	}

	const result: IServerResponse = await (
		await fetch(`${process.env.ENDPOINT}/d/signup`, {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				repeatPassword,
				fullName,
			}),
		})
	).json()

	if (result.success === false) {
		return {
			success: false,
			msg: result.response.msg,
			errorCode: result.response.errorCode,
		}
	}
	return {
		success: true,
		msg: result.response.msg,
	}
}

const decode = (token: string) => {
	return jwt.verify(token, String(process.env.SECRET_KEY))
}

export const fetchAllProperty = async () => {
	let result: any = '' || null
	try {
		if (!cookies.get('exp_props') || !localStorage.getItem('props')) {
			const data = await (
				await fetch(`${process.env.ENDPOINT}/v/property`)
			).json()
			const token = JSON.stringify(data).slice(1, -1)

			cookies.set('exp_props', '130402', { expires: 1, secure: true })
			localStorage.setItem('props', token)

			result = decode(token)
			return result.property.map((prop: any) => prop)
		} else {
			result = decode(localStorage.getItem('props')!)
			return result.property.map((prop: any) => prop)
		}
	} catch (err) {
		console.error(err)
	}
}

// const localCookie = (value: string[]) => {
// 	const propsCookie = cookies.get('exp_prop')
// 	if (!propsCookie) {
// 		localStorage.clear()
// 		cookies.set('exp_props', btoa('kalwabed'), { expires: 1 })
// 		return false
// 	}
// 	return true
// }

//? errorCode = 400:bad req, 401:unauthorized
