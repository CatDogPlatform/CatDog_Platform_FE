import React, { useState } from "react";

import "./Home.scss";
import HomePost from "./HomePost";
import HomeFriend from "./HomeFriend";
import HomePostStatus from "./HomePostStatus";

const Home = () => {
    return (
        <div
            style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                gap: "5px",
            }}
        >
            <div
                style={{
                    marginLeft: "50px",
                    marginRight: "50px",
                }}
            >
                <div style={{ overflowY: "auto" }}>
                    <HomePost />
                    <HomePostStatus />
                </div>
            </div>
        </div>
    );
};

export default Home;
