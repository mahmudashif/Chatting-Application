import React from "react";
import Grid from "@mui/material/Grid";
import Images from "../Images";
import registrationImg from "../assets/registrationImage.png";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const Registration = () => {
  return (
    <Grid container>
      <Grid h1 xs={6}>
        <h1 className="pt-[225px] pl-[190px] font-bold text-[34.4px] text-[#11175D]">
          Get started with easily register
        </h1>
        <div className="pt-[81px] pl-[193px]">
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        </div>
        <div className="pt-[33px] pl-[193px]">
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          defaultValue=""
        />
        </div>
        <div className="pt-[33px] pl-[193px]">
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div className="pt-[33px] pl-[193px]">
        <Button variant="contained" size="large">
          Sign Up
        </Button>
        </div>
        <div className="font-bold text-[13.34px] pt-8 pl-[193px]">
            <p>Already  have an account ? <span className="text-[#EA6C00]">Sign In</span></p>
        </div>
      </Grid>
      <Grid h1 xs={6}>
        <Images
          src={registrationImg}
          alt="how are you bhai?"
          className="w-[100%] h-[100vh] object-cover"
        />
      </Grid>
    </Grid>
  );
};

export default Registration;
