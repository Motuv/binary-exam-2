import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EXAMPLES from "./EXAMPLES";

const useStyles = makeStyles(theme => ({
  styledButton: {
    backgroundColor: "#F29D7E",
    color: "white"
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: 20
  }
}));

export default function Verifier() {
  const classes = useStyles();

  let points = 0;

  function checkAnswers() {
    let one = parseInt(document.getElementById("0").value);
    let two = parseInt(document.getElementById("1").value);
    let three = parseInt(document.getElementById("2").value);
    let four = parseInt(document.getElementById("3").value);
    let five = parseInt(document.getElementById("4").value);
    let six = parseInt(document.getElementById("5").value);
    let seven = parseInt(document.getElementById("6").value);
    let eight = parseInt(document.getElementById("7").value);
    let nine = parseInt(document.getElementById("8").value);
    let ten = parseInt(document.getElementById("9").value);

    if (parseInt(one, 2) === EXAMPLES["0"].value) {
      points++;
    }
    if (parseInt(two, 2) === EXAMPLES["1"].value) {
      points++;
    }
    if (parseInt(three, 2) === EXAMPLES["2"].value) {
      points++;
    }
    if (parseInt(four, 2) === EXAMPLES["3"].value) {
      points++;
    }
    if (parseInt(five, 2) === EXAMPLES["4"].value) {
      points++;
    }
    if (parseInt(six, 2) === EXAMPLES["5"].value) {
      points++;
    }
    if (parseInt(seven, 2) === EXAMPLES["6"].value) {
      points++;
    }
    if (parseInt(eight, 2) === EXAMPLES["7"].value) {
      points++;
    }

    if (parseInt(nine, 2) === EXAMPLES["8"].value) {
      points++;
    }
    if (parseInt(ten, 2) === EXAMPLES["9"].value) {
      points++;
    }
    const numberOfPoints = "You get " + points + " points";
    const score = React.createElement("p", {}, numberOfPoints);
    ReactDOM.render(score, document.getElementById("score"));
    points = 0;
  }

  return (
    <div className={classes.buttonContainer}>
      <Button className={classes.styledButton} onClick={checkAnswers}>
        Check your answers
      </Button>
    </div>
  );
}
