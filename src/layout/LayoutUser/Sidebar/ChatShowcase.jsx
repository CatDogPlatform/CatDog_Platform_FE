import React from "react"
import "./ChatShowcase.scss"
import { chatList } from "./config/chatList"

const ChatShowcase = () => {
    return (
        <div className="mess">
            <div className="mess-title">
                <span style={{ fontWeight: "900" }}>Message</span>
                <span style={{ color: "red" }}>See all</span>
            </div>
            <br />
            <div className="mess-all">
                {chatList.map((item) => (
                    <div className="mess-chat">
                        <div className="mess-avatar">
                            <p>{item.avatar}</p>
                        </div>
                        <div style={{ marginLeft: "20px" }} className="mess-mess">
                            <span>{item.name}</span>
                            <p
                                style={{
                                    marginBottom: "15px",
                                    color: "#c7c7c7",
                                    fontSize: "15px",
                                    width: "165px",
                                    textOverflow: "ellipsis",
                                    wordWrap: "break-word",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                }}
                            >
                                {item.mess}
                            </p>
                        </div>

                        <div style={{ marginLeft: "10px" }} className="mess-time">
                            <span>{item.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChatShowcase
