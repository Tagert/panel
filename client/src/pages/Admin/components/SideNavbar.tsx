import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme, styled, Theme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 250;

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== "open" })(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

type SideNavbarProp = {
  open: boolean;
  handleDrawerClose: () => void;
};

export const SideNavbar = ({ open, handleDrawerClose }: SideNavbarProp) => {
  const theme = useTheme();

  const sideNavbarList = ["Inbox", "Starred", "Send email", "Drafts"];

  return (
    <StyledDrawer variant="permanent" open={open}>
      <div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>

      <Divider />

      <List>
        {sideNavbarList.map((text, index) => (
          <ListItem component="button" key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};
