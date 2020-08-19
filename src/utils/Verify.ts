import jwt from 'jsonwebtoken'
import cookies from 'js-cookie'

export default {
    User: () => {
        const token = localStorage.getItem('token')
        if (!cookies.get('key') || !token) {
            localStorage.removeItem('token')
            return false
        }

        try {
            return jwt.verify(token, String(process.env.SECRET_KEY))
        } catch (err) {
            console.log(err)
            process.exit(1)
        }
    },
}
