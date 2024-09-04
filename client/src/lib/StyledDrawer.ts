import { styled, Theme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 250;

const openedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  width: drawerWidth,
  height: "calc(100% - 2rem)",
  marginTop: 16,
  marginBottom: 16,
  marginLeft: 16,
  borderRadius: 15,
  background: "linear-gradient(180deg, rgba(62,64,72,1) 25%, rgba(26,26,26,0.8) 125%)",
  overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 10px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 10px)`,
  },
  height: "calc(100% - 2rem)",
  marginTop: 16,
  marginBottom: 16,
  marginLeft: 16,
  borderRadius: 15,
  background: "linear-gradient(180deg, rgba(62,64,72,1) 25%, rgba(26,26,26,0.8) 125%)",
});

export const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== "open" })(({ theme }) => ({
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
