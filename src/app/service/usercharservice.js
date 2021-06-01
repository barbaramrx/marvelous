import ApiService from '../apiservice.js'

class UserCharService extends ApiService {

    constructor() {
        super('/char/')
    }

    save(id, char) {
        return this.post(`${id}/save`, char)
    }

    checkFav(id) {
        return this.get(`${id}/favCharacters`)
    }

    deleteChar(idUser, idChar) {
        return this.delete(`/${idUser}/${idChar}/delete`)
    }

}

export default UserCharService