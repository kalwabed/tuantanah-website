import type {
    IUserLogin,
    IServerResponse,
    IUserRegister,
} from '../types/index.types'

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
        console.error(err)
    }
}

// @ts-ignore
export const fetchRegister = async ({
    email,
    password,
    repeatPassword,
    fullName,
}: IUserRegister) => {
    const result: IServerResponse = await (
        await fetch(`${process.env.ENDPOINT}/d/signup`, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email, password, repeatPassword, fullName }),
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

//? errorCode = 400:bad req, 401:unauthorized
