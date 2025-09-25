const user = {
  name: "Alice",
  age: 30,
  city: "New York"
};

// Lặp qua các khóa của đối tượng
for (const key in user) {
  console.log(`${key}: ${user[key as keyof typeof user]}`);
}
console.log("Kết thúc vòng lặp"); // Thêm dòng này để in ra kết quả