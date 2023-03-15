import { APIDataPublicacoes } from "@/types/APIdataType"
import { BASE_API_URL } from "../../env"

export async function fazerFetchPostsPesquisa(
    pesquisa: string,
    callback: (devAllAPIData: APIDataPublicacoes) => void 
) {
    const response = await fetch(`${BASE_API_URL}/api/v1/post?search=${pesquisa}`)
    const postsArray = await response.json()
    callback(postsArray)
}