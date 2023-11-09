import React, { useState } from "react";
import "./PetInfor.scss";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import PetDelete from "./PetDeleteButton";
function PetInfor() {
  const [pets, setPets] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletePetId, setDeletePetId] = useState(null);

  const fetchPets = async () => {
    const res = await axios.get(
      "https://petdom-apis.onrender.com/api/pets?search="
    );
    console.log(res);
    setPets(res.data);
  };
  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setDeletePetId(null);
  };

  const handleDeleteConfirm = async () => {
    // Thực hiện gọi API xóa pet với `deletePetId`
    try {
      await axios.delete(
        `https://petdom-apis.onrender.com/api/pets/${deletePetId}`
      );
      setDeleteDialogOpen(false);
      // Sau khi xóa thành công, bạn có thể cập nhật danh sách pet bằng cách gọi lại `fetchPets` hoặc các hành động khác
    } catch (error) {
      console.error("Lỗi khi xóa pet: ", error);
    }
  };

  React.useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div
      className="StoreItem"
      style={{
        display: "grid",
        // gridTemplateRows: "repeat(4, minmax(0, 1fr))",
        columnGap: "20px",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {pets.map((item) => (
        <Card
          key={item.id}
          sx={{
            margin: "50px 0 0px 0",
            width: "300px",
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
                justifyContent: "space-between",
              }}
            >
              <Link to={`/update-pet/${item._id}`}>
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
                  Update
                </Button>
              </Link>

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
                onClick={() => {
                  setDeletePetId(item._id);
                  console.log(item._id);
                  setDeleteDialogOpen(true);
                }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      <PetDelete
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={() => handleDeleteConfirm(deletePetId)} // Truyền ID vào hàm xác nhận
      />
    </div>
  );
}

export default PetInfor;
