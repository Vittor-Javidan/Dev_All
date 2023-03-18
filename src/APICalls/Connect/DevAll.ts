import { BASE_API_URL } from "../../../env"
import { APIDataPublicacoes } from "../dataTypes"
import { APIConnection } from "../interfaces"

export class DevAllConnect implements APIConnection {
    async fetch_v1(
        route: string, querie: string,
        callback: (responseData: APIDataPublicacoes | null) => void,
    ) {
        const response = await fetch(`${BASE_API_URL}/api/v1${route}${querie !== "" ? `?${querie}` : ""}`)
            .then(response => response.json())

        response
        ? callback(response)
        : callback(null)         
    }
}