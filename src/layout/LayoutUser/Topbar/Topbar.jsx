import React, { useState } from "react";
import "./Topbar.scss";
import Searchbar from "./Searchbar";
import logo from "../../../assets/logo.JPG";
import { Link } from "react-router-dom";
import { menuList } from "../Sidebar/config/menuList";
import "./CateDrop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Sửa đổi import thư viện FontAwesome
import { faBell } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Topbar = () => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    const handleNotificationsClick = async () => {
        toggleNotifications();

        try {
            // Sửa đổi API_ENDPOINT_FOR_NOTIFICATIONS thành địa chỉ thực API của bạn
            const response = await axios.get("API_ENDPOINT_FOR_NOTIFICATIONS");
            setNotifications(response.data);
        } catch (error) {
            console.error("Lỗi khi tải thông báo: ", error);
        }
    };

    return (
        <div className="top-bar">
            <div className="logo">
                <Link to="/">
                    {" "}
                    {/* Sử dụng <Link> thay vì <a> */}
                    <img src={logo} alt="logo" style={{ width: "150px", height: "40px" }} />
                </Link>
            </div>

            <div className="search-bar">
                <Searchbar />
            </div>
            <div className="nav-bar">
                {menuList.map((item) => (
                    <div className="nav-item" key={item.link}>
                        {" "}
                        {/* Thêm key cho mỗi item */}
                        <Link style={{ textDecoration: "none" }} to={item.link}>
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="notifications">
                <FontAwesomeIcon icon={faBell} style={{ fontSize: "1.5rem", cursor: "pointer" }} onClick={handleNotificationsClick} />
                {isNotificationsOpen && (
                    <div className="notification-list">
                        {notifications.map((notification) => (
                            <div key={notification.id}>{notification.message}</div>
                        ))}
                    </div>
                )}
            </div>
            <div className="dropdown" style={{ marginRight: "50px" }}>
                <button className="dropbtn">
                    {" "}
                    <img
                        src="https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg" // Thay URL_AVATAR_IMAGE bằng URL hình ảnh của người dùng
                        alt="Avatar"
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundImage: "cover",
                        }}
                    />
                </button>
                <div className="dropdown-content" style={{ backgroundColor: "white", borderRadius: "0 0 10px 10px" }}>
                    <a href="#home">
                        <Link to="/userpetlist">Pet</Link>
                    </a>
                    <a href="#home">
                        <Link to="/usergoodlist">Goods</Link>
                    </a>
                    <a href="#home">
                        <Link to="/userprofile">Profile</Link>
                    </a>
                    <a href="#home">
                        <Link to="/userpost">Post</Link>
                    </a>
                    <a href="#home">
                        <Link to="/usergoodlist" style={{ color: "red" }}>
                            Logout
                        </Link>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
