import type { IUser } from '../types/index.types'

const { SNOWPACK_PUBLIC_ENDPOINT } = import.meta.env

// @ts-ignore
export const fetchLogin = async ({ email, password }: IUser) => {
    try {
        const result = await (
            await fetch(`${SNOWPACK_PUBLIC_ENDPOINT}/d/signin`, {
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
