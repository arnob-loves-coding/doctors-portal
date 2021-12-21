import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "./../../../images/chair.png";

const Banner = () => {
  return (
    <div>
      <Container style={{ marginTop: "60px" }}>
        <Box sx={{ flexGrow: 1 }} style={{ textAlign: "left" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Typography
                variant="h3"
                style={{ textAlign: "left", marginBottom: "15px" }}
              >
                Your New Smile
                <br />
                Starts Here
              </Typography>
              <Typography
                variant="h6"
                style={{ textAlign: "left", marginBottom: "35px" }}
              >
                lorem kasjkd askjdkasjkjkj aksdjkjaksjdk kjaksks kak kajskdjk
                pwiopi asoow osaoieioaosd oasasdkoaklsklkwloa oaiodl alksodioia
                skdoaoia oaisodioa.
              </Typography>
              <Button variant="outlined" style={{ marginLeft: "auto" }}>
                Get appointment
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <img src={bg} style={{ width: "100%" }}></img>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
