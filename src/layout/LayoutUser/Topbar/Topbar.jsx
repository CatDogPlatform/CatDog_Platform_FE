import React from "react"
import "./Topbar.scss"
import Searchbar from "./Searchbar"

const Topbar = () => {
    return (
        <div className="top-bar">
            <div className="logo"></div>
            <div className="search-bar">
                <Searchbar />
            </div>
            <div className="notif"></div>
        </div>
    )
}

export default Topbar
