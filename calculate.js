"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
    {
        name: "num1",
        message: "Enter your first number",
        type: "number"
    },
    {
        name: "num2",
        message: "Enter you second number",
        type: "number"
    }
]);
