// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit3-02-flowchart/sw.js", {
    scope: "/ICS2O-unit3-02-flowchart/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  // input
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("volume").innerHTML =
    "volume is: " + volume + " cm³"
}
