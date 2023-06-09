import { APIPostsData } from "./dataTypes"

export interface APIConnection_Interface {
    fetch_v1(route: string, querie: string, callback: (responseData: APIPostsData | null) => void,): Promise<void>
}

export interface Routes_Interface {
    posts(): string
}

export interface Queries_Interface {
    root(): string
    page(pagina: number): string
    search(pesquisa: string): string
}

export interface API_Interface {
    get_Posts(callback: (responseData: APIPostsData | null) => void): Promise<void>
    get_SearchPosts(callback: (responseData: APIPostsData | null) => void, search: string): Promise<void>
    get_PagePosts(callback: (responseData: APIPostsData | null) => void, page: number): Promise<void>
}