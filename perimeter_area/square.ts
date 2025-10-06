// Function to calculate perimeter and area of a square
function squareMetrics(squareLength: number): void {
    const perimeter = 4 * squareLength;        // Perimeter = 4 * side length
    const area = squareLength * squareLength;  // Area = side length * side length

    console.log(`Perimeter: ${perimeter}`);
    console.log(`Area: ${area}`);
}

// Example usage
const squareLength: number = 5; // you can change this value
squareMetrics(squareLength);
