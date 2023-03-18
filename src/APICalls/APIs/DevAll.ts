import { APIDataPublicacoes } from "../dataTypes"
import { API, APIConnection, Queries, Routes } from "../interfaces"

export class DevAllAPI implements API {

    api: APIConnection
    routes: Routes
    queries: Queries

    constructor(api: APIConnection, routes: Routes, queries: Queries) {
        this.api = api
        this.routes = routes
        this.queries = queries
    }

    async get_Publicacoes(callback: (responseData: APIDataPublicacoes | null) => void) {
        this.api.fetch_v1(
            this.routes.publicacoes(), 
            this.queries.root(),
            (data) => callback(data)
        )
    }

    async get_PesquisarPublicacoes(callback: (responseData: APIDataPublicacoes | null) => void, pesquisa: string) {
        this.api.fetch_v1(
            this.routes.publicacoes(),
            this.queries.pesquisar(pesquisa),
            (data) => callback(data)
        )
    }

    async get_PublicacoesPagina(callback: (responseData: APIDataPublicacoes | null) => void, pagina: number) {
        this.api.fetch_v1(
            this.routes.publicacoes(),
            this.queries.pagina(pagina), 
            (data) => callback(data),
        )
    }
}