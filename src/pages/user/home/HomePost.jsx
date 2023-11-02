import React, { useState } from "react";
import "./HomePost.scss";
import { LuImage } from "react-icons/lu";
import axios from "axios";
const HomePost = () => {
    const [images, setImages] = useState([]);
    const [content, setContent] = useState([]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const newImages = [...images, event.target.result];
                setImages(newImages);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleAddImage = () => {};

    const fileInputRef = React.createRef();

    const handleCreatePost = async () => {
        const res = await axios
            .post(process.env.API_URL + "/posts/", {
                content,
            })
            .then((res) => {
                setContent((prev) => [...prev, res]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="post">
            <div className="post-input">
                <input
                    type="text"
                    name="content"
                    placeholder="Post something"
                />
            </div>
            <hr className="post-custom" />
            <div style={{ display: "flex" }}>
                <div className="post-image" style={{ flex: "1" }}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                        ref={fileInputRef}
                    />
                    <button
                        onClick={handleAddImage}
                        style={{
                            margin: "10px 0px 10px 22px",
                            border: "none",
                            backgroundColor: "white",
                            cursor: "pointer",
                        }}
                    >
                        <LuImage size={30} className="post-icon" />
                    </button>
                    {images.map((image, index) => (
                        <img
                            style={{ marginLeft: "10px" }}
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            width="45"
                            height="45"
                        />
                    ))}
                </div>
                <div style={{ flex: "0.25" }}>
                    <button
                        onClick={handleCreatePost}
                        className="post-draft"
                        style={{
                            backgroundColor: "#eb5757",
                            border: "2px solid #eb5757",
                            color: "white",
                        }}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePost;
