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

            <div className="pets-footer" style={{ marginTop: "50px" }}>
                <PetItem />
            </div>
        </div>
    );
}

export default PetStore;
