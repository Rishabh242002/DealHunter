import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";
import { ShoppingCart } from "@material-ui/icons";

const Header = () => {

  const today = new Date().toString().slice(0, 10);
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
        DealHunter
        </Typography>
        <Box display="flex">
          {ShoppingCart}
          <Typography variant="h6" className={classes.title}>
            {today}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
