import type { IUser } from '../types/index.types'

// @ts-ignore
export const fetchLogin = async ({ email, password }: IUser) => {
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
        return { status: true, token: result.token }
    } catch (err) {
        console.error(err)
    }
}
