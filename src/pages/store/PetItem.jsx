import React from "react";
import "./PetItem.scss";
import { petList } from "./ItemList";
import { useState } from "react";
import { DetailModal } from "./DetailModal";
import axios from "axios";
function PetItem() {
    const [pets, setPets] = React.useState([]);

    const fetchPets = async () => {
        const res = await axios.get(
            "https://petdom-apis.onrender.com/api/pets?search="
        );
        console.log(res);
        setPets(res.data);
    };

    React.useEffect(() => {
        fetchPets();
    }, []);

    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const handleCloseDetailModal = () => {
        setIsDetailModalOpen(false);
    };

    const handleDetailClick = (item) => {
        setSelectedCandidate(item);
        setIsDetailModalOpen(true);
    };
    return (
        <div
            className="StoreItem"
            style={{
                display: "grid",
                gridTemplateRows: "repeat(4, minmax(0, 1fr))",
                columnGap: "1.5rem",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            }}
        >
            {pets &&
                pets.map((item) => (
                    <div style={{ margin: "10px 0 50px 0" }}>
                        <p
                            className="item-name"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDetailClick(item)}
                        >
                            {item.name}
                        </p>
                        <p className="item-name" style={{ color: "#0F60DA" }}>
                            {item.price}
                        </p>
                        <span style={{ fontSize: "12px", color: "#888484" }}>
                            {item?.user?.fullname}
                        </span>
                    </div>
                ))}
            <DetailModal
                isOpen={isDetailModalOpen}
                handleCloseDetailModal={handleCloseDetailModal}
                item={selectedCandidate}
            />
        </div>
    );
}

export default PetItem;
