function demoVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // ✅ 10 (vẫn truy cập được, dù nằm ngoài block if)
}
demoVar(); // Gọi hàm để thấy kết quả