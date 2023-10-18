import React, { useState } from "react"

import "./Home.scss"
import HomePost from "./HomePost"
import HomeFriend from "./HomeFriend"
import HomePostStatus from "./HomePostStatus"

const Home = () => {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    marginLeft: "100px",
                    position: "relative",
                }}
            >
                <div>
                    <HomePost />
                    <HomePostStatus />
                </div>
                <div style={{ position: "fixed", right: "0" }}>
                    <HomeFriend />
                </div>
            </div>
        </div>
    )
}

export default Home
