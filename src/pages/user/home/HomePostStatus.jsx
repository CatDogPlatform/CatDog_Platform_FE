import React from "react";
import "./HomePostStatus.scss";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postList } from "./FriendList";
import axios from "axios";
import { AiOutlineLike } from "react-icons/ai";

function HomePostStatus() {
    const [posts, setPosts] = React.useState([]);

    const fetchPosts = async () => {
        const res = await axios.get("https://petdom-apis.onrender.com/api/posts?search=");
        console.log(res);
        setPosts(res.data);
    };

    React.useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div className="posted">
            <div className="poster">
                {posts &&
                    posts.map((item) => (
                        <div
                            className="post_fake"
                            style={{
                                marginBottom: "40px",
                                borderBottom: "1px solid grey",
                            }}
                        >
                            <div className="posted_header">
                                <div className="posted_infor">
                                    <span className="posted_name"> {item?.user?.fullname}</span>

                                    <br />
                                </div>
                            </div>
                            <div className="posted_body">
                                {item.content}
                                <div className="posted_body_img">
                                    <img src={item.images} alt="" />
                                </div>
                            </div>
                            <div style={{ display: "flex", height: "35px" }}>
                                <button
                                    style={{
                                        borderRadius: "100%",
                                        backgroundColor: "white",
                                    }}
                                    className="like-icon"
                                >
                                    {" "}
                                    <AiOutlineLike style={{ fontSize: "20px" }} />
                                </button>
                                <p style={{ margin: "8px 10px 7px 10px" }}>100</p>
                            </div>

                            <div className="posted_footer" style={{ paddingBottom: "10px" }}>
                                {/* <div className="posted_icon1">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span
                                        style={{
                                            marginLeft: "10px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        {item.likes}
                                    </span>
                                </div> */}
                                {/* <div className="posted_icon1">
                                <FontAwesomeIcon icon={faComment} />
                                <span
                                    style={{
                                        marginLeft: "10px",
                                        fontSize: "15px",
                                    }}
                                >
                                    {item.cmtNumber}
                                </span>
                            </div> */}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default HomePostStatus;
