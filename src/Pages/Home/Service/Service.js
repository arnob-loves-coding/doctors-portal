import { CardMedia, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Service = (props) => {
  const { name, image, des } = props.service;
  return (
    <div>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "80px", margin: "0 auto" }}
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Service;
