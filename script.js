const operator = prompt("Enter the operator (+, -, * and /):");

const num1 = parseFloat(prompt("Enter 20"));
const num2 = parseFloat(prompt("Enter 10"));

let result;

if (operator == "+") {
    result = num1 + num2;
}
else if (operator == "-") {
    result = num1 - num2;
}
else if (operator == "*"){
    result = num1 * num2;
}
else{
    result = num1 / num2;
}

document.write(`${num1} ${operator} ${num2} = ${result}`);
