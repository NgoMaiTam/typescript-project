function demoConst() {
    const z = 30;
    // z = 40; // ❌ Error: cannot reassign a const variable

    const arr = [1, 2, 3];
    arr.push(4); // ✅ Allowed because the reference doesn't change
    console.log(arr); // [1, 2, 3, 4]
}

demoConst(); // Call the function to see the result
