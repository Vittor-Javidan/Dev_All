export class DevAllQueries {
    root() { return "" }
    pagina(pagina: number) { return `page=${pagina}` }
    pesquisar(pesquisa: string) { return `search=${pesquisa}`}
}