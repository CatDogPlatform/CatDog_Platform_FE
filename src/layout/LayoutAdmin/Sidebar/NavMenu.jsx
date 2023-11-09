import React from "react";
import { menuList } from "./config/menuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./NavMenu.scss";
import { Link } from "react-router-dom";
const NavMenu = () => {
    return (
        <div className="nav-menu">
            {/* {menuList.map((item) => (
                <div className="menu-item">
                    {item.icon}
                    <p>{item.title}</p>
                </div>
            ))} */}
            <div className="menu-item">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#c2c2c2" }} />
                <Link to="/admin/staffmanagement" style={{ textDecoration: "none" }}>
                    <p>Post</p>
                </Link>
            </div>
            <div className="menu-item">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#c2c2c2" }} />
                <Link to="/admin/member" style={{ textDecoration: "none" }}>
                    <p>Member</p>
                </Link>
            </div>
        </div>
    );
};

export default NavMenu;
