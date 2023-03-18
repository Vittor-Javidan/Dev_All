import { Queries } from "../interfaces"

export class DevAllQueries implements Queries {
    root() { return "" }
    page(page: number) { return `page=${page}` }
    search(search: string) { return `search=${search}`}
}