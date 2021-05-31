import ApiService from '../apiservice.js'

class ComicService extends ApiService {

    constructor() {
        super('/comic');
    }

    save(comic) {
        return this.post('/', comic)
    }

}

export default ComicService