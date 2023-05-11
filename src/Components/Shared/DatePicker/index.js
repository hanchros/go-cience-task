import React, { useState, useRef } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Box from "@mui/material/Box";
import style from "./style";
import Menu from "@mui/material/Menu";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const voidFunction = () => { };

const DatePicker = ({
  onChange = voidFunction,
  onBlur = voidFunction,
  value = new Date().toISOString(),

  sx = {},
}) => {
  const themeType = useSelector((state) => state.theme.type);
  const isLightTheme = themeType === "light";
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ref = useRef();
  // const width = ref?.current?.clientWidth;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    onBlur();
  };

  const handleChange = (date) => {
    onChange(date);
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
        <Box
          color="#3076FF"
          component={AiOutlineCalendar}
          size="15px"
          mr="14px"
        />
        <Box sx={style.value}>{dayjs(value).format("ddd, MMM D")}</Box>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      // sx={{
      //   "& .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
      //     minWidth: width,
      //   },
      // }}
      >
        <Box sx={{ mx: "auto" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={handleChange} />
          </LocalizationProvider>
        </Box>
      </Menu>
    </Box>
  );
};

export default DatePicker;
