import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import profilePic from "../assets/profilePic.jpg";
import { AiFillHome } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Item = styled(Paper)(({}) => ({}));

export default function AutoGrid() {
  return (
    <div className="flex">
      {/* ---------- Navbar work start ---------- */}

      <div className="w-[186px] bg-[#5F35F5] h-[100vh] rounded-lg">
        <div className="pt-[38px]">
          <img
            className="h-[80px] w-[80px] rounded-[50%] mx-auto"
            src={profilePic}
            alt=""
          />
        </div>
        <div className="mx-auto items-center">
          <AiFillHome className="text-[60px] mx-auto mt-[78px] text-white" />
          <FiMessageSquare className="text-[60px] mx-auto mt-[78px] text-white" />
          <IoNotificationsSharp className="text-[60px] mx-auto mt-[78px] text-white" />
          <IoSettingsOutline className="text-[60px] mx-auto mt-[78px] text-white" />
          <FiLogOut className="text-[60px] mx-auto mt-[140px] text-white" />
        </div>
      </div>

      {/* ---------- Navbar work end ---------- */}

      <div className="bg-red-200 w-[100%]">
        <div className="flex">
          <div>
            <input className="ml-11 mt-7 w-[427px] h-16 rounded-xl text-2xl" type="text" placeholder="Search" />
          </div>
          <div><input className="ml-11 mt-7 w-[427px] h-16 rounded-xl text-2xl" type="text" placeholder="Search" /></div>
          <div><input className="ml-11 mt-7 w-[427px] h-16 rounded-xl text-2xl" type="text" placeholder="Search" /></div>
        </div>
        <div>
          <div><input className="ml-11 mt-7 w-[427px] h-16 rounded-xl text-2xl" type="text" placeholder="Search" /></div>
          <div><input className="ml-11 mt-7 w-[427px] h-16 rounded-xl text-2xl" type="text" placeholder="Search" /></div>
          <div><input className="ml-11 mt-7 w-[427px] h-16 rounded-xl text-2xl" type="text" placeholder="Search" /></div>
        </div>
      </div>
    </div>
  );
}
