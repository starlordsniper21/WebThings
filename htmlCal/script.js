function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    var result = 0;
    
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        case "modulus":
            result = num1 % num2;
            break;
        case "exponent":
            result = Math.pow(num1, num2);
            break;
        default:
            result = "Invalid operation";
    }
    
    document.getElementById("result").textContent = "Result: " + result;
}