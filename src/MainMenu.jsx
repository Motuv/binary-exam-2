import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonFont: {
    color: "#f2f2f2",
    fontSize: 20
  },
  styledAppBar: {
    backgroundColor: "#F2AD85",
    position: "static",
    borderRadius: 5,
    marginTop: 10
  },
  styledMenuItem: {
    backgroundColor: "#F2AD85",
    color: "white",
    "&:hover": {
      color: "black"
    }
  }
}));

export default function MainMenu() {
  const classes = useStyles();
  let [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const renderBinaryMenu = (
    <Grid item l>
      <Button
        aria-controls="binary"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.buttonFont}
      >
        <Typography component="h3" variant="h5">
          Binary
        </Typography>
      </Button>
      <Menu
        id="binary"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Binary to Decimal</MenuItem>
        <MenuItem onClick={handleClose}>Binary to Octal</MenuItem>
        <MenuItem onClick={handleClose}>Binary to Hexadecimal</MenuItem>
      </Menu>
    </Grid>
  );

  const renderOctalMenu = (
    <Grid item l>
      <Button
        aria-controls="octal"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.buttonFont}
      >
        <Typography component="h3" variant="h5">
          Octal
        </Typography>
      </Button>
      <Menu
        id="octal"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.styledMenu}
      >
        <MenuItem onClick={handleClose}>Octal to Binary</MenuItem>
        <MenuItem onClick={handleClose}>Octal to Decimal</MenuItem>
        <MenuItem onClick={handleClose}>Octal to Hexadecimal</MenuItem>
      </Menu>
    </Grid>
  );

  const renderDecimalMenu = (
    <Grid item l>
      <Button
        aria-controls="decimal"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.buttonFont}
      >
        <Typography component="h3" variant="h5">
          Decimal
        </Typography>
      </Button>
      <Menu
        id="decimal"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Decimal to Binary</MenuItem>
        <MenuItem onClick={handleClose}>Decimal to Octal</MenuItem>
        <MenuItem onClick={handleClose}>Decimal to Hexadecimal</MenuItem>
      </Menu>
    </Grid>
  );

  const renderHexadecimalMenu = (
    <Grid item l>
      <Button
        aria-controls="hexadecimal"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.buttonFont}
      >
        <Typography component="h3" variant="h5">
          Hexadecimal
        </Typography>
      </Button>
      <Menu
        id="hexadecimal"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.styledMenuItem} onClick={handleClose}>
          Hexadecimal to Binary
        </MenuItem>
        <MenuItem className={classes.styledMenuItem} onClick={handleClose}>
          Hexadecimal to Octal
        </MenuItem>
        <MenuItem className={classes.styledMenuItem} onClick={handleClose}>
          Hexadecimal to Decimal
        </MenuItem>
      </Menu>
    </Grid>
  );

  return (
    <AppBar className={classes.styledAppBar}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {renderBinaryMenu}
        {renderOctalMenu}
        {renderDecimalMenu}
        {renderHexadecimalMenu}
      </Grid>
    </AppBar>
  );
}
