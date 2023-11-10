import React from "react"
import "./GoodsStore.scss"
import StoreItem from "./StoreItem"


function GoodStore() {
    
    return (
        <div className="goods">
            <div className="goods-head">
                <h3 className="goods-title">Marketplace </h3>
                <button className="goods-sell">+ Sell</button>
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
                <select
                    name=""
                    id=""
                    style={{
                        marginLeft: "15px",
                        height: "39px",
                        borderRadius: "10px",
                        border: "1px solid #d6d6d6",
                        width: "160px",
                        padding: "10px",
                        color: "grey",
                    }}
                >
                    <option value="1">All goods</option>
                    <option value="2">goods 1</option>
                    <option value="3">goods 2</option>
                </select>
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
    )
}

export default GoodStore
