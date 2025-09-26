// numbers.ts

// Hàm tìm số lớn nhất
function findLargestNumber(one: number, two: number, three: number): number {
  let largest = one;

  if (two > largest) {
    largest = two;
  }

  if (three > largest) {
    largest = three;
  }

  return largest;
}

// Ví dụ sử dụng:
const num1 = 10;
const num2 = 70;
const num3 = 25;

const maxNumber = findLargestNumber(num1, num2, num3);

console.log(`Max one, two, three: ${maxNumber}`);

// Dòng này cần phải có để in kết quả ra terminal
console.log(`Max one, two, three: ${maxNumber}`);