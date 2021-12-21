import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "./BookingModal/BookingModal";

const Booking = ({ booking, date, setSuccess }) => {
  const { name, time, space, price } = booking;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3}>
          <Typography variant="h5">{name}</Typography>
          <Typography
            variant="h5"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            {time}
          </Typography>
          <Typography
            variant="h5"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Price: ${price}
          </Typography>
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            {space} spaces available
          </Typography>
          <Button
            variant="outlined"
            style={{ marginTop: "20px", marginBottom: "20px" }}
            onClick={handleOpen}
          >
            Book appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        open={open}
        handleClose={handleClose}
        booking={booking}
        date={date}
        setSuccess={setSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
