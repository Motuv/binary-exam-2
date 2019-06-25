import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainHeader from "./MainHeader";
import MainMenu from "./MainMenu";
import Examples from "./Example";
import MainFooter from "./MainFooter";
import Verifier from "./Verifier";

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <MainMenu />
        <Examples />
        <Verifier />
        <div id="score" />
        <MainFooter />
      </div>
    );
  }
}

export default App;
