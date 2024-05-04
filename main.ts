#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
  { name: "pin", message: "emter your pin", type: "number" },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!");

  let opertaionAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    }, 
  ] );


  console.log(opertaionAns);

  if (opertaionAns.operation === "withdraw") {
    let amount = await inquirer.prompt([
      { name: "amount", message: "enter your amount", type: "number" },
    ]);
         
      
  console.log(`your  remaining balance is: ${myBalance} `);
  
    if (amount.amount > myBalance) {
      console.log("Insufficent Balance");
    } else {
      myBalance-= amount.amount
      console.log(
        "Transaction Successful  Your remaining balance is : " + myBalance
      );
    }   
  
  
  } else if  (opertaionAns.operation === "check balance") {
  console.log("your balance is:" + myBalance)
  }
else if(opertaionAns.operation === "fast cash") {
    let fastAmount = await inquirer.prompt([
      {
        name: "amountOpt",
        type: "list",
        message: "Select the amount for your fast cash transaction",
        choices: [1000, 2000, 5000, 10000,],
      },
 ] );   if(fastAmount.amountOpt > myBalance){
  console.log("Insufficient Balance")
}else{
myBalance -= fastAmount.amountOpt
console.log(`Your remaining balance is : ${myBalance}`)
}
} }
else {
  console.log("Incorrect pin number");
}
