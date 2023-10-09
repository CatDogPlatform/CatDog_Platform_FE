import React, { useState } from "react"
import "./HomePost.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"

const HomePost = () => {
    const [images, setImages] = useState([])

    const handleImageChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.onload = (event) => {
                const newImages = [...images, event.target.result]
                setImages(newImages)
            }

            reader.readAsDataURL(file)
        }
    }

    const fileInputRef = React.createRef()

    const handleAddButtonClick = () => {
        fileInputRef.current.click()
    }

    return (
        <div className="post">
            <div className="post-input">
                <input type="text" placeholder="Post something" />
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
                        onClick={handleAddButtonClick}
                        style={{
                            margin: "10px 0px 10px 22px",
                            border: "none",
                            backgroundColor: "white",
                            cursor: "pointer",
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faImage}
                            style={{
                                height: "27px",
                                opacity: 0.3,
                            }}
                        />
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
                <div style={{ flex: "0.6" }}>
                    <button
                        className="post-draft"
                        style={{
                            backgroundColor: "white",
                            border: "2px solid #bdbdbd",
                            color: "#8f8f8f",
                        }}
                    >
                        Draft
                    </button>
                    <button
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
    )
}

export default HomePost
