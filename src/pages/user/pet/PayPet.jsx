import React, { useState, useEffect } from "react";
import axios from "axios";
// import PetDetailPopup from "./PetDetailID"; // Import thành phần Pop-up

import "../../store/PetItem.scss";

function Paypet() {
  const [pets, setPets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const openModal = (message) => {
    setPopupMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPopupMessage("");
  };
  const fetchPets = async () => {
    try {
      const res = await axios.get(
        "https://petdom-apis.onrender.com/api/pets?search="
      );
      setPets(res.data);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu: ", error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  // const handlePayClick = (item) => {
  //   openModal(`Bạn muốn chọn con ${item.name} để trao đổi.`);
  // };

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
      {pets.map((item) => (
        <div key={item.id} style={{ margin: "10px 0 50px 0" }}>
          <img
            src={item.images}
            alt=""
            style={{
              border: "1px solid wheat",
              borderRadius: "8px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <p
            className="item-name"
            style={{
              cursor: "pointer",
              display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // margin: "15px 55px 10px 15px",
              fontSize: "17px",
              fontWeight: "800",
            }}
          >
            {item.name}
          </p>
          <p className="item-name" style={{ color: "#0F60DA" }}>
            {item.price}
          </p>
          <span style={{ fontSize: "12px", color: "#888484" }}>
            {item?.user?.fullname}
          </span>
          <button
            style={{
              padding: "15px 100px",
              borderRadius: "100px",
              border: "none",
              backgroundColor: "#eb5757",
              cursor: "pointer",
            }}
            // onClick={() => handlePayClick(item)}
          >
            Pay
          </button>
        </div>
      ))}

      {/* <PetDetailPopup
        isOpen={showModal}
        message={popupMessage}
        onClose={closeModal}
      /> */}
    </div>
  );
}

export default Paypet;
