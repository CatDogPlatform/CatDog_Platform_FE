import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function PetUpdateForm() {
    const { petId } = useParams();
    const navigate = useNavigate(); // Sử dụng useNavigate thay cho history
    const [pet, setPet] = useState({
        name: "",
        species: "",
        description: "",
        weight: "",
        size: "",
        dateOfBirth: "",
        gender: "gender_pick",
    });

    useEffect(() => {
        // Gửi yêu cầu API để lấy thông tin pet dựa trên petId và đặt nó vào trạng thái pet
        axios
            .get(`https://petdom-apis.onrender.com/api/pets/${petId}`)
            .then((response) => {
                setPet(response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi tải thông tin Pet: ", error);
            });
    }, [petId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPet({
            ...pet,
            [name]: value,
        });
    };
    const [success, setSuccess] = useState(false); // Thêm trạng thái success
    const handleCloseSnackbar = () => {
        setSuccess(false);
    };

    const handleUpdateClick = () => {
        // Gửi yêu cầu API để cập nhật thông tin pet bằng petId
        axios
            .put(`https://petdom-apis.onrender.com/api/pets/${petId}`, pet)
            .then(() => {
                // Sử dụng navigate để chuyển hướng về trang thông tin chi tiết pet sau khi cập nhật
                setTimeout(setSuccess(true), 5000);

                navigate("/userpetlist");
            })
            .catch((error) => {
                console.error("Lỗi khi cập nhật thông tin Pet: ", error);
            });
    };

    return (
        <div className="pets_management">
            <div className="pets_title">
                <h1>Pet Update Form</h1>
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
                    <input name="name" value={pet.name} onChange={handleInputChange} required />
                    <input name="species" value={pet.species} onChange={handleInputChange} required />
                    <input name="description" value={pet.description} onChange={handleInputChange} />
                    <input name="weight" value={pet.weight} onChange={handleInputChange} />
                    <input name="size" value={pet.size} onChange={handleInputChange} />
                    <input name="dateOfBirth" value={pet.dateOfBirth} onChange={handleInputChange} />
                    <select
                        name="gender"
                        value={pet.gender}
                        onChange={handleInputChange}
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
                        <option value="gender_pick">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
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
                    onClick={handleUpdateClick}
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
            <Snackbar
                open={success}
                autoHideDuration={800}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                onClose={handleCloseSnackbar}
            >
                <Alert severity="success" sx={{ width: "100%" }}>
                    Thông báo đã được gửi thành công!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default PetUpdateForm;
