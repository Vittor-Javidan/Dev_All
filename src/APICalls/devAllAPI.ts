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
    
    private async fetch(
        route: string = '',
        callback: (responseData: APIDataPublicacoes) => void,
    ) {
        const response = await fetch(`${BASE_API_URL}/api/v1${route}`)
        const postsArray = await response.json()
        callback(postsArray)
    }

    async get_Publicacoes(callback: (responseData: APIDataPublicacoes) => void) {
        this.fetch('/post',
            (data) => callback(data)
        )
    }

    async get_PesquisarPublicacoes(callback: (responseData: APIDataPublicacoes) => void, pesquisa: string) {
        this.fetch(`/post?search=${pesquisa}`,
            (data) => callback(data)
        )
    }

    async get_PublicacoesPagina(callback: (responseData: APIDataPublicacoes) => void, pagina: number) {
        this.fetch(`/post?page=${pagina}`,
            (data) => callback(data),
        )
    }
}

const devAllAPI = new DevAllAPI()
export default devAllAPI
