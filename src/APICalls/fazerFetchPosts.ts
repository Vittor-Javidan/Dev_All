import { APIDataPublicacoes } from "@/types/APIdataType"
import { Dispatch, SetStateAction } from "react"

export async function fazerFetchPosts(
    setPosts: Dispatch<SetStateAction<APIDataPublicacoes>>, 
    setContador: Dispatch<SetStateAction<number>>, 
    page: number
) {
    const postsResponse = await fetch(`https://api.devall.com.br/api/v1/post?page=${page}`)
    const postsArray = await postsResponse.json()
    setPosts(postsArray)
    setContador(prev => prev + 1)
}