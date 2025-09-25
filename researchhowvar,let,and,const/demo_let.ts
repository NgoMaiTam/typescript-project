function demoLet() {
    if (true) {
        let y = 20;
        console.log(y); // ✅ 20
    }
    // console.log(y); // ❌ lỗi: y không tồn tại ngoài block
}
demoLet(); // Gọi hàm để thấy kết quả