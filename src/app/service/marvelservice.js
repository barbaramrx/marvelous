import ApiMarvel from '../apimarvel.js'
import Key from './apikey.js'
import md5 from 'md5'

class MarvelService extends ApiMarvel {

    constructor() {        
        super('/v1/public')
    }

    getChars() {
        const hash = md5(Key.ts + Key.privateKey + Key.publicKey)
        return this.get(`/characters?ts=${Key.ts}&apikey=${Key.publicKey}&hash=${hash}`)
    }

    getSelectedChar(id) {
        const hash = md5(Key.ts + Key.privateKey + Key.publicKey)
        return this.get(`/characters/${id}?ts=${Key.ts}&apikey=${Key.publicKey}&hash=${hash}`)
    }

    filterChars(filter) {
        const hash = md5(Key.ts + Key.privateKey + Key.publicKey)
        return this.get(`/characters?name=${filter}&ts=${Key.ts}&apikey=${Key.publicKey}&hash=${hash}`)
    }

    getComics() {
        const hash = md5(Key.ts + Key.privateKey + Key.publicKey)
        return this.get(`/comics?ts=${Key.ts}&apikey=${Key.publicKey}&hash=${hash}`)
    }

    getSelectedComic(id) {
        const hash = md5(Key.ts + Key.privateKey + Key.publicKey)
        return this.get(`/comics/${id}?ts=${Key.ts}&apikey=${Key.publicKey}&hash=${hash}`)
    }

    filterComics(filter) {
        const hash = md5(Key.ts + Key.privateKey + Key.publicKey)
        return this.get(`/comics?title=${filter}&ts=${Key.ts}&apikey=${Key.publicKey}&hash=${hash}`)
    }

}

export default MarvelService