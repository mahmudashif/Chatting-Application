import React from "react";
import Grid from "@mui/material/Grid";
import Images from "../Images";
import loginImg from "../assets/login.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <Grid container>
      <Grid h1 xs={6}>
        <h1 className="pt-[225px] pl-[190px] font-bold text-[34.4px] text-[#11175D]">
        Login to your account!
        </h1>
        <div className="pt-[30px] pl-[193px]">
          <button className="border-primary rounded"><FcGoogle className="inline mr-2"/>Login with Google</button>
        </div>
        <div className="pt-[81px] pl-[193px]">
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
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
          Login to Continue
          </Button>
        </div>
        <div className="font-bold text-[13.34px] pt-8 pl-[193px]">
          <p>
            Already have an account ?{" "}
            <span className="text-[#EA6C00]">Sign Up</span>
          </p>
        </div>
      </Grid>
      <Grid h1 xs={6}>
        <Images
          src={loginImg}
          alt="how are you bhai?"
          className="w-[100%] h-[100vh] object-cover"
        />
      </Grid>
    </Grid>
  );
};

export default Login;
