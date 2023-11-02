import React from "react"
import { petList } from "../store/ItemList"
import { Link } from "react-router-dom"

function GoodInfor() {
    return (
        <div className="pets">
            <div className="pets-head">
                <h3 className="pets-title">Your Personal Goods List </h3>
                <button className="pets-sell">+ Sell</button>
            </div>
            {/* <div className="pets-body"> */}
            {/* <input
                type="text"
                placeholder="Search"
                style={{
                    width: "617px",
                    height: "39px",
                    borderRadius: "10px",
                    paddingLeft: "20px",
                    border: "1px solid #d6d6d6",
                }}
            /> */}
            {/* <select
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
            </select> */}
            {/* <button
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
            </button> */}
            {/* </div> */}
            <div
                className="StoreItem"
                style={{
                    display: "grid",
                    gridTemplateRows: "repeat(4, minmax(0, 1fr))",
                    columnGap: "1.5rem",
                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                }}
            >
                {/* <PetItem /> */}
                {petList.map((item) => (
                    <div style={{ margin: "10px 0 50px 0" }}>
                        <div className="StoreItem-img">
                            <img src={item.avatar} alt="" />
                        </div>
                        <p className="item-name" style={{ cursor: "pointer" }}>
                            <Link to="/goodslistupdate">{item.name}</Link>
                        </p>
                        <p className="item-name" style={{ color: "#0F60DA" }}>
                            {item.price}
                        </p>
                        <span style={{ fontSize: "12px", color: "#888484" }}>
                            {item.user} - {item.location}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GoodInfor
