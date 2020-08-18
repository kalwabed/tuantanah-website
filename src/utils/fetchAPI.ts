import type { IUser } from '../types/index.types'

let endpoint: string = 'https://server-tuantanah.herokuapp.com/api'
// if (process.env.NODE_ENV === 'production') {
//     endpoint = 'https://server-tuantanah.herokuapp.com/api'
// } else {
//     endpoint = 'http://localhost:5000/api'
// }

// @ts-ignore
export const fetchLogin = async ({ email, password }: IUser) => {
    try {
        const result = await (
            await fetch(`${endpoint}/d/signin`, {
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
