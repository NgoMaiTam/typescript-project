// numbers.ts

// Function to find the largest number in an array
function findLargestNumber(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array is empty.");
    }

    // Safe assignment: numbers[0] is guaranteed to exist because of the check above
    let largest: number = numbers[0]!; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i]! > largest) { // use ! to assert not undefined
            largest = numbers[i]!;
        }
    }

    return largest;
}

// Example usage
const numbersArray: number[] = [
    10, 70, 25, 100, 56, 89, 200, 45, 67, 300, 12, 5, 400, 150, 220
];

const maxNumber = findLargestNumber(numbersArray);

console.log(`The largest number is: ${maxNumber}`);
