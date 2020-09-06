export type refVisLer = {
	refVisitorDealer: any | null
}

export interface IServerResponse {
	response: {
		msg: string
		errorCode: number
	}
	token: string
	success: boolean
}

export interface IUserLogin {
	email: string
	password: string
}

export interface ICAuth {
	readonly isAuthenticated: boolean
	readonly token: string | null
	setToken: (data: string | null, setCoookie: boolean) => void
	setIsAuthenticated: (isAuthenticated: boolean) => void
	user: IApiUser
}

export interface CProperties {
	readonly isLoading: boolean
	setIsLoading: (isLoading: boolean) => void
	readonly properties: [Property]
	setProperties: (property: string[]) => void
	readonly showProperties: Property
	readonly propertyById: Property[]
	getOneProperty: (id: string) => void
	getPropertyById: (_id: string) => void
	setPropertyById: (value: string[]) => void
}

export type TLoginProps = {
	loading: boolean
	validated: boolean
	handleSubmit: (event: React.FormEvent<HTMLInputElement>) => void
	email: string
	setEmail: (email: string) => void
	password: string
	setPassword: (password: string) => void
}

export type TRegisterProps = TLoginProps & {
	fullName: string
	setFullName: (fullName: string) => void
	repeatPassword: string
	setRepeatPassword: (repeatPassword: string) => void
	check: boolean
	setCheck: (check: boolean) => void
}

export interface IBtnLoadingProps {
	type: string
	block: boolean
	fill: string
	password: string
	loading: boolean
}

export interface IApiUser {
	_id: string
	email: string
	role: number
	fullName: string
}

export interface IUserRegister extends IUserLogin {
	repeatPassword: string
	fullName: string
}

export interface Property {
	_id: string
	title: string
	description: string
	location: string
	mainPicture: string
	price: number
	size: string
	status: {
		shm: boolean
		negotiation: boolean
	}
	userId: {
		_id: string
		fullName: string
	}
	gallery: [
		{
			imageUrl: string
		},
	]
	createdAt: string
	updatedAt: string
}
