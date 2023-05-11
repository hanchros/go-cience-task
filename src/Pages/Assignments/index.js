import Box from "@mui/material/Box";
import React, { useState } from "react";
import Header from "../../Components/Layout/Header";
import Avatar from "../../Components/Shared/Avatar";
import {
  ChildContainer,
  MainContainer,
} from "../../Components/Shared/Containers";
import Tabs from "../../Components/Tabs";
import Task from "../../Components/Task";
import tasks from "../../dummyData/tasks";
import { user } from "../../dummyData/user";
import style from "./style";

const Assignments = () => {
  const [tab, setTab] = useState("1");

  return (
    <>
      <Header />

      <MainContainer
        sx={{ pb: "95px", backgroundColor: 'primary.background' }}
        fullWidthComponent={<Tabs tab={tab} setTab={setTab} />}
      >
        {
          {
            1: (
              <>
                <Box sx={style.main}>
                  <Avatar
                    size="50px"
                    sx={{ mb: { xs: "10px", sm: "20px" } }}
                    user={user}
                  />
                  <Box sx={style.here}>Here are your assignments</Box>
                </Box>

                <ChildContainer sx={style.childContainer}>
                  {tasks.map((task) => {
                    return <Task task={task} key={task.id} />;
                  })}
                </ChildContainer>
              </>
            ),
            2: <></>,
          }?.[tab]
        }
      </MainContainer>
    </>
  );
};

export default Assignments;
