import React, { useState } from "react";
import "./StoreItem.scss";
import { ItemList } from "./ItemList";
import axios from "axios";
import { GoodDetailModal } from "./GoodDetailModal";
function StoreItem() {
    const [goods, setGoods] = React.useState([]);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const handleCloseDetailModal = () => {
        setIsDetailModalOpen(false);
    };

    const handleDetailClick = (item) => {
        setSelectedCandidate(item);
        setIsDetailModalOpen(true);
    };
    const fetchGoods = async () => {
        const res = await axios.get("https://petdom-apis.onrender.com/api/goods?search=");
        setGoods(res.data);
    };

    React.useEffect(() => {
        fetchGoods();
    }, []);

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
            {goods &&
                goods.map((item) => (
                    <div style={{ margin: "10px 0 50px 0" }}>
                        <img src={item.images} alt="" />
                        <p className="item-name" onClick={() => handleDetailClick(item)} style={{ cursor: "pointer" }}>
                            {item.name}
                        </p>
                        <p className="item-name" style={{ color: "#0F60DA" }}>
                            {item.price}
                        </p>
                        <span style={{ fontSize: "12px", color: "#888484" }}>{item?.user?.fullname}</span>
                    </div>
                ))}
            <GoodDetailModal isOpen={isDetailModalOpen} handleCloseDetailModal={handleCloseDetailModal} item={selectedCandidate} />
        </div>
    );
}

export default StoreItem;
