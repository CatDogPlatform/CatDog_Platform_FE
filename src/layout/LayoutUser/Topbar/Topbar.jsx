import React from "react";
import "./Topbar.scss";
import Searchbar from "./Searchbar";
import logo from "../../../assets/logo.JPG";
import { Link } from "react-router-dom";
import { menuList } from "../Sidebar/config/menuList";
const Topbar = () => {
    return (
        <div className="top-bar">
            <div className="logo">
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: "150px", height: "40px" }}
                ></img>
            </div>
            <div className="search-bar">
                <Searchbar />
            </div>
            <div className="nav-bar">
                {menuList.map((item) => (
                    <div className="nav-item">
                        <Link style={{ textDecoration: "none" }} to={item.link}>
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="user">
                <Link to="/profile">User</Link>
            </div>
        </div>
    );
};

export default Topbar;
