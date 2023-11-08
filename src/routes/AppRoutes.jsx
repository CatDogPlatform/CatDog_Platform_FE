import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutUser from "./../layout/LayoutUser/layout";
import Home from "./../pages/user/home/Home";
import Login from "../pages/user/auth/Login";
import LayoutAdmin from "../layout/LayoutAdmin/layout";
import StaffTable from "../pages/admin/StaffList.jsx/Menu";
import LoginAdmin from "../pages/user/staff/auth/Login";
import GoodStore from "../pages/store/GoodStore";
import SignUp from "../pages/user/auth/SignUp";
import PetStore from "../pages/store/PetStore";
import PetManagement from "../pages/storeManagement/PetManagement";
import GoodManagement from "../pages/storeManagement/GoodManagement";
import PetInfor from "../pages/userPet/PetInfor";
import PetListDetail from "../pages/userPet/PetListDetail";
import GoodsListDetail from "../pages/userPet/GoodsListDetail";
import GoodInfor from "../pages/userPet/GoodsInfor";
import PayPet from "../pages/user/pet/PayPet";
import PayGoods from "../pages/user/pet/PayGoods";
import Profile from "../pages/user/profile/UserProfile";
import PetDetail from "../pages/user/pet/PetDetailID";
import GoodDetail from "../pages/user/pet/GoodsDetailID";
import UserPost from "../pages/store/UserPost";
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
                    <Route path="/admin/staffmanagement" element={<StaffTable />}></Route>
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
                    <Route path="paygoods" element={<PayGoods />} />
                    <Route path="/paypet" element={<PayPet />} />
                    <Route path="/userprofile" element={<Profile />} />
                    <Route path="/userpetlist" element={<PetInfor />} />
                    <Route path="/usergoodlist" element={<GoodInfor />} />
                    <Route path="/userpost" element={<UserPost />} />
                    <Route path="/pet/:petId" element={<PetDetail />} />
                    <Route path="/goods/:goodId" element={<GoodDetail />} />
                </Route>
                <Route path="/staff" element={<LayoutAdmin />}>
                    {/* day la routes cua staff */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
