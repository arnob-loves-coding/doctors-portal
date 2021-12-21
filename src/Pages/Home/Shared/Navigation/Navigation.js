import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home">Doctors Portal</Link>
          </Typography>
          <Link to="/appointment">Appointment</Link>&nbsp;&nbsp;&nbsp;
          {user?.email ? (
            <NavLink to="/dashboard" style={{ marginRight: "10px" }}>
              Dashboard
            </NavLink>
          ) : (
            ""
          )}
          {user?.email ? (
            <button onClick={logOut}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
