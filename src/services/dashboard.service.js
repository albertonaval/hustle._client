import axios from "axios"

class DashboardService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/dashboard`
        })

        this.api.interceptors.request.use(config => {
            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authoritation: `Bearer ${storedToken}` }
            }
            return config
        })
    }


    getDashboardByUserId() {
        return this.api.get("/")
    }

    updateHeader(id, header) {
        return this.api.put(`/update/header/${id}`, header)
    }

    updateTodo(id, todo) {
        return this.api.put(`/update/todo/${id}`, todo)
    }
}

const dashboardServices = new DashboardService()

export default dashboardServices
