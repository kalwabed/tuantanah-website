import type { IUserLogin, IServerResponse } from '../types/index.types'

// @ts-ignore
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
                status: false,
                msg: result.response.msg,
                errorCode: result.response.errorCode,
            }
        }
        return {
            status: true,
            token: JSON.stringify(result.token).slice(1, -1),
        }
    } catch (err) {
        console.error(err)
    }
}

//? errorCode = 400:bad req, 401:unauthorized
