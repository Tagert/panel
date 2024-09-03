import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

export const Header = () => {
  return (
    <Box component="header">
      <Navbar />

      <Hero />
    </Box>
  );
};
