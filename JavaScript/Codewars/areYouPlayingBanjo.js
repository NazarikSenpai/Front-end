/* eslint-disable no-unused-vars */
"use strict";

function areYouPlayingBanjo(name) {
  if (name.startsWith("R") || name.startsWith("r")) {
    console.log(name, "plays banjo");
  } else {
    console.log(name, "does not play banjo");
  }

  return name;
}