import React from "react";
import "./GoodsStore.scss";
import StoreItem from "./StoreItem";
import { Link } from "react-router-dom";

function GoodStore() {
    return (
        <div className="goods">
            <div className="goods-head">
                <h3 className="goods-title">Marketplace </h3>
                <Link to="/goodsmanagement">
                    <button className="goods-sell">+ Sell</button>
                </Link>
            </div>
            <div className="goods-body">
                <input
                    type="text"
                    placeholder="Search"
                    style={{
                        width: "617px",
                        height: "39px",
                        borderRadius: "10px",
                        paddingLeft: "20px",
                        border: "1px solid #d6d6d6",
                    }}
                />

                <button
                    style={{
                        width: "147px",
                        height: "37px",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        color: "#eb5757",
                        border: "1px solid #eb5757",
                        marginLeft: "12px",
                    }}
                >
                    Search now
                </button>
            </div>
            <div className="goods-footer" style={{ marginTop: "50px" }}>
                <StoreItem />
            </div>
        </div>
    );
}

export default GoodStore;
