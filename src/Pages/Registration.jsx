import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Images from "../Images";
import registrationImg from "../assets/registrationImage.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { RotatingTriangles } from "react-loader-spinner";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const auth = getAuth();

  let [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    password: "",
  });

  let [registerError, setRegisterError] = useState({
    email: "",
    name: "",
    password: "",
  });
  let navigate = useNavigate();

  let [loading, setLoading] = useState(false);

  let handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setRegisterError({ ...registerError, [e.target.name]: "" });
    // setRegisterData({ ...registerData, [e.target.name]: e.target.value, });
    // setRegisterError({...registerError, name: ""})
    // setRegisterData({ ...registerData, [e.target.name]: e.target.value, });
    // setRegisterError({...registerError, password: ""})
  };

  let handleSubmit = () => {
    let pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    if (!registerData.email) {
      setRegisterError({ ...registerError, email: "Email Required" });
    } else if (!pattern.test(registerData.email)) {
      setRegisterError({ ...registerError, email: "Valid Email Required" });
    } else if (!registerData.name) {
      setRegisterError({ ...registerError, name: "Name Required" });
    } else if (!registerData.password) {
      setRegisterError({ ...registerError, password: "Password Required" });
    } else if (registerData.password.length < 6) {
      setRegisterError({
        ...registerError,
        password: "Password must be greater then 6 Character",
      });
    } else {
      setLoading(true);
      createUserWithEmailAndPassword(
        auth,
        registerData.email,
        registerData.password
      )
        .then((userCredential) => {
          setLoading(false);
          sendEmailVerification(auth.currentUser).then(() => {
            navigate("/login");
            toast("Please Check your mail");
            console.log("hoise");
          })
          .catch((error)=>{

          });
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("hoy nai");
        });
    }
  };

  return (
    <Grid container>
      <Grid h1 xs={6}>
        <h1 className="pt-[225px] pl-[190px] font-bold text-[34.4px] text-[#11175D]">
          Get started with easily register
        </h1>
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
            name="name"
            required
            id="outlined-required"
            label="Full Name"
            defaultValue=""
            onChange={handleChange}
          />
          {registerError.name && (
            <Alert severity="error">{registerError.name}</Alert>
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
          {!loading && (
            <Button
              disabled={false}
              onClick={handleSubmit}
              variant="contained"
              size="large"
            >
              Sign Up
            </Button>
          )}
          <div className="loader">
            {loading && (
              <RotatingTriangles
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="rotating-triangles-loading"
              />
            )}
          </div>
        </div>
        <div className="font-bold text-[13.34px] pt-8 pl-[193px]">
          <p>
            Already have an account ?{" "}
            <span className="text-[#EA6C00]"><Link to="/login">Sign In</Link></span>
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
    </Grid>
  );
};

export default Registration;
