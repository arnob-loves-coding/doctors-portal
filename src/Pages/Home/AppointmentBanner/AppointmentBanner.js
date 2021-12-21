import React from "react";
import Box from "@mui/material/Box";
import doctor from "./../../../images/doctor.png";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import bg from "./../../../images/appointment-bg.png";
const AppointmentBanner = () => {
  return (
    <div>
      <Box
        style={{
          background: `url(${bg})`,
          marginTop: "150px",
          backgroundColor: "rgba(45,58,74,.5)",
          backgroundBlendMode: "darken",
        }}
        sx={{ flexGrow: 1 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={doctor}
              style={{ width: "400px", marginTop: "-110px" }}
            ></img>
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: "30px" }}>
            <Typography variant="h6">Appointment</Typography>
            <Typography
              variant="h3"
              style={{ textAlign: "", color: "white", marginTop: "20px" }}
            >
              Make an apppointment today
            </Typography>
            <Button
              variant="outlined"
              style={{
                marginTop: "40px",
                color: "white",
                border: "3px solid white",
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AppointmentBanner;
