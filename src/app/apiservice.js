import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {
    constructor(apiurl) {
        this.apiurl = apiurl
    }

    post(url, object) {
        const finalUrl = `${this.apiurl}${url}`
        return httpClient.post(finalUrl, object)
    }

    put(url, object) {
        const finalUrl = `${this.apiurl}${url}`
        return httpClient.put(finalUrl, object)
    }

    get(url) {
        const finalUrl = `${this.apiurl}${url}`
        return httpClient.get(finalUrl)
    }

    delete(url) {
        const finalUrl = `${this.apiurl}${url}`
        return httpClient.delete(finalUrl)
    }
}

export default ApiService
