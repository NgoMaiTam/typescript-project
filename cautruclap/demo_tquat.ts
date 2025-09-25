let numbers: number[] = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // for
}

for (let num of numbers) {
    console.log(num);        // for...of
}

for (let index in numbers) {
    console.log(index, numbers[index]); // for...in
}

let count = 0;
while(count < 3){
    console.log(count);
    count++;
}

do{
    console.log("Hello");
} while(false);
console.log("Kết thúc vòng lặp"); // Thêm dòng này để in ra kết quả 