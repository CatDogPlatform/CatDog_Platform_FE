import React from "react";
// import { petList } from "../store/ItemList";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PetInfor.scss";
function PetInfor() {
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
  return (
    <div className="pets">
      <div className="pets-head">
        <h3 className="pets-title">Your Personal Pet List </h3>
        <Link to="/petsmanagement">
          <button className="pets-sell">+ Sell</button>
        </Link>
      </div>
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
        {pets &&
          pets.map((item) => (
            <div style={{ margin: "10px 0 50px 0" }}>
              <div className="StoreItem-img">
                <img
                  src={item.images}
                  alt=""
                  style={{
                    border: "1px solid wheat",
                    borderRadius: "8px",
                    width: "242px",
                    height: "214px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p className="item-name" style={{ cursor: "pointer" }}>
                <Link to="/petlistupdate" className="link-name">
                  {item.name}
                </Link>
              </p>
              {/* <p className="item-name" style={{ color: "#0F60DA" }}>
                {item.price}
              </p> */}
              <span style={{ fontSize: "12px", color: "#888484" }}>
                {item.user} - {item.location}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PetInfor;
