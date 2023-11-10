import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import "./PetDetailID.scss";
import PetDetailPopup from "./PetDetailPopup";
function PetDetail() {
    const { petId } = useParams();
    const [pet, setPet] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const openModal = (message) => {
        setPopupMessage(message);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setPopupMessage("");
    };

    const fetchPet = async () => {
        try {
            const response = await axios.get(`https://petdom-apis.onrender.com/api/pets/${petId}`);
            setPet(response.data);
        } catch (error) {
            console.error("Lỗi khi tải thông tin con thú cưng: ", error);
        }
    };

    useEffect(() => {
        fetchPet();
    }, [petId]);
    const handlePayClick = (item) => {
        openModal(`Bạn muốn chọn ${item.name} để tiến hành trao đổi?`);
    };

    return (
        <div>
            {pet ? (
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={7}>
                        <div className="pet-image">
                            <img src={pet.images[0]} alt={pet.name} style={{ borderRadius: "20px" }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={5} sx={{ marginTop: "40px" }}>
                        <h2 style={{ fontWeight: "900", fontFamily: "'Coiny', cursive", fontSize: "40px" }}>{pet.name}</h2>
                        <p style={{ fontWeight: "700", color: "#001952" }}>
                            Type :{" "}
                            <span
                                style={{
                                    padding: "5px",
                                    borderRadius: "5px",
                                    color: "#767676",
                                }}
                            >
                                {pet.petType}
                            </span>
                        </p>

                        <p style={{ fontWeight: "700", color: "#001952" }}>
                            Price : <span style={{ padding: "3px", color: "#767676" }}>{pet.price} VNĐ</span>
                        </p>
                        <p style={{ fontWeight: "700", color: "#001952" }}>
                            Description : <span style={{ padding: "3px", color: "#767676" }}>{pet.description}</span>
                        </p>
                        <p style={{ fontWeight: "700", color: "#001952" }}>
                            Status : <span style={{ padding: "3px", color: "green" }}>{pet.status}</span>
                        </p>

                        <button
                            className="custom-button"
                            style={{
                                color: "white",
                                padding: "15px 80px",
                                borderRadius: "50px",
                                border: "none",
                                backgroundColor: "#eb5757",
                                cursor: "pointer",
                                margin: "50px 0px 20px 0px",
                            }}
                            onClick={() => handlePayClick(pet)}
                        >
                            Request Exchange
                        </button>
                    </Grid>
                </Grid>
            ) : (
                <p>Loading...</p>
            )}
            <PetDetailPopup isOpen={showModal} message={popupMessage} onClose={closeModal} />
        </div>
    );
}

export default PetDetail;
