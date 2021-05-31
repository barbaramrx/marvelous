import ApiService from '../apiservice.js'

class CharService extends ApiService {

    constructor() {
        super('/char');
    }

    save(char) {
        return this.post('/', char)
    }

}

export default CharService