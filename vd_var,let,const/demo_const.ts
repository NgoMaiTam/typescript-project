function demoConst() {
    const z = 30;
    // z = 40; // ❌ lỗi: không thể gán lại

    const arr = [1, 2, 3];
    arr.push(4); // ✅ vẫn được vì không đổi tham chiếu
    console.log(arr); // [1,2,3,4]
}
    demoConst(); // Gọi hàm để thấy kết quả
