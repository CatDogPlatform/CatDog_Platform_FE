import React, { useState } from "react"

import "./Home.scss"
import HomePost from "./HomePost"
import HomeFriend from "./HomeFriend"

const Home = () => {
    return (
        <div>
            <div style={{ display: "flex", marginLeft: "100px" }}>
                <div>
                    <HomePost />
                </div>
                <div style={{ marginLeft: "100px" }}>
                    <HomeFriend />
                </div>
            </div>
        </div>
    )
}

export default Home
