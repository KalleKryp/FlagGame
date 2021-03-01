import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import flags from "./flags";

ReactDOM.render(
  <Game flags={flags} attempts={3} cheatMode />,
  document.getElementById("root")
);
