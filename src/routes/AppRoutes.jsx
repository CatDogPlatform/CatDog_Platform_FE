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
import UpdatePet from "../pages/userPet/PetUpdateButton";
import MemberList from "../pages/admin/StaffList.jsx/MemberList";
import Unauthorized from "../components/Unauthorize/Unauthorize";
import { ROLES } from "./Roles";
import { staffRoutes, privateRoutes } from "./routesByRole";
import AuthRoute from "./AuthRoute";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route key="home" element={<AuthRoute allowedRoles={[ROLES.MEMBER]} />}>
                    <Route key="layout_public" element={<LayoutUser />}>
                        {privateRoutes.map((route, index) => {
                            return <Route key={index} path={route.path} element={route.element} />;
                        })}
                    </Route>
                </Route>
                <Route key="home" element={<AuthRoute allowedRoles={[ROLES.ADMIN]} />}>
                    <Route key="layout_public" element={<LayoutAdmin />}>
                        {staffRoutes.map((route, index) => {
                            return <Route key={index} path={route.path} element={route.element} />;
                        })}
                    </Route>
                </Route>
                <Route path="/unauthorize" element={<Unauthorized />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<LayoutUser />}>
                    <Route path="/" element={<Home />} />
                </Route>

                <Route path="/" element={<LayoutUser />}>
                    <Route path="/goodsmanagement" element={<GoodManagement />} />
                    <Route path="/petlist" element={<PetInfor />} />
                    <Route path="/goodslist" element={<GoodInfor />} />
                    <Route path="/petlistupdate" element={<PetListDetail />} />
                    <Route path="/goodslistupdate" element={<GoodsListDetail />} />
                    <Route path="paygoods" element={<PayGoods />} />
                    <Route path="/paypet" element={<PayPet />} />
                    <Route path="/userprofile" element={<Profile />} />
                    <Route path="/userpost" element={<UserPost />} />
                    <Route path="/pet/:petId" element={<PetDetail />} />
                    <Route path="/goods/:goodId" element={<GoodDetail />} />
                    <Route path="/update-pet/:petId" element={<UpdatePet />} />
                </Route>
                <Route path="/staff" element={<LayoutAdmin />}></Route>
                <Route path="/staff" element={<LayoutAdmin />}>
                    {/* day la routes cua staff */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
