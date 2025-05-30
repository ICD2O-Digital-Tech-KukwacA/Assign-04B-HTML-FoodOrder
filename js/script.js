// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Kukwac
// Created on: May 2025
// This file contains the JS functions for index.html
"use strict"

// This function checks if the temperature is hot or cold
function tempCelsius() {
    let display = "";
    let givenTemp = 15
    let userTemp = parseInt(document.getElementById("temp").value);
    
    if (userTemp >= givenTemp) {
        display = "Its hot!";
    }
    
    else {
        display = "Its cold!";
    }
    document.getElementById("result").innerHTML = display; ;
}