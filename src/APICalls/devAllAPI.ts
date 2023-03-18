import { BASE_API_URL } from "../../env"

/*
    Essa é a minha interpretação de OOPlevada ao extremo após assistir o vídeo:
    
    "Object Oriented Programming is not what I thought - Talk by Anjana Vakil"
    video: "https://www.youtube.com/watch?v=TbP2B1ijWr8"

    Parece meio insano ao se olhar esse arquivo, mas é porque tentei chegar ao
    extremo da menor unidade possível de estruturas que pudessem enviar "mensagens"
    umas as outras, assim como a ideia base de Alan Kay sobre OOP.

    isso aqui ainda pode está errado conceitualmente.
*/

export type APIDataPublicacoes = {
    blog: { nome: string },
    cliques: number,
    dataPublicacao: string,
    titulo: string,
    thumbnail: string,
    url: string,
}[]

class APIConnection {
    async fetch_v1(
        route: string, querie: string,
        callback: (responseData: APIDataPublicacoes | null) => void,
    ) {
        const response = await fetch(`${BASE_API_URL}/api/v1${route}${querie !== "" ? `?${querie}` : ""}`)
            .then(response => response.json())

        response
        ? callback(response)
        : callback(null)         
    }
}

class Route {
    publicacao() {
        return "/post"
    }
}

class Querie {
    root() { return "" }
    pagina(pagina: number) { return `page=${pagina}` }
    pesquisar(pesquisa: string) { return `search=${pesquisa}`}
}

class DevAllAPI {

    static api = new APIConnection()
    static route = new Route()
    static querie = new Querie()

    async get_Publicacoes(callback: (responseData: APIDataPublicacoes | null) => void) {
        DevAllAPI.api.fetch_v1(
            DevAllAPI.route.publicacao(), 
            DevAllAPI.querie.root(),
            (data) => callback(data)
        )
    }

    async get_PesquisarPublicacoes(callback: (responseData: APIDataPublicacoes | null) => void, pesquisa: string) {
        DevAllAPI.api.fetch_v1(
            DevAllAPI.route.publicacao(),
            DevAllAPI.querie.pesquisar(pesquisa),
            (data) => callback(data)
        )
    }

    async get_PublicacoesPagina(callback: (responseData: APIDataPublicacoes | null) => void, pagina: number) {
        DevAllAPI.api.fetch_v1(
            DevAllAPI.route.publicacao(),
            DevAllAPI.querie.pagina(pagina), 
            (data) => callback(data),
        )
    }
}

const devAllAPI = new DevAllAPI()
export default devAllAPI
