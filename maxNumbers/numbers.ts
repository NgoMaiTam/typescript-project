// Function to find the largest number in an array
function findMaxNumber(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array is empty. Cannot find the max.");
    }

    let max: number =  -Infinity
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i]! > max) {   // Non-null assertion for numbers[i]
            max = numbers[i]!;
        }
    }

    return max;
}

// Example usage
const numbers: number[] = [
    10, 25, 15, 78, 3, 56, 100, 200, 1, 999,
    450, 600, 700, 123, 321, 987, 654, 234, 876
];

const maxNumber = findMaxNumber(numbers);

console.log(`The largest number is: ${maxNumber}`);
