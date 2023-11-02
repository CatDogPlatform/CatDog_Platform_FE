import React from "react"
import "./Sidebar.scss"
import NavMenu from "./NavMenu"

const Sidebar = () => {
    return (
        <div className="side-bar">
            <div className="nav-menu">
                <NavMenu />
            </div>
            {/* <ChatShowcase /> */}
        </div>
    )
}

export default Sidebar
