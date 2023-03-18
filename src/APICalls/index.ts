import { DevAllAPI } from "./APIs/DevAll"
import { DevAllConnect } from "./Connect/DevAll"
import { API } from "./interfaces"
import { DevAllQueries } from "./Queries/DevAll"
import { DevAllRoutes } from "./Routes/DevAll"

const API: API = new DevAllAPI(
    new DevAllConnect(), 
    new DevAllRoutes(), 
    new DevAllQueries()
)

export default API