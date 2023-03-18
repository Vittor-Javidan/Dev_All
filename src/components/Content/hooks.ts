import devAllAPI, { APIDataPublicacoes } from "@/APICalls/devAllAPI"
import { useEffect } from "react"

export default function usePrimeirasPublicacoes(callback: (devAllPosts: APIDataPublicacoes | null) => void) {
    useEffect(() => {
        devAllAPI.get_Publicacoes((posts) => callback(posts))
    }, [])
}
