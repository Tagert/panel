import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)({
  height: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
  position: "relative",
  "&::-webkit-scrollbar": {
    width: "8px",
    backgroundColor: "transparent",
    transition: "background-color 0.3s ease-in-out",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent",
    borderRadius: "10px",
    transition: "background-color 0.3s ease-in-out",
  },
  "&:hover::-webkit-scrollbar": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  "&:hover::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    cursor: "pointer",
  },
});

interface ScrollableBoxProps {
  children: React.ReactNode;
}

export const ScrollableBox: React.FC<ScrollableBoxProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};
