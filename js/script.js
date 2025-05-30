// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Kukwac
// Created on: May 2025
// This file contains the JS functions for index.html
"use strict"

// This function gets the user's order and displays the result
function foodOrder() {
    //Setting the variables
    const TAX = 0.13;
    let size = document.getElementById('size').value;
    let poutineType = document.getElementById('poutine').value;
    let subtotal = 0;
    let tax = 0;
    let total = 0;
    let display = "";

    if (size == "Limited" && poutineType == "Bacon cheese burger") {
        subtotal = 15.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Great" && poutineType == "Bacon cheese burger") {
        subtotal = 17.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Monster" && poutineType == "Bacon cheese burger") {
        subtotal = 21.75;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Limited" && poutineType == "Beef OMG") {
        subtotal = 16.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Great" && poutineType == "Beef OMG") {
        subtotal = 18.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Monster" && poutineType == "Beef OMG") {
        subtotal = 22.75;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Limited" && poutineType == "Buffalo chicken") {
        subtotal = 13.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Great" && poutineType == "Buffalo chicken") {
        subtotal = 15.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Monster" && poutineType == "Buffalo chicken") {
        subtotal = 20.75;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Limited" && poutineType == "Canadian") {
        subtotal = 16.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Great" && poutineType == "Canadian") {
        subtotal = 18.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Monster" && poutineType == "Canadian") {
        subtotal = 22.75;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Limited" && poutineType == "Original philly") {
        subtotal = 16.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Great" && poutineType == "Original philly") {
        subtotal = 18.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Monster" && poutineType == "Original philly") {
        subtotal = 23.75;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Limited" && poutineType == "Pulled pork") {
        subtotal = 11.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Great" && poutineType == "Pulled pork") {
        subtotal = 13.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Monster" && poutineType == "Pulled pork") {
        subtotal = 17.75;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Limited" && poutineType == "Sauce boss") {
        subtotal = 14.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Great" && poutineType == "Sauce boss") {
        subtotal = 16.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Monster" && poutineType == "Sauce boss") {
        subtotal = 20.75;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Limited" && poutineType == "Sweet sriracha") {
        subtotal = 11.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Great" && poutineType == "Sweet sriracha") {
        subtotal = 13.25;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else if (size == "Monster" && poutineType == "Sweet sriracha") {
        subtotal = 17.75;
        tax = subtotal * TAX;
        total = subtotal + tax;
    }
    else {
        display = "<p>Invalid selection, please try again.</p>";
    }
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal.toFixed(2);
    document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2);
    document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
    document.getElementById("error").innerHTML = display;
}