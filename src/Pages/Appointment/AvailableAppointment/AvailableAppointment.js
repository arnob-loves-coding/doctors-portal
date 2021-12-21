import { Alert, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Booking from "./Booking/Booking";

const AvailableAppointment = ({ date }) => {
  const [success, setSuccess] = useState(false);
  const bookings = [
    {
      id: 1,
      name: "Teeth Orthodonics",
      time: "08.00 AM-09.00 AM",
      price: 20,
      space: 10,
    },
    {
      id: 2,
      name: "Cosmetic Dentistry",
      time: "09.00 AM-10.00 AM",
      price: 19,
      space: 8,
    },
    {
      id: 3,
      name: "Teeth Cleaning",
      time: "10.00 AM-11.00 AM",
      price: 35,
      space: 9,
    },
    {
      id: 4,
      name: "Pediatric Dental",
      time: "11.00 AM-12.00 AM",
      price: 17,
      space: 5,
    },

    {
      id: 5,
      name: "Cavity Protection",
      time: "06.00 PM-07.00 PM",
      price: 18,
      space: 6,
    },
    {
      id: 6,
      name: "Oral Surgery",
      time: "07.00 PM-0.00 PM",
      price: 25,
      space: 11,
    },
  ];
  return (
    <Container>
      <h1>Available appointments on {date.toDateString()}</h1>
      {success && (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
      <Grid container spacing={2} style={{ marginTop: "60px" }}>
        {bookings.map((booking) => (
          <Booking
            booking={booking}
            key={booking.id}
            date={date}
            setSuccess={setSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
