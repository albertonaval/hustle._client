import { createContext, useEffect, useState } from "react"
import authService from "../services/auth.service"


const AuthContext = createContext()

const AuthProviderWrapper = props => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    const storeToken = token => {
        localStorage.setItem("authToken", token)
    }

    const authenticateUser = () => {
        const token = localStorage.getItem("authToken")

        if (token) {
            authService
                .verify(token)
                .then(({ data }) => {
                    setUser(data)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.error("Internal Server Error", err)
                    setIsLoading(false)
                })
        }
    }

    const logoutUser = () => {
        setUser(null)
        setIsLoading(false)
        localStorage.removeItem("authToken")
    }

    const refreshToken = () => {
        authService
            .refreshToken()
            .then(({ data }) => {
                storeToken(data.refreshedToken)
                authenticateUser()
            })
            .catch(err => {
                console.error("Internal Server Error", err)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        authenticateUser()
    }, [user])

    return <AuthContext.Provider value={{
        storeToken, refreshToken, authenticateUser, logoutUser, user, isLoading
    }}>
        {props.children}
    </AuthContext.Provider>

}

export { AuthContext, AuthProviderWrapper }