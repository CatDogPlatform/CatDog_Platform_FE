import React from "react"
import { Outlet } from "react-router-dom"
import Topbar from "./Topbar/Topbar"
import Sidebar from "./Sidebar/Sidebar"
import Menu from "../../pages/admin/StaffList.jsx/Menu"
import "./layout.scss"
const LayoutAdmin = () => {
    return (
        <div>
            <div className="header">
                <Topbar />
            </div>
            <div className="main-body">
                <div className="side-nav">
                    <Sidebar />
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin
