import React, { useState } from "react";
import "./PetInfor.scss";
// import { petList } from "./ItemList";
// import { DetailModal } from "./DetailModal";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

function PetInfor() {
  const [pets, setPets] = useState([]);

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

  // API fake
  const Items = [
    {
      _id: "1",
      imgUrl:
        "https://matpetfamily.com/wp-content/uploads/2020/04/7F9793A2-F45D-441C-AFAA-C11F2D918914-300x300.jpeg",
      PetName: "GOLDEN ĐỰC XINH",
      PetType: "DOG",
    },
    {
      _id: "2",
      imgUrl:
        "https://matpetfamily.com/wp-content/uploads/2020/04/7F9793A2-F45D-441C-AFAA-C11F2D918914-300x300.jpeg",
      PetName: "MÈO XÁM TAI CỤP XINH",
      PetType: "CAT",
    },
    {
      _id: "3",
      imgUrl:
        "https://matpetfamily.com/wp-content/uploads/2020/04/7F9793A2-F45D-441C-AFAA-C11F2D918914-300x300.jpeg",
      PetName: "MÈO ANH LÔNG NGẮN ",
      PetType: "CAT",
    },
    {
      _id: "4",
      imgUrl:
        "https://matpetfamily.com/wp-content/uploads/2020/04/7F9793A2-F45D-441C-AFAA-C11F2D918914-300x300.jpeg",
      PetName: "ALASKA HỒNG PHẤN",
      PetType: "DOG",
    },
    {
      _id: "5",
      imgUrl:
        "https://matpetfamily.com/wp-content/uploads/2020/04/7F9793A2-F45D-441C-AFAA-C11F2D918914-300x300.jpeg",
      PetName: "CORGI Ú CƯNG",
      PetType: "DOG",
    },
  ];

  // const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  // const [selectedCandidate, setSelectedCandidate] = useState(null);

  // const handleCloseDetailModal = () => {
  //   setIsDetailModalOpen(false);
  // };

  // const handleDetailClick = (item) => {
  //   setSelectedCandidate(item);
  //   setIsDetailModalOpen(true);
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
        <Card
          key={item.id}
          sx={{
            margin: "10px 0 50px 0",
            boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
            transition: "transform 0.3s", // Thêm hiệu ứng chuyển đổi
            "&:hover": {
              transform: "scale(1.05)", // Khi hover, thay đổi tỷ lệ
            },
            cursor: "pointer",
          }}
        >
          <CardMedia
            component="img"
            alt={item.name}
            height="200"
            image={item.images}
            // sx={{
            //   ":hover": {
            //     transform: "scale(1.1)",
            //   },
            // }}
          />
          <CardContent>
            <Stack spacing={2}>
              <Typography
                gutterBottom
                fontSize="14px"
                sx={{
                  color: "#eb5757",
                }}
              >
                id: {item._id}
              </Typography>
              <Typography
                gutterBottom
                fontSize="18px"
                fontWeight="bold"
                sx={{
                  ":hover": {
                    color: "#eb5757",
                    opacity: 0.5,
                    transition: "0.5s",
                  },
                }}
              >
                {item.name}
              </Typography>
              <Typography
                gutterBottom
                fontSize="16px"
                fontWeight={400}
                sx={{ textTransform: "uppercase", color: "#7F8487" }}
              >
                Type: {item.petType}
              </Typography>
            </Stack>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to={`/pet/${item._id}`}>
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#eb5757",
                    width: "100px",
                    borderRadius: "30px",
                    mt: "20px",
                    ":hover": {
                      backgroundColor: "#eb5757",
                      opacity: "0.5",
                      transition: "0.5s",
                    },
                  }}
                >
                  Detail
                </Button>
              </Link>
              <Link to={`/pet/${item._id}`}>
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#eb5757",
                    width: "100px",
                    borderRadius: "30px",
                    mt: "20px",
                    ":hover": {
                      backgroundColor: "#eb5757",
                      opacity: "0.5",
                      transition: "0.5s",
                    },
                  }}
                >
                  Delete
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* <DetailModal
        isOpen={isDetailModalOpen}
        handleCloseDetailModal={handleCloseDetailModal}
        item={selectedCandidate}
      /> */}
    </div>
  );
}

export default PetInfor;
