import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { fade, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#8ea3bf",
    padding: 20,
    position: "static",
    borderRadius: 5
  }
}));

export default function MainHeader() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Typography component="h1" variant="h2">
        Binary Exam 2.0
      </Typography>
    </AppBar>
  );
}
