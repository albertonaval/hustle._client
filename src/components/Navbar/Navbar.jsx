import { useContext } from "react"
import { DarkModeContext } from "../../context/darkmode.context"

import { Link } from "react-router-dom"

import { Container, Nav, Navbar } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"



const Navigation = () => {

    const { darkMode, setDarkMode } = useContext(DarkModeContext)
    const { user } = useContext(AuthContext)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <>
            {!user && (
                <Navbar collapseOnSelect expand="lg" bg={!darkMode ? "light" : "dark"} variant={!darkMode ? "light" : "dark"}>
                    <Container fluid className="py-2">
                        <Navbar.Brand>
                            <Link to="/" className="brand-link py-2 px-3">
                                <i className={!darkMode ? "bi bi-h-square nav-icon me-3 mb-1" : "bi bi-h-square nav-icon-dark me-3 mb-1"}></i>
                                <span style={!darkMode ? { color: "var(--light-text-primary)" } : { color: "var(--dark-text-primary)" }}>hustle.</span>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Link
                                    className={!darkMode ? "nav-btn" : "nav-btn-dark"}
                                    onClick={() => {
                                        toggleDarkMode()
                                    }}
                                >
                                    <Nav.Link as="div">{!darkMode ? <i className="bi bi-moon"></i> : <i className="bi bi-brightness-low"></i>}</Nav.Link>
                                </Link>
                            </Nav>
                            <Nav>
                                <Link to="/login" className={!darkMode ? "nav-btn" : "nav-btn-dark"}>
                                    <Nav.Link as="div">Hustle?</Nav.Link>
                                </Link>
                                <Link to="/signup" className={!darkMode ? "nav-btn ms-3" : "nav-btn-dark ms-3"} style={{ maxWidth: "max-content" }}>
                                    <Nav.Link as="div">
                                        Try Hustle!
                                    </Nav.Link>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>)}


        </>
    )
}

export default Navigation