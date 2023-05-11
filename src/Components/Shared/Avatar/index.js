import Box from "@mui/material/Box";
import React from "react";
import style from "./style";

const Avatar = ({ user = {}, background, size = "", sx = {} }) => {
  const { profilePic, name = "" } = user;
  const splittedName = name?.split(" ");
  return (
    <Box sx={style.main({ profilePic, background, sx, size })}>
      {profilePic ? (
        <Box component="img" alt="" src={profilePic} sx={style.image} />
      ) : (
        <Box sx={style.name}>
          {splittedName[0].charAt(0) + splittedName[1]?.charAt(0)}
        </Box>
      )}
    </Box>
  );
};

export default Avatar;
