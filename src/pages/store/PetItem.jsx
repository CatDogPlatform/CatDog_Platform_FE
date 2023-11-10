import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";

function PetItem() {
    const [pets, setPets] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State lưu trữ kết quả tìm kiếm

    const fetchPets = async () => {
        const res = await axios.get(
            "https://petdom-apis.onrender.com/api/pets?search="
        );
        setPets(res.data);
    };

    useEffect(() => {
        fetchPets();
    }, []);

    // Hàm thực hiện tìm kiếm thú cưng dựa trên tên
    const searchPets = () => {
        const results = pets.filter((pet) =>
            pet.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return results;
    };

    return (
        <div className="StoreItem">
            <div className="pets-body">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: "617px",
                        height: "39px",
                        borderRadius: "10px",
                        paddingLeft: "20px",
                        border: "1px solid #d6d6d6",
                    }}
                />

                {/* <button
                    onClick={searchPets}
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
                </button> */}
            </div>
            <div
                className="StoreItem"
                style={{
                    display: "grid",
                    // gridTemplateRows: "repeat(4, minmax(0, 1fr))",
                    columnGap: "20px",
                    gridTemplateColumns: "repeat(3, 1fr)",
                }}
            >
                {searchTerm
                    ? searchPets().map((item) => (
                          <Card
                              key={item._id}
                              sx={{
                                  margin: "50px 0 0px 0",
                                  width: "300px",
                                  boxShadow:
                                      "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
                                  transition: "transform 0.3s",
                                  "&:hover": {
                                      transform: "scale(1.05)",
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
                                          sx={{
                                              textTransform: "uppercase",
                                              color: "#7F8487",
                                          }}
                                      >
                                          Type: {item.petType}
                                      </Typography>
                                  </Stack>
                              </CardContent>

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
                              </div>
                          </Card>
                      ))
                    : pets.map((item) => (
                          <div>
                              <Card
                                  key={item._id}
                                  sx={{
                                      margin: "50px 0 0px 0",
                                      width: "300px",
                                      boxShadow:
                                          "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
                                      transition: "transform 0.3s",
                                      "&:hover": {
                                          transform: "scale(1.05)",
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
                                              sx={{
                                                  textTransform: "uppercase",
                                                  color: "#7F8487",
                                              }}
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
                                                      backgroundColor:
                                                          "#eb5757",
                                                      width: "100px",
                                                      borderRadius: "30px",
                                                      mt: "20px",
                                                      ":hover": {
                                                          backgroundColor:
                                                              "#eb5757",
                                                          opacity: "0.5",
                                                          transition: "0.5s",
                                                      },
                                                  }}
                                              >
                                                  Detail
                                              </Button>
                                          </Link>
                                      </div>
                                  </CardContent>
                              </Card>
                          </div>
                      ))}
            </div>
        </div>
    );
}

export default PetItem;
