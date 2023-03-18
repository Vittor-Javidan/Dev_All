import { Queries_Interface } from "../interfaces"

export class DevAllQueries implements Queries_Interface {
    root() { return "" }
    page(page: number) { return `page=${page}` }
    search(search: string) { return `search=${search}`}
}