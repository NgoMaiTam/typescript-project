// Hàm in các số từ 0 đến n
function printNumbers(n: number): void {
  // Bắt đầu từ 0 và lặp cho đến khi i <= n
  for (let i = 0; i <= n; i++) {
    // In giá trị của i, sau đó xuống dòng
    console.log(i);
  }
}

// Ví dụ sử dụng hàm với n = 10
const n = 10;
console.log(`In các số từ 0 đến ${n}:`);
printNumbers(n);

// Bạn có thể thay đổi giá trị của n để thử với các số khác
// const anotherN = 10;
// console.log(`In các số từ 0 đến ${anotherN}:`);
// printNumbers(anotherN);