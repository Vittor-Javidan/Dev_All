import { BASE_API_URL } from "../../env"

export type APIDataPublicacoes = {
    blog: { nome: string },
    cliques: number,
    dataPublicacao: string,
    titulo: string,
    thumbnail: string,
    url: string,
}[]

class DevAllConnect {
    
    async fetch_v1(
        route: string,
        callback: (responseData: APIDataPublicacoes | null) => void,
    ) {
        const response = await fetch(`${BASE_API_URL}/api/v1${route}`)
            .then(response => response.json())

        response
        ? callback(response)
        : callback(null)         
    }
}

class DevAllQueries {
    
    publicacao() {
        return '/post'
    }

    publicacaoPagina(pagina: number) {
        return `/post?page=${pagina}`
    }

    pesquisar(pesquisa: string) {
        return `/post?search=${pesquisa}`
    }
}

class DevAllAPI {

    fetch =  new DevAllConnect().fetch_v1
    queries = new DevAllQueries()

    async get_Publicacoes(callback: (responseData: APIDataPublicacoes | null) => void) {
        this.fetch(this.queries.publicacao(),
            (data) => callback(null)
        )
    }

    async get_PesquisarPublicacoes(callback: (responseData: APIDataPublicacoes | null) => void, pesquisa: string) {
        this.fetch(this.queries.pesquisar(pesquisa),
            (data) => callback(data)
        )
    }

    async get_PublicacoesPagina(callback: (responseData: APIDataPublicacoes | null) => void, pagina: number) {
        this.fetch(this.queries.publicacaoPagina(pagina),
            (data) => callback(data),
        )
    }
}

const devAllAPI = new DevAllAPI()
export default devAllAPI
