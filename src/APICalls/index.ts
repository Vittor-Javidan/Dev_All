import { DevAllAPI } from "./APIs/DevAll"
import { DevAllConnect } from "./Connect/DevAll"
import { API_Interface } from "./interfaces"
import { DevAllQueries } from "./Queries/DevAll"
import { DevAllRoutes } from "./Routes/DevAll"

const API: API_Interface = new DevAllAPI(
    new DevAllConnect(), 
    new DevAllRoutes(), 
    new DevAllQueries()
)

export default API