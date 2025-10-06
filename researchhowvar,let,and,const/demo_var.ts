function demoVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // ✅ 10 (still accessible outside the if block)
}

demoVar(); // Call the function to see the result