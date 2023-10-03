import React from "react"
import "./Sidebar.scss"
import NavMenu from "./NavMenu"
import ChatShowcase from "./ChatShowcase"
const Sidebar = () => {
    return (
        <div className="side-bar">
            <div className="nav-menu">
                <NavMenu />
            </div>

            <ChatShowcase />
        </div>
    )
}

export default Sidebar
