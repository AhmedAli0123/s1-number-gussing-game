#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome To Ahmed In Number Gussing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber ",
        type: "number",
        message: "Enter Your Guess Number(Number Limit 1 to 5)"
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulation! You Guessed A Corect Number");
}
else {
    console.log("Sorry You Guessed A Wrong Number");
}
