import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard/Dashboard"
import HomePage from "../pages/Homepage/Homepage"
import LoginPage from "../pages/Login /Login"
import SignupPage from "../pages/Signup/Signup"
import PrivateRoute from "./PrivateRoutes"








const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes