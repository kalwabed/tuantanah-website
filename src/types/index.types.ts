export type refVisLer = {
    refVisitorDealer: null | any
}

export interface IUserLogin {
    email: string
    password: string
}

export interface ICAuth {
    isAuthenticated: boolean
    token: string | null
    setToken: any
    setIsAuthenticated: any
}

export type TLoginProps = {
    loading: boolean
    validated: boolean
    handleSubmit: any
    email: string
    setEmail: any
    password: string
    setPassword: any
}

export interface IBtnLoadingProps {
    type: string
    block: boolean
    fill: string
    password: string
    loading: boolean
}

export interface IApiUser {
    email: string
    role: number
}
