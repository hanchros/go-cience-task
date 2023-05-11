import React, { useState, useRef } from "react";
import { GrUp, GrDown } from "react-icons/gr";
import Box from "@mui/material/Box";
import style from "./style";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "../Avatar";
import { useSelector } from "react-redux";

const voidFunction = () => { };

const Dropdown = ({
  onChange = voidFunction,
  onBlur = voidFunction,
  value = "Please Select..",
  options = [],
  isAvatar,
  avatarBackground,
  user = {},
  sx = {},
}) => {
  const themeType = useSelector((state) => state.theme.type);
  const isLightTheme = themeType === "light";
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ref = useRef();
  const width = ref?.current?.clientWidth;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    onBlur();
  };
  const handleChange = (value) => {
    onChange(value);
    handleClose();
  };

  return (
    <Box width="100%" sx={sx}>
      <Box
        sx={style.inputContainer(isLightTheme)}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        ref={ref}
      >
        {isAvatar && (
          <Avatar
            size="24px"
            user={user}
            background={avatarBackground}
            sx={{ mr: "10px" }}
          />
        )}
        <Box sx={style.value}>{value}</Box>
        <Box sx={style.icon}>
          <Box component={open ? GrUp : GrDown} size="10px" />
        </Box>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
            width,
          },
        }}
      >
        {options?.length ? (
          options?.map((name, index) => {
            return (
              <MenuItem onClick={() => handleChange(name)} key={index}>
                {isAvatar && (
                  <Avatar
                    size="24px"
                    user={{ name }}
                    background={avatarBackground}
                    sx={{ mr: "10px" }}
                    key={index}

                  />
                )}
                {name}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem disabled>No Options</MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default Dropdown;
