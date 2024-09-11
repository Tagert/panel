import { ReactNode, useState } from "react";
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { SubItem } from "../../../types/subItem.type";

type CollapsibleListProps = {
  title: string;
  icon: ReactNode;
  subItems: SubItem[];
};

export const CollapsibleList = ({ title, icon, subItems }: CollapsibleListProps) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        component="button"
        onClick={handleToggle}
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
        {open ? <ExpandLess sx={{ color: "#fff" }} /> : <ExpandMore sx={{ color: "#fff" }} />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subItems.map(subItem => (
            <ListItem
              key={subItem.title}
              sx={{
                pl: 1,
                border: "none",
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <ListItemIcon sx={{ color: "#ffffffcc" }}>{subItem.icon}</ListItemIcon>

              <ListItemText primary={subItem.title} sx={{ color: "#fff" }} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};
