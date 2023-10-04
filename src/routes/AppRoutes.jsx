import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutUser from "./../layout/LayoutUser/layout"
import Home from "./../pages/user/home/Home"
import Login from "../pages/user/auth/Login"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<LayoutUser />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
