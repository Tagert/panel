import { Grid2 } from "@mui/material";
import { UpperNavbar } from "./UpperNavbar";
import { ContentWrapper } from "./ContentWrapper";
import { useState } from "react";
import { SideNavbar } from "./SideNavbar";

export const AdminWrapper = () => {
  const [open, setOpen] = useState(true);

  //   const handleDrawerOpen = () => {
  //     setOpen(true);
  //   };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <SideNavbar open={open} handleDrawerClose={handleDrawerClose} />

      <Grid2 container spacing={2} display="flex" flex={1} flexDirection="column" ml={open ? 35 : 10} p={2}>
        <UpperNavbar handleDrawerToggle={handleDrawerToggle} open={open} />

        <ContentWrapper />
      </Grid2>
    </>
  );
};
