export type refVisLer = {
    refVisitorDealer: null | any
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
    isAuthenticated: boolean
    token: string | null
    setToken: any
    setIsAuthenticated: any
    user: IApiUser
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

export type TRegisterProps = TLoginProps & {
    fullName: string
    setFullName: any
    repeatPassword: string
    setRepeatPassword: any
    check: boolean
    setCheck: any
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

export interface IUserRegister extends IUserLogin {
    repeatPassword: string
    fullName: string
}
