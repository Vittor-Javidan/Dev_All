import { APIPostsData } from "../dataTypes"
import { APIConnection_Interface, API_Interface, Queries_Interface, Routes_Interface } from "../interfaces"

export class DevAllAPI implements API_Interface {

    api: APIConnection_Interface
    routes: Routes_Interface
    queries: Queries_Interface

    constructor(api: APIConnection_Interface, routes: Routes_Interface, queries: Queries_Interface) {
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