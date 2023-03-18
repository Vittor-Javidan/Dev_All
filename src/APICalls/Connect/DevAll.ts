import { BASE_API_URL } from "../../../env"
import { APIPostsData } from "../dataTypes"
import { APIConnection_Interface } from "../interfaces"

export class DevAllConnect implements APIConnection_Interface {
    async fetch_v1(
        route: string, querie: string,
        callback: (responseData: APIPostsData | null) => void,
    ) {
        const response = await fetch(`${BASE_API_URL}/api/v1${route}${querie !== "" ? `?${querie}` : ""}`)
            .then(response => response.json())

        response
        ? callback(response)
        : callback(null)         
    }
}