import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setThemeRedux } from "../../store/action/theme";
import Avatar from "../Shared/Avatar";
import style from "./style";

const ProfileDropdown = ({ user = {}, sx = {} }) => {
  const { type } = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const isLightTheme = type === "light";

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ref = useRef();
  const minWidth = ref?.current?.clientWidth;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = [
    {
      name: "Switch Theme",
      onClick: () => {
        dispatch(setThemeRedux(!isLightTheme ? "light" : "dark"));
      },
    },
    { name: "Light", onClick: () => { dispatch(setThemeRedux("light")) } },
    { name: "Dark", onClick: () => { dispatch(setThemeRedux("dark")) } },
  ];

  return (
    <Box>
      <Box
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        ref={ref}
        sx={style.main(sx)}
      >
        <Avatar size="32px" background="red" user={user} />

        <Box sx={style.details}>
          <Box sx={style.name}>{user?.name}</Box>
          <Box sx={style.designation}>{user?.designation}</Box>
        </Box>

        <Box
          component={BiChevronDown}
          color="#fff"
          fontSize="14px"
          display={{ xs: "none", sm: "block" }}
        />
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
            minWidth,
          },
        }}
      >
        {options?.map(({ name, onClick }, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                onClick();
                handleClose();
              }}
            >
              {name}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default ProfileDropdown;
