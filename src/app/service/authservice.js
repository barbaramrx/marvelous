export default class AuthService {

    static isUserAllowed() {
        const user = localStorage.getItem('original_token')
        const userId = localStorage.getItem('token_id')
        console.log(user)
        return user && userId
    }

    static removeAuth() {
        localStorage.clear()
    }
}