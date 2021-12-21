import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import useAuth from "../../../../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ open, handleClose, booking, date, setSuccess }) => {
  const { user } = useAuth();
  const primaryInfo = { name: user.displayName, email: user.email, phone: "" };
  const [info, setInfo] = useState(primaryInfo);
  const { name, time, price } = booking;
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("data send");
    const appointment = {
      ...info,
      time,
      price,
      serviceName: name,
      date: date.toDateString(),
    };

    fetch("http://localhost:5000/appointments", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          handleClose();
        }
      });
  };
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...info };
    newInfo[field] = value;
    setInfo(newInfo);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              disabled
              required
              id="outlined-required"
              defaultValue={time}
              style={{ width: "100%", marginBottom: "10px", marginTop: "10px" }}
            />
            <TextField
              id="outlined-required"
              name="name"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <TextField
              id="outlined-required"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <TextField
              required
              id="outlined-required"
              name="phone"
              onBlur={handleOnBlur}
              placeholder="Your Phone"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <TextField
              disabled
              required
              id="outlined-required"
              defaultValue={date.toDateString()}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;
