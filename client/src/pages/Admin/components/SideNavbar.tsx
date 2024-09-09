import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { StyledDrawer } from "../../../libs/StyledDrawer";
import { sideNavbarCommerce, sideNavbarListSettings } from "../consts";

type SideNavbarProp = {
  open: boolean;
  handleDrawerClose: () => void;
};

export const SideNavbar = ({ open }: SideNavbarProp) => {
  return (
    <StyledDrawer variant="permanent" open={open}>
      {open ? (
        <Box p={2}>
          <Typography variant="h6" align="center" color="#fff">
            Company Name
          </Typography>
        </Box>
      ) : (
        <Box p={2}>
          <Typography variant="h6" align="center" color="#fff">
            CN
          </Typography>
        </Box>
      )}

      <Divider sx={{ borderColor: "#5e5d62" }} />

      <Box component="section" p={2}>
        <List>
          {sideNavbarCommerce.map(item => (
            <ListItem
              component="button"
              key={item.title}
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
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} sx={{ color: "#fff" }} />
            </ListItem>
          ))}

          <Divider
            sx={{ position: "relative", left: "-1rem", width: "calc(100% + 2rem)", marginY: 2, borderColor: "#5e5d62" }}
          />

          {sideNavbarListSettings.map(item => (
            <ListItem
              component="button"
              key={item.title}
              sx={{
                bgcolor: "transparent",
                border: "none",
                borderRadius: 2,
                cursor: "pointer",
                paddingX: 0,
                paddingLeft: 1,
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} sx={{ color: "#fff" }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
};
