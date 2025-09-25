/**
 * Tính toán chu vi và diện tích của hình vuông.
 * @param squareLength Độ dài cạnh của hình vuông.
 * @returns Trả về một đối tượng chứa chu vi và diện tích.
 */
function calculateSquare(squareLength: number): { perimeter: number; area: number } {
  // Kiểm tra đầu vào: đảm bảo độ dài cạnh là số dương
  if (squareLength <= 0) {
    throw new Error("Độ dài cạnh phải là một số dương.");
  }
  
  // Tính chu vi
  const perimeter = 4 * squareLength;
  
  // Tính diện tích
  const area = squareLength * squareLength;
  
  // Trả về kết quả dưới dạng một đối tượng
  return { perimeter, area };
}

// --- Phần chạy chương trình ---

// Đặt độ dài cạnh của hình vuông (bạn có thể thay đổi giá trị này)
const squareSide: number = 5;

try {
  // Gọi hàm và lưu kết quả
  const result = calculateSquare(squareSide);
  
  // In kết quả ra màn hình
  console.log(`Với độ dài cạnh là: ${squareSide}`);
  console.log(`Chu vi của hình vuông là: ${result.perimeter}`);
  console.log(`Diện tích của hình vuông là: ${result.area}`);

} catch (error: any) {
  // Xử lý lỗi nếu có (ví dụ: người dùng nhập số âm)
  console.error(`Lỗi: ${error.message}`);
}

// Phải có các dòng này để hiển thị kết quả
console.log("Chu vi:", perimeter);
console.log("Diện tích:", area);