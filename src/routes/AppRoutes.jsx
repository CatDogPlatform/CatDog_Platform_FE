import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutUser from "./../layout/LayoutUser/layout"
import Home from "./../pages/user/home/Home"
import Login from "../pages/user/auth/Login"
import LayoutAdmin from "../layout/LayoutAdmin/layout"
import StaffTable from "../pages/admin/StaffList.jsx/Menu"
import LoginAdmin from "../pages/user/staff/auth/Login"
import GoodStore from "../pages/store/GoodStore"
import SignUp from "../pages/user/auth/SignUp"
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<LayoutUser />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/admin/login" element={<LoginAdmin />}></Route>
                <Route path="/admin" element={<LayoutAdmin />}>
                    {/* day la routes cua admin */}
                    <Route
                        path="/admin/staffmanagement"
                        element={<StaffTable />}
                    ></Route>
                </Route>
                <Route path="/" element={<LayoutUser />}>
                    <Route path="/goods" element={<GoodStore />} />
                </Route>
                <Route path="/staff" element={<LayoutAdmin />}>
                    {/* day la routes cua staff */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
