import React from "react"
import "./StoreItem.scss"
import { ItemList } from "./ItemList"

function StoreItem() {
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
            {ItemList.map((item) => (
                <div style={{ margin: "10px 0 50px 0" }}>
                    <div className="StoreItem-img">
                        <img src={item.avatar} alt="" />
                    </div>
                    <p className="item-name">{item.name}</p>
                    <p className="item-name" style={{ color: "#0F60DA" }}>
                        {item.price}
                    </p>
                    <span style={{ fontSize: "12px", color: "#888484" }}>
                        {item.user} - {item.location}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default StoreItem
