let number1 = parseFloat(prompt('Lets Calculate!\n\nEnter first number: '));
let operator = prompt('Select Operator\n\nPress + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division ');
let number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


alert(`Result = ${result}`);



