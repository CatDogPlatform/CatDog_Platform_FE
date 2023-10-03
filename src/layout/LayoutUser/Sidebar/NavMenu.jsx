import React from "react"
import { menuList } from "./config/menuList"
import "./NavMenu.scss"
const NavMenu = () => {
    return (
        <div className="nav-menu">
            {menuList.map((item) => (
                <div className="menu-item">
                    {item.icon}
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default NavMenu
