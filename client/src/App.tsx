import { Box, Grid2, Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const App = () => {
  return (
    <Box component="section" display="flex" height="100vh">
      <Paper
        sx={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          width: 250,
          height: "calc(100% - 2rem)",
          margin: 2,
          padding: 2,
          borderRadius: 3,
          bgcolor: "#3d3f45",
        }}
      >
        <Typography color="white" variant="h6" noWrap component="div">
          Company name
        </Typography>

        <Divider />
      </Paper>

      <Grid2 container spacing={2} display="flex" flex={1} flexDirection="column" ml={35} p={2}>
        <Grid2
          size={12}
          display="flex"
          alignItems="center"
          height={65}
          px={2}
          py={1}
          borderRadius={3}
          bgcolor="#f0f2f5"
        >
          Testing
        </Grid2>

        <Grid2 size={12}>Testing</Grid2>
      </Grid2>
    </Box>
  );
};

export default App;
