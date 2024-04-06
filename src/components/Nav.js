import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import {useDispatch} from 'react-redux'
import { toggleSidebar } from "../utils/appsSlice";
export const Nav = () => {
  const dispatch= useDispatch();
  const toggleHandler=()=>{
    dispatch(toggleSidebar());
  }
  return (
    <div className="fixed flex justify-center items-center w-[100vw] top-0 px-2">
      <div className="flex w-[100%] items-center justify-between bg-white z-2 text-xl py-3  px-3">
        <div className="flex cursor-pointer justify-between items-center gap-6 text-[1.8vw]">
          <GiHamburgerMenu onClick={toggleHandler} />
          <FaYoutube />
        </div>
        <div className="flex items-center justify-between  border-2  rounded-full ">
          <input
            className=" w-[500px] h-10 text-xl border-r-2 outline-none py-1 px-5 rounded-l-full"
            type="text"
            placeholder="Search"
            name=""
            id=""
          />
          <button className="px-3 opacity-70">
            <CiSearch className="text-xl" />
          </button>
        </div>
        <div className="flex items-center justify-center text-xl gap-5 cursor-pointer">
          <FaVideo />
          <IoIosNotifications />
          <Avatar
            className="rounded-[50%]"
            src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg"
            size={30}
            round="true"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
