// Hàm chuyển đổi Fahrenheit sang Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return parseFloat(celsius.toFixed(1)); // làm tròn 1 chữ số thập phân
}

// Ví dụ chạy thử
const fahrenheit: number = 150; // bạn có thể thay đổi giá trị này
const celsius: number = fahrenheitToCelsius(fahrenheit);

console.log(`Celsius: ${celsius}`);
