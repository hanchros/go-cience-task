import React from "react";

import Box from "@mui/material/Box";

import style from "./style";
import { useSelector } from "react-redux";

const voidFunction = () => { };

const InputField = ({
  id,
  name,
  value,
  placeholder,
  onChange = voidFunction,
  onBlur = voidFunction,
  type = "text",
  autoFocus,
}) => {
  const themeType = useSelector((state) => state.theme.type);
  const isLightTheme = themeType === "light";
  const handleChange = (e) => {
    const value = e.target.value;
    const length = value.length;
    const isPhone = type === "tel";
    const isNumber = type === "number";
    const numericCondition =
      !isNaN(value) && ((isPhone && length < 12) || isNumber);

    const isOtherField = !isPhone && !isNumber;

    if (isOtherField || numericCondition) {
      onChange(e);
    }
  };

  return (
    <Box sx={style.inputContainer(isLightTheme)}>
      <Box
        component="input"
        type={type}
        autoFocus={autoFocus}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={(e) => {
          onBlur(e);
        }}
        sx={style.input}
      />
    </Box>
  );
};

export default InputField;
