import React from "react";
import style from "./style";
import Box from "@mui/material/Box";

export const MainContainer = ({ children, sx = {}, fullWidthComponent }) => {
  return (
    <Box sx={style.main(sx)}>
      {fullWidthComponent}
      <Box sx={style.container}>{children}</Box>
    </Box>
  );
};

export const ChildContainer = ({ children, sx = {} }) => {
  return <Box sx={style.child(sx)}>{children}</Box>;
};
