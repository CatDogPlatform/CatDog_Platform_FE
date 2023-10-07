import React from "react"
import "./Sidebar.scss"
import NavMenu from "./NavMenu"

const Sidebar = () => {
    return (
        <div className="side-bar">
            <div className="nav-menu">
                <NavMenu />
            </div>
        </div>
    )
}

export default Sidebar
