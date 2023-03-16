import { BASE_API_URL } from "../../env"

export type APIDataPublicacoes = {
    blog: { nome: string },
    cliques: number,
    dataPublicacao: string,
    titulo: string,
    thumbnail: string,
    url: string,
}[]

class DevAllAPI {
    
    async fetch(
        route: string = '',
        callback: (responseData: APIDataPublicacoes) => void,
    ) {
        const response = await fetch(`${BASE_API_URL}/api/v1${route}`)
        const postsArray = await response.json()
        callback(postsArray)
    }
}

const devAllAPI = new DevAllAPI()
export default devAllAPI
