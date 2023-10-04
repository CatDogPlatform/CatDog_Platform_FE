import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutUser from "./../layout/LayoutUser/layout"
import Home from "./../pages/user/home/Home"
import Login from "../pages/user/auth/Login"
import LoginAdmin from "../pages/user/staff/auth/Login"
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<LayoutUser />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/admin/login" element={<LoginAdmin />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
