/**
 * square_calculator.ts
 * Program to calculate the perimeter and area of a square.
 */

/**
 * Calculate the perimeter and area of a square.
 * @param sideLength Length of the square's side (must be positive).
 * @returns An object containing perimeter and area.
 */
function calculateSquare(sideLength: number): { perimeter: number; area: number } {
    if (sideLength <= 0) {
        throw new Error("Side length must be a positive number.");
    }
    return {
        perimeter: 4 * sideLength,
        area: sideLength * sideLength
    };
}

// Example usage
const side = 10;

try {
    const result = calculateSquare(side);
    console.log(`Side length: ${side}`);
    console.log(`Perimeter: ${result.perimeter}`);
    console.log(`Area: ${result.area}`);
} catch (error: any) {
    console.error(`Error: ${error.message}`);
}
