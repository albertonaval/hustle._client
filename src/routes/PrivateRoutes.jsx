import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../context/auth.context"





const PrivateRoute = () => {

    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return (
            <>
                <Container>
                    <Row style={{ maxWidth: "700px", marginInline: "auto" }}>
                        <Col sm={{ offset: 3, span: 6 }}>
                            <h1 className="py-5 text-center"><i className="bi bi-arrow-repeat"></i></h1>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return <Outlet />

}

export default PrivateRoute