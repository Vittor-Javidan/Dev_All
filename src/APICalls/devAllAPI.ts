import { BASE_API_URL } from "../../env"

/*
    Essa é a minha interpretação de OOPlevada ao extremo após assistir o vídeo:
    
    "Object Oriented Programming is not what I thought - Talk by Anjana Vakil"
    video: "https://www.youtube.com/watch?v=TbP2B1ijWr8"

    Parece meio insano ao se olhar esse arquivo, mas é porque tentei chegar ao
    extremo da menor unidade possível de estruturas que pudessem enviar "mensagens"
    umas as outras, assim como a ideia base de Alan Kay sobre OOP.

    Provavelmete isso aqui ainda está errado conceitualmente.
*/

export type APIDataPublicacoes = {
    blog: { nome: string },
    cliques: number,
    dataPublicacao: string,
    titulo: string,
    thumbnail: string,
    url: string,
}[]

class DevAll_Connect {
    
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

class DevAll_Routes {

    publicacao(querie: string | "") {
        return `/post${querie !== "" ? `?${querie}` : ""}`
    }
}

class DevAll_Queries {

    root() {
        return ""
    }
    
    pagina(pagina: number) {
        return `page=${pagina}`
    }

    pesquisar(pesquisa: string) {
        return `search=${pesquisa}`
    }
}

class DevAllAPI {

    async get_Publicacoes(callback: (responseData: APIDataPublicacoes | null) => void) {
        new DevAll_Connect().fetch_v1(
            new DevAll_Routes().publicacao(
                new DevAll_Queries().root()
            ), (data) => callback(data)
        )
    }

    async get_PesquisarPublicacoes(callback: (responseData: APIDataPublicacoes | null) => void, pesquisa: string) {
        new DevAll_Connect().fetch_v1(
            new DevAll_Routes().publicacao(
                new DevAll_Queries().pesquisar(pesquisa)
            ), (data) => callback(data)
        )
    }

    async get_PublicacoesPagina(callback: (responseData: APIDataPublicacoes | null) => void, pagina: number) {
        new DevAll_Connect().fetch_v1(
            new DevAll_Routes().publicacao(
                new DevAll_Queries().pagina(pagina)
            ), (data) => callback(data),
        )
    }
}

const devAllAPI = new DevAllAPI()
export default devAllAPI
