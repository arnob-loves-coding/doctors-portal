import { Grid } from "@mui/material";
import React from "react";
import Calender from "../../Home/Shared/Calender";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      {" "}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Appointments date={date}></Appointments>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardHome;
