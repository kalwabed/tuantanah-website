import jwt from 'jsonwebtoken'

export default () => {
    const token = localStorage.getItem('token')
    if (!token) {
        return false
    }
    try {
        const data = jwt.verify(
            token,
            import.meta.env.SNOWPACK_PUBLIC_SECRET_KEY
        )
        return console.log(data)
    } catch (err) {
        return console.error(err)
    }
}
