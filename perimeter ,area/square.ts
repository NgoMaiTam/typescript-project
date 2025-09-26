/**
 * @file square_calculator.ts
 * @description Chương trình tính chu vi và diện tích hình vuông.
 * @author YourName
 */

/**
 * Hàm tính chu vi và diện tích của một hình vuông dựa trên độ dài cạnh.
 * @param squareLength Độ dài cạnh của hình vuông (phải là số dương).
 * @returns Trả về một đối tượng chứa chu vi (perimeter) và diện tích (area).
 */
function calculateSquare(squareLength: number): { perimeter: number; area: number } {
  // Kiểm tra đầu vào hợp lệ: đảm bảo độ dài cạnh là số dương.
  if (squareLength <= 0) {
    throw new Error("Độ dài cạnh phải là một số dương.");
  }
  
  // Tính chu vi theo công thức: P = 4 * cạnh
  const perimeter = 4 * squareLength;
  
  // Tính diện tích theo công thức: A = cạnh * cạnh
  const area = squareLength * squareLength;
  
  // Trả về kết quả dưới dạng một đối tượng.
  return { perimeter, area };
}

// --- Phần chính của chương trình ---
// Khai báo một hằng số cho độ dài cạnh. Bạn có thể thay đổi giá trị này.
const side: number = 10;

try {
  // Gọi hàm calculateSquare và lưu kết quả vào biến 'result'.
  // Đây là bước quan trọng để tránh lỗi 'cannot find name'.
  const result = calculateSquare(side);
  
  // In kết quả ra console.
  console.log(`Với độ dài cạnh là: ${side}`);
  console.log(`Chu vi của hình vuông là: ${result.perimeter}`);
  console.log(`Diện tích của hình vuông là: ${result.area}`);

} catch (error: any) {
  // Bắt lỗi nếu người dùng nhập số không hợp lệ.
  console.error(`Lỗi: ${error.message}`);
}
function main() {
    const squareLength = 5;
    const perimeter = 4 * squareLength;
    const area = squareLength * squareLength;

    console.log("Chu vi:", perimeter);
    console.log("Diện tích:", area);
}

main();
