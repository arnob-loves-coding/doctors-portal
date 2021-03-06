import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      this is doctors:{doctors?.length}
      <Container>
        <Grid container spacing={2}>
          {doctors?.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor}></Doctor>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
