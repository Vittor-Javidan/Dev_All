
import API from "@/APICalls"
import { APIPostsData } from "@/APICalls/dataTypes"
import { useEffect } from "react"

export default function usePrimeirasPublicacoes(callback: (devAllPosts: APIPostsData | null) => void) {
    useEffect(() => {
        API.get_Posts((posts) => callback(posts))
    }, [])
}
