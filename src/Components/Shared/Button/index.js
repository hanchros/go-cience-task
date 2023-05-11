import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import style from "./style";

const Button = ({
  title,
  loading,
  disabled,
  color = "primary",
  type = "button",
  onClick = () => { },
  variant = "contained",
  sx = {},
}) => {
  return (
    <LoadingButton
      type={type}
      color={color}
      disabled={disabled}
      variant={variant}
      loading={loading}
      onClick={onClick}
      sx={style(disabled, sx)}
    >
      {title}
    </LoadingButton>
  );
};

export default Button;
