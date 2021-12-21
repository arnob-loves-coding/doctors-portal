import { Container, Grid } from "@mui/material";
import React from "react";
import Calender from "../../Home/Shared/Calender";
import chair from "./../../../images/chair.png";

const AvailableAppointment = ({ date, setDate }) => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={chair} style={{ width: "100%" }}></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
