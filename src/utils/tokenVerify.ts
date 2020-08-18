import jwt from 'jsonwebtoken'

export default () => {
    const token = localStorage.getItem('token')
    if (!token) {
        return false
    }
    try {
        const data = jwt.verify(token, String(process.env.SECRET_KEY))
        // @ts-ignore
        return console.log(JSON.parse(data))
    } catch (err) {
        return console.error(err)
    }
}
