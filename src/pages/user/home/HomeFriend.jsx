import React, { useState } from "react"
import "./HomeFriend.scss"
import { friendList } from "./FriendList"
const HomeFriend = () => {
    return (
        <div className="friend">
            <div className="friend-title">
                <span style={{ marginLeft: "5px", fontWeight: "700" }}>Friends</span>
                <span style={{ marginLeft: "186px", color: "red" }}>See all</span>
            </div>
            <hr className="friend-custom" />
            <div className="friend-all">
                {friendList.map((item) => (
                    <div className="friend-chat">
                        <div className="friend-avatar">
                            <img
                                style={{ marginBottom: "100px" }}
                                src={item.avatar}
                            />
                        </div>
                        <div
                            style={{ marginLeft: "20px", width: "165px" }}
                            className="friend-mess"
                        >
                            <span style={{ marginBottom: "10px" }}>{item.name}</span>
                            <br />
                            <span
                                style={{
                                    color: "#c7c7c7",
                                    fontSize: "15px",
                                }}
                            >
                                {item.follow}
                            </span>
                        </div>

                        <div
                            style={{
                                marginLeft: "10px",
                                marginTop: "13px",
                                fontSize: "13px",
                            }}
                        >
                            <span style={{ color: "green" }}>{item.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeFriend
