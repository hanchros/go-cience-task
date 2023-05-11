import Box from "@mui/material/Box";
import dayjs from "dayjs";
import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../Shared/Avatar";
import CheckBox from "../Shared/CheckBox";
import style from "./style";

const Task = ({ task }) => {
  const naviagate = useNavigate();
  const { id, isCompleted, name, addedBy, assignedTo, whenDone } =
    task;

  return (
    <>
      <Box sx={style.due}>Due Tommorrow</Box>
      <Box sx={style.divider} />
      <Box sx={style.main}>
        <Box sx={style.addedBy}>{dayjs(addedBy).format("ddd, MMM D")}</Box>
        <Box
          flexGrow={1}
        // onClick={() => {
        //   naviagate(`/task?${id}`);
        // }}
        >
          <Box sx={style.name}

            onClick={() => {
              naviagate(`/task?${id}`);
            }}
          >{name}</Box>
          <Box sx={style.sub}>
            <CheckBox
              color="#3076FF"
              isChecked={isCompleted}
              label={
                <Box sx={style.label}

                >
                  Quisque quis enim ante. Fusce efficitur enim eu laoreet
                  pharetra.
                </Box>
              }
              sx={style.checkbox}
            />
            <Box sx={style.assignedTo}>
              <Avatar
                size="24px"
                user={{ name: assignedTo }}
                background="#3076FF"
                sx={{ mr: "10px" }}
              />
              <Box sx={style.text}>{assignedTo}</Box>
            </Box>
            <Box sx={style.whenDone}>
              <Avatar
                size="24px"
                user={{ name: whenDone }}
                background="#4FC371"
                sx={{ mr: "10px" }}
              />
              <Box sx={style.text}>{whenDone}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Task;
