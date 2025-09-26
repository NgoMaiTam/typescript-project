// Hàm in ra các số chẵn từ 0 đến n
function printEvenNumbers(n: number): void {
  // Vòng lặp bắt đầu từ 0
  for (let i = 0; i <= n; i++) {
    // Kiểm tra xem số i có phải là số chẵn không
    // Phép toán % (modulo) trả về phần dư của phép chia
    // Nếu i % 2 === 0, tức là i chia hết cho 2 và là số chẵn
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// Gán giá trị cho n để chương trình có thể chạy
const n = 10; 
// Ví dụ sử dụng:
const upper_bound = 10;
console.log(`In các số chẵn từ 0 đến ${upper_bound}:`);
printEvenNumbers(upper_bound);

// Kết quả sẽ là:
// 0
// 2
// 4
// 6
// 8
// 10