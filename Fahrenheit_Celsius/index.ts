// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return parseFloat(celsius.toFixed(1)); // round to 1 decimal place
}

// Example usage
const fahrenheit: number = 150; // you can change this value
const celsius: number = fahrenheitToCelsius(fahrenheit);

console.log(`Celsius: ${celsius}`);
