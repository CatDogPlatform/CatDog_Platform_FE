import React from "react";
import "./StoreItem.scss";
import { ItemList } from "./ItemList";
import axios from "axios";
function StoreItem() {
    const [goods, setGoods] = React.useState([]);

    const fetchPets = async () => {
        const res = await axios.get(
            "https://petdom-apis.onrender.com/api/goods?search="
        );
        setGoods(res.data);
    };

    React.useEffect(() => {
        fetchPets();
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
                        <p className="item-name">{item.name}</p>
                        <p className="item-name" style={{ color: "#0F60DA" }}>
                            {item.price}
                        </p>
                        <span style={{ fontSize: "12px", color: "#888484" }}>
                            {item.user.fullname}
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default StoreItem;
