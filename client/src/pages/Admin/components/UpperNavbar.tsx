import { Grid2, IconButton, Typography } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

type UpperNavbarProp = {
  open: boolean;
  handleDrawerToggle: () => void;
};

export const UpperNavbar = ({ open, handleDrawerToggle }: UpperNavbarProp) => {
  return (
    <Grid2
      size={12}
      display="flex"
      alignItems="center"
      gap={2}
      height={65}
      px={2}
      py={1}
      borderRadius={3}
      bgcolor="#f0f2f5"
    >
      <Typography variant="h6" noWrap component="div">
        Admin Dashboard
      </Typography>

      <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle} edge="start">
        {open ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
    </Grid2>
  );
};
