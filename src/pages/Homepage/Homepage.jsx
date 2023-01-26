import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"

import WOW from "wowjs"



const HomePage = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init()
    }, [])

    return (

        <Container className="py-5">
            <Row className="mt-5 pb-5 align-items-center justify-content-lg-end wow fadeInUp " data-wow-duration="2s">
                <Col lg={{ span: 7 }} className="text-center">
                    <div className="d-flex my-5 pb-5">
                        <img src="https://res.cloudinary.com/dqvwx536e/image/upload/v1674663982/undraw_to_the_stars_re_wq2x_rlsqcs.svg" alt="Team" width="100%" />
                    </div>
                </Col>
                <Col lg={{ span: 5 }} className="text-center d-flex justify-content-lg-end justify-content-md-center pb-5 mb-5">
                    <div className="text-start ">
                        <h1 className="mt-5 homeTitle">Hustle for doer's</h1>
                        <h4 className="pt-5">Get ready to be awesome</h4>
                        <h4>Get ready to become the best version of you.</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage


