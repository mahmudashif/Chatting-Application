import React from "react";
import Grid from "@mui/material/Grid";
import Images from "../Images";
import registrationImg from "../assets/registrationImage.png"

const Registration = () => {
  return (
      <Grid container>
        <Grid h1 xs={6}>
          <h1 style={{background:"red"}}>xs=8</h1>
        </Grid>
        <Grid h1 xs={6}>
            <Images src={registrationImg}/>
        </Grid>
      </Grid>
  );
};

export default Registration;
