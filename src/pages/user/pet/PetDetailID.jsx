import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import "./PetDetailID.scss";

function PetDetail() {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);

  const fetchPet = async () => {
    try {
      const response = await axios.get(
        `https://petdom-apis.onrender.com/api/pets/${petId}`
      );
      setPet(response.data);
    } catch (error) {
      console.error("Lỗi khi tải thông tin con thú cưng: ", error);
    }
  };

  useEffect(() => {
    fetchPet();
  }, [petId]);

  return (
    <div>
      {pet ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <div className="pet-image">
              <img src={pet.images[0]} alt={pet.name} />
            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card>
              <CardContent>
                <h2>{pet.name}</h2>
                <p>Type: {pet.petType}</p>
                <p>Description: {pet.description}</p>
                <p>Price: {pet.price}</p>
                <p>Status: {pet.status}</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PetDetail;
