import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  footerAppBar: {
    position: "static",
    backgroundColor: "#F2AD85",
    padding: 20,
    marginTop: 20,
    borderRadius: 5
  }
}));

export default function MainFooter() {
  const classes = useStyles();
  return (
    <AppBar className={classes.footerAppBar}>
      <Typography component="p">Website created by Piotr Mirosław</Typography>
    </AppBar>
  );
}
