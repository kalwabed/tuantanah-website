export type refVisLer = {
	refVisitorDealer: any | null
}

export type apiProvinsi = {
	provinsi: [
		{
			id: number
			nama: string
		},
	]
}

export type apiKotaKab = {
	id: number
	id_provinsi: string
	nama: string
}
export interface IServerResponse {
	response: {
		msg: string
		errorCode: number
	}
	token: string
	msg: string
	error: string
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
	onSubmit: (event: React.FormEvent<HTMLInputElement>) => void
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
	location: {
		name: string
		provinceId: number
		cityId: number
	}
	mainPicture: string
	price: number
	size: {
		display: string
		wide: string
		long: string
		large: string
	}
	isLarge: boolean
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
	contact: [
		{
			name: string
			type: sosmedType
			url: string
		},
	]
	createdAt: string
	updatedAt: string
}

enum sosmedType {
	'whatsapp' = 1,
	'facebook' = 2,
	'email' = 3,
}

export interface Inputs {
	// inputan dari user
	fullName: string
	title: string
	provinsi: string
	kota: string
	description: string
	isLuas: string
	userId: string
	luas?: string
	panjang?: string
	lebar?: string
	price?: string
	mainPicture: FileList
	nego: boolean
	kontak1?: string
	kontak2?: string
	kontak3?: string
	kontak4?: string
	checkKontak1?: number | string
	checkKontak2?: number | string
	checkKontak3?: number | string
	checkKontak4?: number | string
	userKontak1?: string
	userKontak2?: string
	userKontak3?: string
	userKontak4?: string
}
