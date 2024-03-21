import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import profilePic from "../assets/profilePic.jpg";
import { AiFillHome } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

const Item = styled(Paper)(({  }) => ({
}));

export default function AutoGrid() {
  return (
    <Box className="boxName">
      <Grid container spacing={1}>
        <Grid item xs className="lsdkfjl">
          <Item>
            <img className="profilePicture" src={profilePic} alt="" />
          </Item>
        </Grid>

        <Grid item xs={9}>
          <Item>
            <div className="navItem">
            <AiFillHome className="navItems" />
            <FiMessageSquare className="navItems" />
            <IoNotificationsSharp className="navItems" />
            <IoSettingsOutline className="navItems" />
            </div>
          </Item>
        </Grid>

        <Grid item xs={2}>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
