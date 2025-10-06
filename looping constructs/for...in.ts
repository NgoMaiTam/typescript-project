const user = {
  name: "Alice",
  age: 30,
  city: "New York"
};

// Loop through the keys of the object
for (const key in user) {
  console.log(`${key}: ${user[key as keyof typeof user]}`);
}

console.log("End of loop"); // Add this line to print the result