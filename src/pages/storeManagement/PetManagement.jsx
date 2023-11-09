import React, { useState } from "react";
import "./PetManagement.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const PetManagement = () => {
    const [image, setImage] = useState(null);
    const userId = "";
    // LẤY USERID TỪ LOCAL STORAGE
    //YOUR CODE HERE

    const [name, setName] = useState([]);
    // STATE CHO NHỮNG THUỘC TÍNH KHÁC
    // YOUR CODE HERE

    const [imageUrl, setImageUrl] = useState([]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setImage(event.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleCreatePet = async () => {
        const res = await axios
            .post("https://petdom-apis.onrender.com/api/pets", {
                userId,
                name,
                imageUrl,
                //NHỮNG THUỘC TÍNH KHÁC
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const fileInputRef = React.createRef();

    const handleAddButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleSelectNewImage = () => {
        fileInputRef.current.value = ""; // Xóa giá trị đã chọn trước đó
        setImage(null); // Đặt giá trị hình ảnh thành null
    };

    return (
        <div className="pets_management">
            <div className="pets_title">
                <h1>Pet Management</h1>
            </div>
            <div className="image">
                <div className="image-input">Image</div>
                <input type="text" onChange={(e) => setImageUrl(e.target.value)} style={{ display: "none" }} ref={fileInputRef} />
                {/* <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                />
                {image ? (
                    <div style={{ margin: "10px 0px 10px 77px" }}>
                        <img
                            style={{
                                width: "694px",
                                height: "200px",
                                borderRadius: "10px",
                                border: "2px solid #828282",
                                cursor: "pointer",
                                // objectFit: "cover",
                                backgroundImage: "cover",
                            }}
                            src={image}
                            alt={`Uploaded Image`}
                        />
                        <br />
                        <div className="choose-image">
                            <button
                                style={{
                                    color: "#5E5E5E",
                                    padding: "10px 22px",
                                    textTransform: "none",
                                }}
                                onClick={handleSelectNewImage}
                                className="select-new-image-button"
                            >
                                Choose Again
                            </button>
                        </div>
                    </div>
                ) : (
                    <button onClick={handleAddButtonClick} className="buttons">
                        <FontAwesomeIcon icon={faImages} />
                    </button>
                )} */}
            </div>
            <div className="pets_management_header">
                <div className="pets_management_cc">
                    <div className="input">Name</div>
                    <div className="input">Species</div>
                    <div className="input">Description</div>
                    <div className="input">Weight</div>
                    <div className="input">Size</div>
                    <div className="input">Date of Birth</div>
                    <div className="input">Gender</div>
                </div>

                <div className="input_value">
                    <br />
                    <input value="ok2" />
                    <br />
                    <input value="ok3" />
                    <br />
                    <input value="ok5" />
                    <br />
                    <input value="ok5" />
                    <br />
                    <input value="ok5" />
                    <br />
                    <input value="ok5" />
                    <br />
                    <select
                        style={{
                            margin: "0 25px 14px 4px",
                            height: "44px",
                            borderRadius: "10px",
                            border: "1px solid black",
                            width: "300px",
                            padding: "10px",
                            color: "grey",
                        }}
                    >
                        <option value="gender_pick">ss</option>
                        <option value="gender_pick">s1</option>
                        <option value="gender_pick">s2</option>
                    </select>
                </div>
            </div>
            <div className="subtmit">
                <button
                    onClick={handleCreatePet}
                    className="submit-button"
                    style={{
                        marginLeft: "450px",
                        marginTop: "10px",
                        marginBottom: "30px",
                        padding: "18px 80px",
                        borderRadius: "20px",
                        cursor: "pointer",
                        backgroundColor: "#EB5757",
                        fontSize: "15px",
                        border: "none",
                        color: "white",
                        fontWeight: "300",
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default PetManagement;
