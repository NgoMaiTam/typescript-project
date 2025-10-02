let numbers: number[] = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // for loop
}

for (let num of numbers) {
    console.log(num);        // for...of loop
}

for (let index in numbers) {
    console.log(index, numbers[index]); // for...in loop
}

let count = 0;
while(count < 3){
    console.log(count);
    count++;
}

do {
    console.log("Hello");
} while(false);

console.log("End of loop"); // Add this line to print the result
