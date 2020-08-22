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

//? errorCode = 400:bad req, 401:unauthorized
