import React from "react";
import { textStyles } from "../../utils/textStyles";
import Box from "@mui/material/Box";

const LabelWrapper = ({ sx = {}, label, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "start", sm: "center" },
        alignItems: { xs: "start", sm: "center" },
        mb: "20px",
        ...sx,
      }}
    >
      <Box
        sx={{
          minWidth: "170px",
          pr: "20px",
          ...textStyles.poppins2,
          fontWeight: "600",
          mb: { xs: 1, sm: 0 },
        }}
        color='primary.contrastText'
      >
        {label}
      </Box>
      {children}
    </Box>
  );
};

export default LabelWrapper;
