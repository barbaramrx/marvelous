import ApiService from '../apiservice.js'

class UserComicService extends ApiService {

    constructor() {
        super('/comic')
    }

    save(id, comic) {
        return this.post(`/${id}/save`, comic)
    }

    checkFav(id) {
        return this.get(`/${id}/favComics`)
    }

    deleteCom(idUser, idComic) {
        return this.delete(`/${idUser}/${idComic}/delete`)
    }
}

export default UserComicService