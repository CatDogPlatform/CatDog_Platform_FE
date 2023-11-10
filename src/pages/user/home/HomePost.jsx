import React, { useState } from "react";
import "./HomePost.scss";
import { LuImage } from "react-icons/lu";
import axios from "axios";
const HomePost = () => {
    const userId = "";
    // LẤY USERID TỪ LOCAL STORAGE
    //YOUR CODE HERE

    const [images, setImages] = useState([]);
    const [content, setContent] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    const [uploadImg, setUploadedImage] = useState([]);
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

    const handleAddImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleUpload = async () => {
        if (images) {
            const formData = new FormData();
            formData.append("file", images);

            try {
                // Tải ảnh lên Cloudinary
                const cloudinaryResponse = await fetch("https://api.cloudinary.com/v1_1/dzqqksb9a/image/upload?upload_preset=CatDogPlatform", {
                    method: "POST",
                    body: formData,
                });
                const cloudinaryData = await cloudinaryResponse.json();

                console.log("Upload response:", cloudinaryData);

                // Lấy URL an toàn từ Cloudinary
                const uploadedImageUrl = cloudinaryData.secure_url;

                // Gửi dữ liệu cùng với URL ảnh lên API
                const uploadData = {
                    userId: "654d1ab1cbbaa80c1338a426",
                    content: content,
                    imageUrl: uploadedImageUrl, // Sử dụng URL ảnh từ Cloudinary
                };

                console.log("dataupload", uploadData);

                const apiResponse = await axios.post("https://petdom-apis.onrender.com/api/posts/", uploadData);

                const responseData = await apiResponse.json();
                console.log("API response:", responseData);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    const fileInputRef = React.createRef();

    const handleCreatePost = async () => {
        handleUpload();
        // const res = await axios
        //     .post("https://petdom-apis.onrender.com/api/posts/", {
        //         userId,
        //         content,
        //         imageUrl,
        //     })
        //     .then((res) => {
        //         setContent((prev) => [...prev, res]);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    return (
        <div className="post">
            <div className="post-input">
                <input type="text" name="content" placeholder="Post something" />
                <input type="text" name="imageUrl" placeholder="URL image" />
            </div>
            <hr className="post-custom" />
            <div style={{ display: "flex" }}>
                <div className="post-image" style={{ flex: "1" }}>
                    <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} ref={fileInputRef} />

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
                        <img style={{ marginLeft: "10px" }} key={index} src={image} alt={`Image ${index + 1}`} width="45" height="45" />
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
