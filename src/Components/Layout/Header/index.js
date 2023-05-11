import Box from "@mui/material/Box";
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlBell } from "react-icons/sl";
import { TbGridDots } from "react-icons/tb";
import logo from "../../../assets/images/light-logo.png";
import style from "./style";

import { useNavigate } from "react-router-dom";
import { user } from "../../../dummyData/user";
import ProfileDropdown from "../../ProfileDropdown";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box component="nav" sx={style.nav}>
      <Box sx={style.main}>
        <Box sx={style.section1}>
          <Box
            component={TbGridDots}
            color="#3076FF"
            fontSize="15px"
            cursor="pointer"
          />
          <Box
            component="img"
            alt=""
            src={logo}
            sx={style.logo}
            onClick={() => navigate("/")}
          />
        </Box>

        <Box sx={style.section2}>
          <Box
            component={HiOutlineSearch}
            color="#fff"
            fontSize="18px"
            cursor="pointer"
          />
          <Box
            component={SlBell}
            color="#fff"
            fontSize="14px"
            mx="14px"
            cursor="pointer"
          />
          <ProfileDropdown user={user} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
