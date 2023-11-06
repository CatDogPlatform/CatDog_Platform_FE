import React from "react";
import "./Topbar.scss";
import Searchbar from "./Searchbar";
import logo from "../../../assets/logo.JPG";
import { Link } from "react-router-dom";
import { menuList } from "../Sidebar/config/menuList";
import "./CateDrop.scss";
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
      {/* <div className="user">
        <Link to="/userprofile">User</Link>
      </div> */}
      <div className="dropdown">
        <button className="dropbtn">User</button>
        <div className="dropdown-content">
          <a href="#home">
            <Link to="/userpetlist">Pet</Link>
          </a>
          <a>
            <Link to="/usergoodlist">Goods</Link>
          </a>
          <a>
            <Link to="/usergoodlist">Profile</Link>
          </a>
          <a>
            <Link to="/usergoodlist">Logout</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
