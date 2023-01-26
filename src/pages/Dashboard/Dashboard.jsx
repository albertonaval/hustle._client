import { useContext, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"



import dashboardServices from "../../services/dashboard.service"

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState([])

    const { user, logoutUser } = useContext(AuthContext)

    const getDashboardData = () => {
        dashboardServices
            .getDashboardByUserId(user._id)
            .then(res =>
                setDashboardData(res.data[0]))
            .catch(err => console.error({ message: "Internal server error", err }))
    }

    useEffect(() => {
        getDashboardData()
    }, [])


    return (
        <>
            {!dashboardData ? (
                <Container>
                    <Row style={{ maxWidth: "700px", marginInline: "auto" }}>
                        <Col sm={{ offset: 3, span: 6 }}>
                            <h1 className="py-5 text-center"><i className="bi bi-arrow-repeat"></i></h1>
                        </Col>
                    </Row>
                </Container>
            ) : (
                //HEADER
                //QUOTE
                //TODO
                //POMODORO
                <>
                    <h1>HEADER&QUOTE&TODO&POMODORO</h1>
                    <Link to="/" onClick={logoutUser} className="btn btn-dark">
                        Log Out
                    </Link>
                </>
            )}
        </>

    )

}

export default Dashboard
