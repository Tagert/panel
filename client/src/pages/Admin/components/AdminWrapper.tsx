import { Box, Grid2 } from "@mui/material";
import { UpperNavbar } from "./UpperNavbar";
import { ContentWrapper } from "./ContentWrapper";
import { useState } from "react";
import { SideNavbar } from "./SideNavbar/SideNavbar";

export const AdminWrapper = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box display="flex" gap={1} height={"100vh"}>
      <SideNavbar open={open} handleDrawerClose={handleDrawerClose} />

      <Grid2 container spacing={2} display="flex" flex={1} flexDirection="column" p={2}>
        <UpperNavbar handleDrawerToggle={handleDrawerToggle} open={open} />

        <ContentWrapper />
      </Grid2>
    </Box>
  );
};
