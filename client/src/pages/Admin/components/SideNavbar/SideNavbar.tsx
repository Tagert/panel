import { Box, Divider, List, Typography } from "@mui/material";
import { StyledDrawer } from "../../../../libs/StyledDrawer";
import { sideNavbarCommerce, sideNavbarListSettings } from "../../consts";
import { CollapsibleList } from "./CollapsibleList";
import { NavbarItem } from "./NavbarItem";

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
          {sideNavbarCommerce.map(item =>
            item.subItems ? (
              <CollapsibleList key={item.title} title={item.title} icon={item.icon} subItems={item.subItems} />
            ) : (
              <NavbarItem key={item.title} title={item.title} icon={item.icon} />
            ),
          )}

          <Divider
            sx={{ position: "relative", left: "-1rem", width: "calc(100% + 2rem)", marginY: 2, borderColor: "#5e5d62" }}
          />

          {sideNavbarListSettings.map(item => (
            <NavbarItem key={item.title} title={item.title} icon={item.icon} />
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
};
