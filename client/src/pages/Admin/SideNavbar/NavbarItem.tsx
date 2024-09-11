import { ReactNode } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

type NavbarItemProps = {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
};

export const NavbarItem = ({ title, icon, onClick }: NavbarItemProps) => {
  return (
    <ListItem
      component="button"
      onClick={onClick}
      sx={{
        bgcolor: "transparent",
        border: "none",
        borderRadius: 2,
        cursor: "pointer",
        paddingX: 0,
        paddingLeft: 1,
        transition: "background-color 0.3s ease",
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      <ListItemIcon sx={{ color: "#fff" }}>{icon}</ListItemIcon>

      <ListItemText primary={title} sx={{ color: "#fff" }} />
    </ListItem>
  );
};
