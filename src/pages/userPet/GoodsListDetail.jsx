import React, { useState } from "react"
import "./GoodsListDetail.scss"
import { petList } from "../store/ItemList"
const GoodsListDetail = () => {
    // const [image, setImage] = useState(null)

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0]

    //     if (file) {
    //         const reader = new FileReader()

    //         reader.onload = (event) => {
    //             setImage(event.target.result)
    //         }

    //         reader.readAsDataURL(file)
    //     }
    // }

    // const fileInputRef = React.createRef()

    // const handleAddButtonClick = () => {
    //     fileInputRef.current.click()
    // }

    // const handleSelectNewImage = () => {
    //     fileInputRef.current.value = "" // Xóa giá trị đã chọn trước đó
    //     setImage(null) // Đặt giá trị hình ảnh thành null
    // }

    return (
        <div className="pets_management">
            <div className="pets_title">
                <h1>Goods List Information</h1>
            </div>
            <div className="image">
                {petList.map((item) => (
                    <div className="image-input">
                        <img
                            style={{
                                width: "694px",
                                height: "200px",
                                borderRadius: "10px",
                                border: "2px solid #828282",
                                // cursor: "pointer",
                                // objectFit: "cover",
                                backgroundImage: "cover",
                            }}
                            src={item.avatar}
                            alt="Pet Avatar"
                        ></img>
                    </div>
                ))}

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

                    <div className="input">Description</div>
                </div>

                <div className="input_value">
                    <br />
                    <input value="ok2" />
                    <br />
                    <input value="ok3" />
                    <br />
                </div>
            </div>
            <div className="subtmit" style={{ display: "flex" }}>
                <button
                    className="submit-button"
                    style={{
                        marginLeft: "260px",
                        marginTop: "10px",
                        marginBottom: "30px",
                        padding: "18px 80px",
                        borderRadius: "20px",
                        cursor: "pointer",
                        backgroundColor: "green",
                        fontSize: "15px",
                        border: "none",
                        color: "white",
                        fontWeight: "300",
                    }}
                >
                    Update
                </button>
                <button
                    className="submit-button"
                    style={{
                        marginLeft: "100px",
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
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default GoodsListDetail
