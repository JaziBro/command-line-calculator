import {sum} from "./add.js"
import inquirer from "inquirer"
import {sum2} from "./subtract.js"
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
    },
    {
     name: "operator",
    message:"Enter the operator",
    choices:["+","-","*","/"],
    type:"list"
    }
    ])
    
const result = sum(answers.num1, answers.num2)
console.log (`result is ${result}`)
const result2 = sum2(answers.num1, answers.num2)
console.log (`result is ${result2}`)