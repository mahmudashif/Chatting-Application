import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Images from "../Images";
import registrationImg from "../assets/registrationImage.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { FcGoogle } from "react-icons/fc";
import { ColorRing } from "react-loader-spinner";

const Registration = () => {
  let [loading, setLoading] = useState(false);

  let [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  let [registerError, setRegisterError] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setRegisterError({ ...registerError, [e.target.name]: "" });
    // setRegisterData({ ...registerData, [e.target.name]: e.target.value, });
    // setRegisterError({...registerError, name: ""})
    // setRegisterData({ ...registerData, [e.target.name]: e.target.value, });
    // setRegisterError({...registerError, password: ""})
  };

  let handleSubmit = () => {
    if (!registerData.email) {
      setRegisterError({ ...registerError, email: "Email Required" });
    } else if (!registerData.password) {
      setRegisterError({ ...registerError, password: "Password Required" });
    }
  };

  return (
    <Grid container>
      <Grid h1 xs={6}>
        <h1 className="pt-[225px] pl-[190px] font-bold text-[34.4px] text-[#11175D]">
          Login to your account!
        </h1>
        <Button variant="contained">
          <FcGoogle />
          Continue with google
        </Button>
        <div className="pt-[81px] pl-[193px]">
          <TextField
            name="email"
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            onChange={handleChange}
          />
          {registerError.email && (
            <Alert severity="error">{registerError.email}</Alert>
          )}
        </div>
        <div className="pt-[33px] pl-[193px]">
          <TextField
            name="password"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          {registerError.password && (
            <Alert severity="error">{registerError.password}</Alert>
          )}
        </div>
        <div className="pt-[33px] pl-[193px]">
          {!ColorRing &&
          <Button onClick={handleSubmit} variant="contained" size="large">
            Login to Continue
          </Button>
          }
            {ColorRing &&
          <div className="loader">
          <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
          </div>
        }
        </div>
        <div className="font-bold text-[13.34px] pt-8 pl-[193px]">
          <p>
            Don’t have an account ?{" "}
            <span className="text-[#EA6C00]">Sign up</span>
          </p>
        </div>
      </Grid>
      <Grid h1 xs={6}>
        <Images
          src={registrationImg}
          alt="how are you bhai?"
          className="w-[100%] h-[100vh] object-cover"
        />
      </Grid>

      {/* <button className="btn">click here</button> */}
    </Grid>
  );
};

export default Registration;
