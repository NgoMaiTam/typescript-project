function demoLet() {
    if (true) {
        let y = 20;
        console.log(y); // ✅ 20
    }
    // console.log(y); // ❌ Error: y does not exist outside this block
}

demoLet(); // Call the function to see the result
