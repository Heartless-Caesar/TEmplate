import {
  AppBar,
  Grid,
  Typography,
  Button,
  Toolbar,
  Box
} from "@material-ui/core";

import { MenuIcon } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container spacing={24}>
            <Grid item>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Estoque
              </Typography>
            </Grid>

            <Grid item>
              <div>
                <Button color="inherit">Login</Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
