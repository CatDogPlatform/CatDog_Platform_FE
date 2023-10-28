import React from "react"
import "./HomePostStatus.scss"
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { postList } from "./FriendList"

function HomePostStatus() {
    return (
        <div className="posted">
            <div className="poster">
                {postList.map((item) => (
                    <div
                        className="post_fake"
                        style={{
                            marginBottom: "40px",
                            borderBottom: "1px solid grey",
                        }}
                    >
                        <div className="posted_header">
                            <div className="posted_image">
                                <img src={item.avatar} />
                            </div>
                            <div className="posted_infor">
                                <span className="posted_name"> {item.name}</span>

                                <br />
                                <span className="posted_time">{item.time}</span>
                            </div>
                        </div>
                        <div className="posted_body">
                            {item.script}
                            <div className="posted_body_img">
                                <img src={item.Image} />
                            </div>
                        </div>
                        <div
                            className="posted_footer"
                            style={{ paddingBottom: "50px" }}
                        >
                            <div className="posted_icon1">
                                <FontAwesomeIcon icon={faHeart} />
                                <span
                                    style={{ marginLeft: "10px", fontSize: "15px" }}
                                >
                                    {item.likeNumber}
                                </span>
                            </div>
                            <div className="posted_icon1">
                                <FontAwesomeIcon icon={faComment} />
                                <span
                                    style={{ marginLeft: "10px", fontSize: "15px" }}
                                >
                                    {item.cmtNumber}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePostStatus
