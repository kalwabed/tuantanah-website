import type { IUserLogin } from '../types/index.types'

// @ts-ignore
export const fetchLogin = async ({ email, password }: IUserLogin) => {
    try {
        const result = await (
            await fetch(`${process.env.ENDPOINT}/d/signin`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
        ).json()

        if (result.success === false) {
            return { status: false, msg: result.msg }
        }
        return {
            status: true,
            token: JSON.stringify(result.token).slice(1, -1),
        }
    } catch (err) {
        console.error(err)
    }
}
