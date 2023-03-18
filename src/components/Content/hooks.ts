
import API from "@/APICalls"
import { APIDataPublicacoes } from "@/APICalls/dataTypes"
import { useEffect } from "react"

export default function usePrimeirasPublicacoes(callback: (devAllPosts: APIDataPublicacoes | null) => void) {
    useEffect(() => {
        API.get_Publicacoes((posts) => callback(posts))
    }, [])
}
