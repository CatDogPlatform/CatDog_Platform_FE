import React from "react";
import "./PetStore.scss";
import PetItem from "./PetItem";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function PetStore() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="pets">
      <div className="pets-head">
        <h3 className="pets-title">Marketplace </h3>
        <Link to="/petsmanagement">
          <button className="pets-sell">+ Sell</button>
        </Link>
      </div>
      <div className="pets-body">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          style={{
            width: "617px",
            height: "39px",
            borderRadius: "10px",
            paddingLeft: "20px",
            border: "1px solid #d6d6d6",
          }}
        />

        <button
          onClick={handleChange}
          style={{
            width: "147px",
            height: "37px",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "#eb5757",
            border: "1px solid #eb5757",
            marginLeft: "12px",
            cursor: "pointer",
          }}
        >
          Search now
        </button>
      </div>
      <div className="pets-footer" style={{ marginTop: "50px" }}>
        <PetItem />
      </div>
    </div>
  );
}

export default PetStore;
