import { sum } from "./add.js";
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "num1",
        message: "Enter your first number",
        type: "number"
    },
    {
        name: "num2",
        message: "Enter you second number",
        type: "number"
    },
    {
        name: "operator",
        message: "Select the operator",
        choices: ["+", "-", "*", "/"],
        type: "list",
    }
]);
const result = sum(answers.num1, answers.num2);
console.log(`result is ${result}`);
