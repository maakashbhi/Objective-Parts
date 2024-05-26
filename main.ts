//Task No. 1 :

//Converter Miles-to-kilometers by using comands with typescript with using multiplication methods:

// First create a variable named miles and assign a value
let miles = 60;

//as we know 
//1 mile = 1.60943 kilometers 
//so we can use this formula to convert miles to kilometers

let convertedToKilometers = miles * 1.60934
console.log(convertedToKilometers)

// Task 1 completed. In this task we convert miles into kilometers through multiplication methods..



// Now i changes some thing in this code and kilogram convert into grams


let grams = 5000;



// as we know 
// 1000 grams = 1 kilograms 

let kg = grams / 1000
console.log(kg)
 


//Task 2:
//  Evaluting a Number game by using inquirer with using if else:

// Prompt the user to enter a number
import inquirer from "inquirer"
let dynamic = await inquirer.prompt([
    {
        name:"Number",
        type:"number",
        message:"Please Enter a number"
    }
])

//I assign a dynamic value is 30 , 
// Make a variable with its dynamic value 
let dynamicValue = 30

// Now i use a if and else for the comparing both the values\


if(dynamic === dynamicValue){
    console.log("your value and Dynamic value both are Same")
}else if(dynamic > dynamicValue){
    console.log("your input value is greater than Dynamic value")
}else(dynamic < dynamicValue);{
    console.log("your input value is less than Dynamic value")
}




//Task No.3:
//Friend Checker game:

// //using prompt to enter a name.
 let Friends = await inquirer.prompt([
    {
        name:"Friend",
        type:"input",
        message:"Please Enter your friend name"
    }
])
// we create an variable with name of user name
let userName = Friends

// using switch case statement to check if the entered name is a known friend.
switch(Friends){
    case "zain":
        console.log("Hi Zain how are you, it's been a long time to see you")
        break;
    case "sharoz":
        console.log("Hi shroz how are you, it's long time to see you")
        break;
    default:
        console.log(`${Friends.user} i dont think we ever met before and also i dont know you so bye `)
        break;    

}



//Task 4: Functions 

// Set up two different variables with different values
 const num1 = 30;
 const num2 =  40;

// call a function with these variables as argument and output the result using console
 function sum(a:number,b:number){
}
//pass the argument along with those variables
 let add = sum(num1,num2)
 console.log(add)

// Now changging the argument and call the function again
 let num3 = 2;
 let num4 = 2;

// Now passing these variables as as argument in the function
 let result = sum(num3,num4)
console.log(result)

// You can see the result



 //Calculator Project Using functions

 // Set up two variables containg number values. 
 let number1 = 10
 let number2 = 5
 let Operator = "+"

 // Create a function that takes two numbers and a operator as a parameter perform the corresponding operations and returns the result.
 function calculate(num:number, num2:number, operator:string){
    switch(operator){
        case "+":
            return num + num2;
        case "-":
            return num - num2;
        default:
            return "Invalid Operator"
            break;        
    }
} 

let check2 = calculate(number1,number2,Operator)
console.log(`After Adding ${number1} with ${number2} using Operator "${Operator}" The result is = ${check2}`)


// Update the Operator value and implementing in a function
Operator = "-"

let check3 = calculate(number1,number2,Operator)
console.log(`After Adding ${number1} with ${number2} using Operator "${Operator}" The result is = ${check3}`)




// Task No.5 
//Anonymous Function:
// Assign a function expression to a variable, with one parameter
//Basically it's a Anonymous function.

let respose = function(name:string){
   console.log(`Hello ${name} it's been a long time to see you `)
}
respose("Aakash")

//Now make a same function with different syntax like normal function

//function greet(name:string){
//     console.log(`Hello ${name} it's been a long time to see you `)
// }