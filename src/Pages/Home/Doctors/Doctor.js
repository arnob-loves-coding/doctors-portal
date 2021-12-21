import { Grid } from "@mui/material";
import React from "react";

const Doctor = ({ doctor }) => {
  const { name, email, image } = doctor;
  return (
    <Grid item xs="12" sm="4" md="6">
      <h3>Name: {name}</h3>
    </Grid>
  );
};

export default Doctor;
