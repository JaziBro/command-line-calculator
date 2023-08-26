import {sum} from "./add.js"
import inquirer from "inquirer"
const answers = await inquirer.prompt ([
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
])