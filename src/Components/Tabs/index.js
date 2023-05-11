import Box from "@mui/material/Box";
import React from "react";
import { RiNodeTree } from "react-icons/ri";
import style from "./style";

const Tabs = ({ tab, setTab = () => {} }) => {
  const tabs = [
    { id: "1", icon: RiNodeTree, name: "My Assignments with dates" },
    { id: "2", icon: RiNodeTree, name: "Stuff I've assigned" },
  ];
  return (
    <Box sx={style.main}>
      <Box sx={style.tabs}>
        {tabs.map(({ name, icon, id }) => {
          let match = id === tab;
          return (
            <Box sx={style.tab(match)} onClick={() => setTab(id)}>
              <Box component={icon} mr="10px" minWidth="15px" />

              {name}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Tabs;
