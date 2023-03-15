import { APIDataPublicacoes } from "@/types/APIdataType"
import { BASE_API_URL } from "../../env"

class DevAllAPI {
    
    fetch(
        callback: (devAllAPIData: APIDataPublicacoes) => void,
        pagina: number = 1
    ) {
        fazerFetchPosts(pagina, (posts) => callback(posts))
    }

    fetchPesquisa(
        callback: (devAllAPIData: APIDataPublicacoes) => void,
        pesquisa: string
    ) {
        fazerFetchPostsPesquisa( pesquisa, (posts) => callback(posts))
    }
}

const devAllAPI = new DevAllAPI()
export default devAllAPI

async function fazerFetchPostsPesquisa(
    pesquisa: string,
    callback: (devAllAPIData: APIDataPublicacoes) => void 
) {
    const response = await fetch(`${BASE_API_URL}/api/v1/post?search=${pesquisa}`)
    const postsArray = await response.json()
    callback(postsArray)
}

async function fazerFetchPosts(
    page: number,
    callback: (devAllAPIData: APIDataPublicacoes) => void
) {
    const response = await fetch(`${BASE_API_URL}/api/v1/post?page=${page}`)
    const postsArray = await response.json()
    callback(postsArray)
}