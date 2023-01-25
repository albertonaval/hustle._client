import { useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { DarkModeContext } from "../../context/darkmode.context"
import authService from "../../services/auth.service"




const SignupForm = () => {


    const [signupData, setSignupData] = useState({
        email: "",
        password: "",
        username: "",
    })

    const [errors, setErrors] = useState([])

    const { darkMode } = useContext(DarkModeContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => { navigate("/login") })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const { username, email, password } = signupData


    return (
        <Form className="d-flex flex-column gap-2" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label className="text-muted">Username</Form.Label>
                <Form.Control className={!darkMode ? "form-control" : "form-control-dark"} type="text" value={username} name="username" onChange={handleInputChange} placeholder="Enter a username..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label className="text-muted">Password</Form.Label>
                <Form.Control className={!darkMode ? "form-control" : "form-control-dark"} type="password" value={password} name="password" onChange={handleInputChange} placeholder="Enter your password..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label className="text-muted">Email address</Form.Label>
                <Form.Control className={!darkMode ? "form-control" : "form-control-dark"} type="email" value={email} name="email" onChange={handleInputChange} placeholder="Enter your email address..." />
            </Form.Group>

            {errors.length ? (
                <p>
                    {errors.map(elm => (
                        <p key={elm}>{elm}</p>
                    ))}
                </p>
            ) : undefined}

            <Button type="submit" className="mt-3 px-5 btn btn-dark" style={{ maxWidth: "max-content", marginInline: "auto" }}>
                Submit
            </Button>
        </Form>
    )

}

export default SignupForm