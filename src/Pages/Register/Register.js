import { Container, Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Navigation from "../Home/Shared/Navigation/Navigation";
import login from "./../../images/login.png";
import TextField from "@mui/material/TextField";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const Register = () => {
  const [data, setData] = useState({});
  const { user, registerUser, isLoading, error } = useAuth();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.password2) {
      alert("password didn't match");
    }
    registerUser(data.email, data.password, data.name, history);
  };
  const handleonBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[field] = value;
    setData(newData);
  };
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              style={{ marginBottom: "10px", marginTop: "50px" }}
            >
              Register
            </Typography>
            {!isLoading && (
              <form onSubmit={handleSubmit}>
                <TextField
                  id="standard-basic"
                  label="Your name"
                  variant="standard"
                  style={{ width: "100%", marginBottom: "20px" }}
                  name="name"
                  onBlur={handleonBlur}
                  type="text"
                />
                <TextField
                  id="standard-basic"
                  label="Your email"
                  variant="standard"
                  style={{ width: "100%", marginBottom: "20px" }}
                  name="email"
                  onBlur={handleonBlur}
                  type="email"
                />
                <br />
                <TextField
                  id="standard-basic"
                  label="Your Password"
                  variant="standard"
                  style={{ width: "100%", marginBottom: "30px" }}
                  name="password"
                  onBlur={handleonBlur}
                  type="password"
                />
                <TextField
                  id="standard-basic"
                  label="Re-type Your Password"
                  variant="standard"
                  style={{ width: "100%", marginBottom: "30px" }}
                  name="password2"
                  onBlur={handleonBlur}
                  type="password"
                />
                <NavLink to="/login">
                  <Button variant="text">Already an user? Please Login</Button>
                </NavLink>
                <Button
                  variant="contained"
                  style={{ width: "100%" }}
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user.email && (
              <Alert severity="success">
                This is a success alert — check it out!
              </Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={login} style={{ width: "100%" }}></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
