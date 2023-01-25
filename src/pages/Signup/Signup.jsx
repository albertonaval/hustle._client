import { Container, Row, Col } from "react-bootstrap"
import SignupForm from "../../components/SignupForm/SignupForm"



const SignupPage = () => {
    return (
        <>
            <Container>
                <Row style={{ maxWidth: "700px", marginInline: "auto" }}>
                    <Col sm={{ offset: 3, span: 6 }}>
                        <h1 className="py-5 text-center">Sign Up</h1>
                        <SignupForm />
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default SignupPage