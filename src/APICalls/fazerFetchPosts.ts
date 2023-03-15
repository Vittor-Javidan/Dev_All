import { APIDataPublicacoes } from "@/types/APIdataType"
import { BASE_API_URL } from "../../env"

export async function fazerFetchPosts(
    page: number,
    callback: (devAllAPIData: APIDataPublicacoes) => void
) {
    const response = await fetch(`${BASE_API_URL}/api/v1/post?page=${page}`)
    const postsArray = await response.json()
    callback(postsArray)
}