import { APIDataPublicacoes } from "./dataTypes"

export interface APIConnection {
    fetch_v1(route: string, querie: string, callback: (responseData: APIDataPublicacoes | null) => void,): Promise<void>
}

export interface Routes {
    publicacoes(): string
}

export interface Queries {
    root(): string
    pagina(pagina: number): string
    pesquisar(pesquisa: string): string
}

export interface API {
    get_Publicacoes(callback: (responseData: APIDataPublicacoes | null) => void): Promise<void>
    get_PesquisarPublicacoes(callback: (responseData: APIDataPublicacoes | null) => void, pesquisa: string): Promise<void>
    get_PublicacoesPagina(callback: (responseData: APIDataPublicacoes | null) => void, pagina: number): Promise<void>
}