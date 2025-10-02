// Function to print even numbers from 0 to n
function printEvenNumbers(n: number): void {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Example usage
const upperBound = 30;
console.log(`Even numbers from 0 to ${upperBound}:`);
printEvenNumbers(upperBound);

