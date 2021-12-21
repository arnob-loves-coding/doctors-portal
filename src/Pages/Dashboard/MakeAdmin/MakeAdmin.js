import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "put",
      headers: {
        auth: `bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("admin made successfully");
        } else {
          alert("there is a hidden plm making admin");
        }
      });
  };
  return (
    <div>
      Make an admin
      <form onSubmit={handleAdminSubmit}>
        <TextField
          name="email"
          type="email"
          label="email"
          variant="standard"
          onBlur={handleOnBlur}
        />
        <br />
        <Button type="submit" variant="outlined" style={{ marginTop: "20px" }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
