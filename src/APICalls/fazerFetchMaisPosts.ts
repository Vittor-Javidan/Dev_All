import { APIDataPublicacoes } from "@/types/APIdataType"
import { BASE_API_URL } from '../../env'

export async function fazerFetchMaisPosts(
    page: number,
    pesquisa: string = "",
    callback: (devAllAPIData: APIDataPublicacoes) => void, 
) {
    let response
    
    /*
        Caso o usuário tente carregar posts de uma pesquisa específica, apertando
        o botão carregue mais, o ternário perceberá que o campo de pesquisa foi prenchido,
        e irá incluir a string da barra de pesquisa dentro da query na call da API.
    */

    pesquisa === ""
    ? response = await fetch(`${BASE_API_URL}/api/v1/post?page=${page}`)
    : response = await fetch(`${BASE_API_URL}/api/v1/post?page=${page}&search=${pesquisa}`)

    const postsArray = await response.json()
    callback(postsArray)
}