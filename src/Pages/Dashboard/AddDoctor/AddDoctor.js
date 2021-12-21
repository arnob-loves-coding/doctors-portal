import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("http://localhost:5000/doctors", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("posted successfully");
        }
      });
  };
  return (
    <div>
      <h3>Add a doctor</h3>
      <form>
        <TextField
          required
          type="text"
          style={{ width: "50%" }}
          onChange={(e) => setName(e.target.value)}
          id="standard-basic"
          label="name"
          variant="standard"
        />
        <br />
        <TextField
          required
          type="email"
          style={{ width: "50%" }}
          onChange={(e) => setEmail(e.target.value)}
          id="standard-basic"
          label="email"
          variant="standard"
        />
        <br />

        <Input
          style={{ marginTop: "30px" }}
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button
          variant="contained"
          component="span"
          type="submit"
          style={{ marginTop: "30px" }}
          onClick={handleSubmit}
        >
          Upload
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
