import { Route, Routes } from "react-router-dom"
import SignupPage from "../pages/Signup/Signup"







const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" />

        </Routes>
    )
}

export default AppRoutes