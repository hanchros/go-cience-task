import React, { useState } from "react";
import Box from "@mui/material/Box";
import { AiOutlineCheck } from "react-icons/ai";

const CheckBox = ({
  isChecked,
  label,
  size = "16px",
  color = "primary.main",
  sx = {},
}) => {
  const [checked, setChecked] = useState(isChecked);

  return (
    <Box
      onClick={() => setChecked((prev) => !prev)}
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          minWidth: size,
          height: size,
          borderRadius: "5px",
          border: !checked && "1px solid",
          borderColor: color,
          backgroundColor: checked ? color : "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "20px",
        }}
      >
        {checked && <Box component={AiOutlineCheck} color="#FFF" />}
      </Box>
      {label}
    </Box>
  );
};

export default CheckBox;
