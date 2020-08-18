export type refVisLer = {
    refVisitorDealer: null | any
}

export interface IUser {
    email: string
    password: string
}

export interface ICAuth {
    isAuthenticated: boolean
    token: string | null
    setToken: any
    setIsAuthenticated: any
}
