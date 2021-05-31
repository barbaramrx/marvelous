import ApiService from '../apiservice.js'

class UserService extends ApiService {

    constructor() {
        super('/users')
    }

    auth(authentication) {
        return this.post('/auth', authentication)
    }

    logged(id) {
        return this.get(`/${id}/logged`)
    }

    save(user) {
        return this.post('/', user)
    }
    
    update(id, user) {
        return this.put(`/${id}/update`, user)
    }
}

export default UserService