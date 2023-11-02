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
import PetStore from "../pages/store/PetStore"
import PetManagement from "../pages/storeManagement/PetManagement"
import GoodManagement from "../pages/storeManagement/GoodManagement"
import PetInfor from "../pages/userPet/PetInfor"
import PetListDetail from "../pages/userPet/PetListDetail"
import GoodsListDetail from "../pages/userPet/GoodsListDetail"
import GoodInfor from "../pages/userPet/GoodsInfor"
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
                    <Route path="/pets" element={<PetStore />} />
                    <Route path="/petsmanagement" element={<PetManagement />} />
                    <Route path="/goodsmanagement" element={<GoodManagement />} />
                    <Route path="/petlist" element={<PetInfor />} />
                    <Route path="/goodslist" element={<GoodInfor />} />
                    <Route path="/petlistupdate" element={<PetListDetail />} />
                    <Route path="/goodslistupdate" element={<GoodsListDetail />} />
                </Route>
                <Route path="/staff" element={<LayoutAdmin />}>
                    {/* day la routes cua staff */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
