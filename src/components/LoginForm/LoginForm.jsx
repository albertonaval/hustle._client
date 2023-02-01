import { useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"

import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { DarkModeContext } from "../../context/darkmode.context"
import authService from "../../services/auth.service"





const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState()

    const navigate = useNavigate()

    const { darkMode } = useContext(DarkModeContext)
    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }



    const handleFormSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate("/dashboard")
            })
            .catch(err => setErrors(err.response.data.message))

    }

    const { email, password } = loginData


    return (
        <Form className="d-flex flex-column gap-2" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label className="text-muted">Email</Form.Label>
                <Form.Control className={!darkMode ? "form-control" : "form-control-dark"} type="email" name="email" placeholder="Enter your email address..." value={email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label className="text-muted">Password</Form.Label>
                <Form.Control className={!darkMode ? "form-control" : "form-control-dark"} type="password" name="password" placeholder="Enter your password..." value={password} onChange={handleInputChange} />
            </Form.Group>

            <p>{errors}</p>

            <Button type="submit" className="btn-dark mt-3 px-5" style={{ maxWidth: "max-content", marginInline: "auto" }}>
                Login
            </Button>
        </Form>
    )

}

export default LoginForm