import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import flu from "./../../../images/fluoride.png";
import whi from "./../../../images/whitening.png";
import cav from "./../../../images/cavity.png";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride treatement",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat assumenda ex, facilis consequatur culpa, magni nemo fugiat corporis molestiae excepturi, odio earum delectus hic",
      image: flu,
    },
    {
      id: 2,
      name: "Cavity Falling",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat assumenda ex, facilis consequatur culpa, magni nemo fugiat corporis molestiae excepturi, odio earum delectus hic",
      image: cav,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat assumenda ex, facilis consequatur culpa, magni nemo fugiat corporis molestiae excepturi, odio earum delectus hic",
      image: whi,
    },
  ];
  return (
    <div style={{ marginTop: "100px" }}>
      <h3 style={{ color: "darkturquoise" }}>Our services</h3>
      <h1 style={{ textAlign: "center", color: "" }}>Services We Provide</h1>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "40px" }}>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <Grid item xs={4} sm={4} md={4}>
                <Service service={service} key={service.id}></Service>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Services;
