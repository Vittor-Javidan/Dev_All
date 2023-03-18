import { APIPostsData } from "../dataTypes"
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

    async get_Posts(callback: (responseData: APIPostsData | null) => void) {
        this.api.fetch_v1(
            this.routes.posts(), 
            this.queries.root(),
            (data) => callback(data)
        )
    }

    async get_SearchPosts(callback: (responseData: APIPostsData | null) => void, search: string) {
        this.api.fetch_v1(
            this.routes.posts(),
            this.queries.search(search),
            (data) => callback(data)
        )
    }

    async get_PagePosts(callback: (responseData: APIPostsData | null) => void, page: number) {
        this.api.fetch_v1(
            this.routes.posts(),
            this.queries.page(page), 
            (data) => callback(data),
        )
    }
}