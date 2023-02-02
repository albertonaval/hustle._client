import { useContext, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import { DarkModeContext } from "../../context/darkmode.context"
import dashboardServices from "../../services/dashboard.service"
import HeaderImage from "./HeaderImage"
import HeaderTitle from "./HeaderTitle"





const Header = () => {
    const [headerData, setHeaderData] = useState()


    const { user } = useContext(AuthContext)
    const { darkMode } = useContext(DarkModeContext)

    const getHeaderData = () => {
        dashboardServices
            .getDashboardByUser(user._id)
            .then(res => {

                setHeaderData(res.data[0].header)
            })
            .catch(err => console.log({ message: "Internal server error:", err }))
    }

    useEffect(() => {
        getHeaderData()
    }, [])

    return (
        <>
            {!headerData ? (
                <Container>
                    <Row style={{ maxWidth: "700px", marginInline: "auto" }}>
                        <Col sm={{ offset: 3, span: 6 }}>
                            <h1 className="py-5 text-center"><i className="bi bi-arrow-repeat"></i></h1>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <header style={{ position: "relative" }}>
                    <HeaderImage HeaderImage={headerData.image} />
                    <HeaderTitle headerTitle={headerData.title} />
                </header>

            )}
        </>

    )

}


export default Header