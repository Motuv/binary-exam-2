import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import EXAMPLES from "./EXAMPLES";

const useStyles = makeStyles(theme => ({
  styledPaper: {
    width: 100,
    marginTop: 20,
    padding: 7
  },
  styledInput: {
    backgroundColor: "#8ea3bf",
    marginTop: 20,
    padding: 2,
    color: "white"
  }
}));

function generateNumber() {
  for (let i = 0; i < 10; i++) {
    EXAMPLES[i].value = Math.floor(Math.random() * 500 + 1);
  }
}

export default function Examples() {
  const classes = useStyles();
  generateNumber();
  const napis = "(10)";
  return EXAMPLES.map(example => (
    <Grid
      key={example.id}
      container
      alignItems="center"
      justify="center"
      spacing={3}
      className="example"
    >
      <Grid item>
        <Paper className={classes.styledPaper}>
          <Typography component="p">{example.value + " " + napis}</Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Input
          placeholder="Answer"
          className={classes.styledInput}
          id={example.id}
        />
      </Grid>
    </Grid>
  ));
}
